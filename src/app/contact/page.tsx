import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import Chip from "@/components/Chip";
import ContactForm from "@/components/ContactForm";
import { site } from "@/config/site";
import { contactFacts } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Contact — Parlons de vos appels | Nzé Call",
  description:
    "Parlons de votre accueil téléphonique, de votre service client ou de vos rappels. Envoyez votre demande à Nzé Call, entreprise basée à Libreville, au Gabon.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* ------------------------------------------------ Ouverture */}
      <section className="relative overflow-hidden border-b border-hairline bg-[radial-gradient(ellipse_at_50%_60%,#10243b_0%,#010b1b_66%)]">
        {/* Pastilles flottantes — décoratives, floues et discrètes, masquées sur petit écran */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
          <span className="absolute left-[10%] top-[22%] border border-ink/30 bg-surface/85 px-2.5 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.09em] text-ink opacity-90 blur-[1.3px]">
            <span className="mr-1.5 inline-block h-[5px] w-[5px] bg-accent align-middle" />
            Ligne humaine · FR
          </span>
          <span className="absolute right-[9%] top-[30%] border border-ink/30 bg-surface/85 px-2.5 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.09em] text-ink opacity-90 blur-[1.3px]">
            Échange à venir <span aria-hidden="true">→</span>
          </span>
        </div>

        <div className="relative z-[1] mx-auto max-w-[1440px] px-5 py-24 text-center sm:px-8 lg:px-12 lg:py-32">
          <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-muted">
            Nzé Call / Contact / Libreville
          </p>
          <h1 className="mx-auto mb-7 mt-6 max-w-[900px] font-heading text-[clamp(2.8rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.05em] text-ink">
            Parlons de vos appels.
          </h1>
          <p className="mx-auto mb-9 max-w-[600px] text-[clamp(1.0625rem,1.6vw,1.3125rem)] leading-[1.6] text-silver">
            Un accueil à organiser, des demandes clients à suivre ou des
            prospects à rappeler&nbsp;? Commençons par comprendre ce que vos
            interlocuteurs attendent de vous.
          </p>
          <ButtonLink href="#formulaire">
            Demander un devis <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>
      </section>

      {/* ------------------------------------------------ Filigrane */}
      <section aria-label="L'humain dans la conversation" className="border-b border-hairline">
        <div className="mx-auto flex max-w-[1440px] items-end gap-8 px-5 py-12 sm:px-8 lg:px-12">
          <p
            aria-hidden="true"
            className="select-none font-heading text-[clamp(4.5rem,17vw,14rem)] font-semibold leading-[0.85] tracking-[-0.03em] text-ink"
          >
            0
          </p>
          <p className="mb-4 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-muted">
            L&rsquo;humain dans la conversation
          </p>
        </div>
      </section>

      {/* ------------------------------------------------ La première étape */}
      <section aria-labelledby="titre-premiere-etape" className="border-b border-hairline">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:px-12 lg:py-28">
          <div>
            <h2
              id="titre-premiere-etape"
              className="max-w-[800px] font-heading text-[clamp(2.3rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
            >
              La première étape, c&rsquo;est de vous écouter.
            </h2>
            <p className="mt-7 max-w-2xl text-[1.0625rem] leading-[1.75] text-muted">
              Parlez-nous de votre activité, des appels qui arrivent et des
              situations qui demandent une attention particulière. Nous pourrons
              ensuite définir ensemble les consignes, les accès nécessaires et
              les limites de la mission.
            </p>
          </div>
          <Image
            src="/images/onde.svg"
            alt=""
            width={400}
            height={200}
            unoptimized
            className="mx-auto w-[clamp(120px,14vw,180px)]"
          />
        </div>
      </section>

      {/* ------------------------------------------------ Votre demande */}
      <section id="formulaire" aria-labelledby="titre-demande" className="scroll-mt-24 border-b border-hairline bg-shade">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Chip>Votre demande / 01</Chip>
          <h2
            id="titre-demande"
            className="mt-5 max-w-[800px] font-heading text-[clamp(2.3rem,5.5vw,5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
          >
            Dites-nous ce qu&rsquo;il faut prendre en charge.
          </h2>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-[1.7] text-muted">
            Quelques repères suffisent pour préparer une conversation utile.
            Une personne de notre équipe prendra connaissance de votre demande.
            Votre message ouvre une demande de devis&nbsp;; notre réponse
            précise le cadre, les délais et le coût de la mission.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <ContactForm />

            <aside>
              <dl>
                {contactFacts.map((fact) => (
                  <div
                    key={fact.key}
                    className="flex flex-col gap-1 border-b border-hairline py-5 first:border-t sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <dt className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-muted">
                      {fact.key}
                    </dt>
                    <dd className="text-[0.9375rem] text-silver">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Notre point de départ */}
      <section aria-labelledby="titre-point-depart" className="border-b border-hairline">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28">
          <div>
            <Chip>Notre point de départ / 02</Chip>
            <h2
              id="titre-point-depart"
              className="mt-5 font-heading text-[clamp(2.3rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
            >
              Basés à Libreville, à l&rsquo;écoute de vos clients.
            </h2>
            <p className="mt-7 text-[1.0625rem] leading-[1.7] text-muted">
              Nzé Call est une société en cours de constitution, basée à
              Libreville. Derrière chaque échange, un interlocuteur francophone
              qui comprend les nuances d&rsquo;une demande et sait quand
              répondre, transmettre ou solliciter votre validation.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                href="/approche"
                className="group border border-hairline p-6 transition-colors hover:border-accent"
              >
                <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-muted">
                  Notre approche
                </p>
                <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink">
                  Une voix humaine, des outils convenus avec vous{" "}
                  <span aria-hidden="true" className="text-accent transition-transform group-hover:translate-x-0.5 inline-block">→</span>
                </p>
              </Link>
              <Link
                href="#formulaire"
                className="group border border-hairline p-6 transition-colors hover:border-accent"
              >
                <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-muted">
                  Échange dédié
                </p>
                <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink">
                  Demander un devis{" "}
                  <span aria-hidden="true" className="text-accent transition-transform group-hover:translate-x-0.5 inline-block">→</span>
                </p>
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] max-h-[640px] overflow-hidden border border-hairline">
            <Image
              src="/images/contact-espace.jpg"
              alt="Espace de travail calme et épuré"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ La suite */}
      <section aria-labelledby="titre-suite" className="bg-surface">
        <div className="mx-auto max-w-[1440px] px-5 py-20 text-center sm:px-8 lg:px-12 lg:py-28">
          <Chip>La suite / Nzé Call</Chip>
          <h2
            id="titre-suite"
            className="mx-auto mb-9 mt-6 max-w-[900px] font-heading text-[clamp(2.4rem,6vw,5.25rem)] font-medium leading-[1.02] tracking-[-0.045em] text-ink"
          >
            Faisons une place à la bonne voix dans votre entreprise.
          </h2>
          <ButtonLink href="#formulaire">
            Demander un devis <span aria-hidden="true">→</span>
          </ButtonLink>
          <p className="mt-10 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-muted">
            {site.location} · {site.footerDescription}
          </p>
        </div>
      </section>
    </>
  );
}
