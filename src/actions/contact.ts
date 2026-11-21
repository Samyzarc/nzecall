"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/config/site";
import { homeServices } from "@/content/site-content";
import type { ContactFormState, ContactFieldKey } from "./contact-state";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Veuillez indiquer votre nom (au moins 2 caractères).")
    .max(120, "Le nom est trop long."),
  email: z
    .email("Veuillez indiquer une adresse e-mail valide.")
    .max(200, "L'adresse e-mail est trop longue."),
  company: z
    .string()
    .trim()
    .min(2, "Veuillez indiquer le nom de votre entreprise ou organisation.")
    .max(160, "Le nom de l'entreprise est trop long."),
  message: z
    .string()
    .trim()
    .min(20, "Décrivez brièvement les appels à confier (au moins 20 caractères).")
    .max(4000, "Le message est trop long (4000 caractères maximum)."),
  /** Services cochés dans le formulaire (facultatifs, filtrés sur la liste offerte) */
  services: z.array(z.string().max(80)).max(4).optional(),
  /** Champ pot de miel : doit rester vide */
  website: z.string().max(0).optional(),
});

/* ------------------------------------------------------------------ */
/* Limitation de débit minimaliste, en mémoire, par adresse IP.        */
/* Aucune donnée n'est persistée : le compteur disparaît avec le       */
/* processus.                                                          */
/* ------------------------------------------------------------------ */
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 heure
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

async function clientIp(): Promise<string> {
  const h = await headers();
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return h.get("x-real-ip") ?? "inconnu";
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // 1. Pot de miel rempli -> robot : on répond « succès » sans rien faire.
  if ((formData.get("website") as string | null)?.trim()) {
    return {
      status: "success",
      message:
        "Votre message a bien été envoyé. Nous revenons vers vous sous 2 jours ouvrés.",
    };
  }

  // 2. Validation côté serveur (messages en français), avant tout envoi.
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
    services: formData.getAll("services"),
    website: formData.get("website"),
  });

  if (!parsed.success) {
    const fieldErrors: Partial<Record<ContactFieldKey, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as ContactFieldKey | "website";
      if (key !== "website" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Certains champs demandent votre attention avant l'envoi.",
      fieldErrors,
    };
  }

  const data = parsed.data;
  // Seuls les noms de services réellement offerts sont conservés.
  const offered = homeServices.map((s) => s.name);
  const services = (data.services ?? []).filter((v) => offered.includes(v));

  // 3. Limitation de débit : seules les soumissions valides (qui déclenchent
  //    un envoi) consomment le quota, pour ne pas pénaliser les erreurs de saisie.
  const ip = await clientIp();
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message:
        "Trop de messages envoyés depuis cette adresse. Merci de réessayer dans une heure.",
    };
  }

  // 4. Envoi de l'e-mail via Resend (aucun stockage en base de données).
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // En développement, on simule l'envoi pour pouvoir tester le parcours complet.
    if (process.env.NODE_ENV === "development") {
      console.info(
        "[contact] RESEND_API_KEY absente (développement) — message non envoyé :",
        { name: data.name, email: data.email, company: data.company },
      );
      return {
        status: "success",
        message:
          "Votre message a bien été envoyé. Nous revenons vers vous sous 2 jours ouvrés.",
      };
    }
    console.error("[contact] RESEND_API_KEY manquante");
    return {
      status: "error",
      message:
        "L'envoi est momentanément indisponible. Merci de réessayer dans quelques instants.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM ?? "Nzé Call <onboarding@resend.dev>";
    const { error } = await resend.emails.send({
      from,
      to: site.contactEmail,
      replyTo: data.email,
      subject: `Demande de devis — ${data.company}`,
      text: [
        `Nouvelle demande de devis depuis le site ${site.name}.`,
        "",
        `Nom : ${data.name}`,
        `E-mail professionnel : ${data.email}`,
        `Entreprise : ${data.company}`,
        ...(services.length
          ? [`Services envisagés : ${services.join(", ")}`]
          : []),
        "",
        "Appels à confier, décrits par le demandeur :",
        data.message,
        "",
        `— Message transmis automatiquement ; aucune copie n'est conservée sur le site.`,
      ].join("\n"),
    });
    if (error) {
      console.error("[contact] Resend a refusé l'envoi");
      return {
        status: "error",
        message:
          "L'envoi est momentanément indisponible. Merci de réessayer dans quelques instants.",
      };
    }
  } catch {
    console.error("[contact] échec de l'envoi");
    return {
      status: "error",
      message:
        "L'envoi est momentanément indisponible. Merci de réessayer dans quelques instants.",
    };
  }

  return {
    status: "success",
    message:
      "Votre message a bien été envoyé. Nous revenons vers vous sous 2 jours ouvrés pour préciser le cadre, les délais et le coût de la mission.",
  };
}
