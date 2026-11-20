"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  emptyContactState,
  type ContactFieldKey,
} from "@/actions/contact-state";
import { submitContact } from "@/actions/contact";

const fieldBase =
  "w-full border border-white/45 bg-white/5 px-4 py-3 text-[0.9375rem] text-white placeholder:text-white/50 focus:border-white focus:outline-none";

const labelBase =
  "mb-2 block font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-white/85";

/** Marques décoratives « $ /$ » posées aux coins des champs (motif de l'original). */
function CornerMarks() {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-2.5 -top-2 select-none font-mono text-xs text-white/60"
      >
        $
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 -right-3 select-none font-mono text-xs text-white/60"
      >
        /$
      </span>
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-[52px] items-center justify-center gap-2 border border-accent bg-accent px-6 py-4 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-on-accent outline outline-1 outline-offset-4 outline-accent transition-colors hover:bg-white hover:text-panel hover:outline-white disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Envoi en cours…" : "Envoyer ma demande"}
    </button>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm font-semibold text-white">
      {message}
    </p>
  );
}

/**
 * Formulaire de demande de devis — Server Action maison (voir src/actions/contact.ts).
 * Validation côté serveur (zod, messages en français), pot de miel,
 * limitation de débit, envoi par e-mail via Resend. Aucun stockage en base.
 * Panneau bleu du design, marques « $ /$ » décoratives.
 */
export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, emptyContactState);
  const fe = state.fieldErrors ?? {};

  const aria = (key: ContactFieldKey): string | undefined =>
    fe[key] ? `erreur-${key}` : undefined;

  return (
    <div className="relative border border-white/30 bg-panel p-7 sm:p-10">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-3 -top-3 select-none font-mono text-base text-white/60"
      >
        $
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-3 -right-3 select-none font-mono text-base text-white/60"
      >
        /$
      </span>

      {state.status === "success" ? (
        <div role="status" aria-live="polite" className="py-6">
          <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-white">
            [ Message envoyé ]
          </p>
          <p className="mt-4 font-heading text-2xl font-medium leading-snug text-white">
            Merci, votre demande de devis est ouverte.
          </p>
          <p className="mt-3 max-w-xl text-[0.9375rem] leading-[1.8] text-white/85">
            {state.message}
          </p>
        </div>
      ) : (
        <form action={formAction} noValidate className="grid gap-7">
          {/* Erreur générale */}
          {state.status === "error" && state.message ? (
            <p
              role="alert"
              className="border border-white/60 bg-white/10 px-4 py-3 text-[0.9375rem] text-white"
            >
              {state.message}
            </p>
          ) : null}

          <div className="grid gap-7 sm:grid-cols-2">
            <div className="relative">
              <CornerMarks />
              <label htmlFor="nom" className={labelBase}>
                Votre nom
              </label>
              <input
                id="nom"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={Boolean(fe.name)}
                aria-describedby={aria("name")}
                className={`${fieldBase} ${fe.name ? "border-white" : ""}`}
              />
              <FieldError id="erreur-name" message={fe.name} />
            </div>

            <div className="relative">
              <CornerMarks />
              <label htmlFor="email" className={labelBase}>
                Votre adresse e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={Boolean(fe.email)}
                aria-describedby={aria("email")}
                className={`${fieldBase} ${fe.email ? "border-white" : ""}`}
              />
              <FieldError id="erreur-email" message={fe.email} />
            </div>
          </div>

          <div className="relative">
            <CornerMarks />
            <label htmlFor="entreprise" className={labelBase}>
              Votre entreprise
            </label>
            <input
              id="entreprise"
              name="company"
              type="text"
              autoComplete="organization"
              required
              aria-invalid={Boolean(fe.company)}
              aria-describedby={aria("company")}
              className={`${fieldBase} ${fe.company ? "border-white" : ""}`}
            />
            <FieldError id="erreur-company" message={fe.company} />
          </div>

          <div className="relative">
            <CornerMarks />
            <label htmlFor="appels" className={labelBase}>
              Les appels que vous souhaitez nous confier
            </label>
            <textarea
              id="appels"
              name="message"
              rows={6}
              required
              placeholder="Décrivez votre activité, les demandes reçues et ce qui compte pour vos clients."
              aria-invalid={Boolean(fe.message)}
              aria-describedby={aria("message")}
              className={`${fieldBase} resize-y ${fe.message ? "border-white" : ""}`}
            />
            <FieldError id="erreur-message" message={fe.message} />
          </div>

          {/* Pot de miel — invisible pour les humains, attractif pour les robots */}
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
          >
            <label htmlFor="website">Ne pas remplir ce champ</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <SubmitButton />
            <p className="mt-4 max-w-xl text-sm leading-[1.7] text-white/80">
              Les informations transmises servent uniquement à traiter votre
              demande de devis. Voir la{" "}
              <Link
                href="/confidentialite"
                className="text-white underline underline-offset-4 hover:text-white/70"
              >
                Politique de confidentialité
              </Link>
              . Ne transmettez pas de données personnelles de vos clients dans
              ce premier message.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
