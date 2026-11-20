import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/Accordion";
import ArrowLink from "@/components/ArrowLink";
import { ButtonLink } from "@/components/Button";
import Chip from "@/components/Chip";
import { site } from "@/config/site";
import {
  afterHelloSteps,
  constellationItems,
  faqItems,
  servicesDetail,
} from "@/content/site-content";

export const metadata: Metadata = {
  title: "Services d'accueil et de relation client | Nzé Call",
  description:
    "Découvrez les quatre services Nzé Call : accueil téléphonique, service client, rendez-vous B2B et rappel de prospects, assurés par des voix humaines.",
  alternates: { canonical: "/services" },
};

/** Éléments du bandeau défilant (répétés pour la boucle). */
const tickerItems = [
  site.location,
  "Interlocuteurs francophones",
  "Outils convenus avec vous",
];

function TickerHalf() {
  return (
    <div className="flex shrink-0 items-center">
      {Array.from({ length: 6 }).map((_, i) =>
        tickerItems.map((item) => (
          <span
            key={`${i}-${item}`}
            className="flex items-center whitespace-nowrap font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-on-accent"
          >
            <span aria-hidden="true" className="mx-6 text-on-accent/70">✳</span>
            {item}
          </span>
        )),
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* ------------------------------------------------ Ouverture */}
      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-12 lg:py-24">
          <div className="lg:col-span-6">
            <Chip tone="ink" mark="✳">
              Nzé Call · {site.location}
            </Chip>
            <h1 className="mt-6 font-heading text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.05em] text-ink">
              Nos services
            </h1>
            <div className="mt-9">
              <ButtonLink href="/contact">
                Demander un devis <span aria-hidden="true">→</span>
              </ButtonLink>
            </div>
            <p className="mt-9 max-w-xl text-[1.0625rem] leading-[1.7] text-muted">
              Confiez-nous les conversations qui font vivre votre relation
              client, sans perdre la maîtrise de ce qui se dit.
            </p>
            <p className="mt-8 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-muted">
              Une voix humaine à chaque étape <span aria-hidden="true">→</span>
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden border border-hairline">
              <Image
                src="/images/services-hero.jpg"
                alt="Une conseillère échange au téléphone dans un bureau"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <p className="absolute left-4 top-4 bg-bg/85 px-3.5 py-2.5 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-ink">
                <span aria-hidden="true" className="mr-2 inline-block h-[7px] w-[7px] bg-accent align-middle" />
                Ligne humaine · FR
              </p>
            </div>

            <nav aria-label="Les quatre services" className="mt-6">
              <ul className="list-none">
                {servicesDetail.map((s) => (
                  <li key={s.anchor} className="border-t border-hairline last:border-b">
                    <a
                      href={`#${s.anchor}`}
                      className="group flex items-baseline gap-5 py-4"
                    >
                      <span className="font-mono text-xs font-bold tracking-[0.15em] text-muted">
                        {s.number}
                      </span>
                      <span className="flex-1 font-heading text-[1.125rem] font-medium text-ink underline-offset-4 transition-colors group-hover:text-accent group-hover:underline">
                        {s.name}
                      </span>
                      <span aria-hidden="true" className="text-muted transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Bandeau défilant */}
      <div
        aria-hidden="true"
        className="overflow-hidden border-b border-accent-hover bg-accent py-4"
      >
        <div className="ticker-track">
          <TickerHalf />
          <TickerHalf />
        </div>
      </div>

      {/* ------------------------------------------------ Les quatre missions */}
      <section aria-labelledby="titre-missions" className="border-b border-hairline">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2
              id="titre-missions"
              className="max-w-[800px] font-heading text-[clamp(2.3rem,5.5vw,5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
            >
              Quatre missions, un même sens de l&rsquo;écoute.
            </h2>
            <p className="max-w-[330px] text-[0.9375rem] leading-[1.7] text-muted">
              Du premier appel au suivi d&rsquo;une demande, chaque
              intervention commence par un cadre défini avec vous.
            </p>
          </div>

          <div>
            {servicesDetail.map((s) => (
              <article
                key={s.anchor}
                id={s.anchor}
                className="grid scroll-mt-24 gap-8 border-t border-hairline py-12 last:border-b lg:grid-cols-[2fr_3fr] lg:gap-16"
              >
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-muted">
                    {s.number} / {s.label}
                  </p>
                  <h3 className="mt-4 font-heading text-[clamp(1.65rem,2.6vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.02em] text-ink">
                    {s.name}
                  </h3>
                  <ArrowLink href="/contact" className="mt-6">
                    {s.cta}
                  </ArrowLink>
                </div>
                <p className="max-w-2xl text-[1.0625rem] leading-[1.8] text-silver">
                  {s.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Une conversation libre, un cadre précis */}
      <section aria-labelledby="titre-cadre" className="border-b border-hairline bg-shade">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28">
          <Image
            src="/images/equalizer.svg"
            alt=""
            width={480}
            height={240}
            unoptimized
            className="mx-auto w-full max-w-[420px]"
          />
          <div>
            <h2
              id="titre-cadre"
              className="font-heading text-[clamp(2.3rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
            >
              Une conversation libre, un cadre précis.
            </h2>
            <p className="mt-7 text-[1.0625rem] leading-[1.7] text-muted">
              Une personne sait écouter une nuance. Elle doit aussi savoir
              exactement quand agir, transmettre ou vous demander de décider.
            </p>
            <ul className="mt-10 list-none" role="list">
              {constellationItems.map((item) => (
                <li key={item.title} className="border-t border-hairline py-7 last:border-b">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-muted">
                    <span aria-hidden="true" className="mr-2 text-accent">{item.mark}</span>
                    {item.chip}
                  </p>
                  <h3 className="mt-3 font-heading text-[1.375rem] font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-[1.7] text-muted">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Ce qui se passe après « bonjour » */}
      <section aria-labelledby="titre-bonjour" className="border-b border-hairline">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28">
          <div className="relative order-last aspect-[4/5] max-h-[640px] overflow-hidden lg:order-first">
            <Image
              src="/images/feature-echange.jpg"
              alt="Deux collègues échangent sur le suivi d'une demande client"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <p className="absolute bottom-5 right-5 bg-bg/85 px-3.5 py-2.5 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-ink">
              Échange en cours <span aria-hidden="true">→</span>
            </p>
          </div>

          <div>
            <Chip>Ce qui se passe après «&nbsp;bonjour&nbsp;»</Chip>
            <h2
              id="titre-bonjour"
              className="mt-5 font-heading text-[clamp(2.3rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
            >
              Votre façon de répondre reste la vôtre.
            </h2>
            <p className="mt-7 text-[1.0625rem] leading-[1.7] text-muted">
              Externaliser une conversation ne signifie pas déléguer toutes les
              décisions. Nzé Call travaille avec vos consignes, vos outils et
              des points de relais clairement définis.
            </p>
            <ul className="mt-8 list-none space-y-4" role="list">
              {afterHelloSteps.map((step) => (
                <li key={step} className="flex items-start gap-4">
                  <span aria-hidden="true" className="mt-1 shrink-0 font-mono text-accent">✳</span>
                  <p className="text-[0.9375rem] leading-[1.7] text-silver">{step}</p>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ArrowLink href="/approche">Découvrir notre approche</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Questions */}
      <section aria-labelledby="titre-questions" className="border-b border-hairline bg-shade">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div className="lg:col-span-5">
            <Chip>Avant de commencer</Chip>
            <h2
              id="titre-questions"
              className="mt-5 font-heading text-[clamp(2.3rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
            >
              Les questions à poser, les réponses à construire.
            </h2>
            <p className="mt-7 text-[1.0625rem] leading-[1.7] text-muted">
              Chaque entreprise a ses propres appels. Nous définissons ensemble
              ce qui doit être pris en charge avant qu&rsquo;un agent ne
              réponde en votre nom.
            </p>
          </div>
          <div className="lg:col-span-7">
            <Accordion items={faqItems} defaultOpenIndex={0} />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Conclusion */}
      <section aria-labelledby="titre-suite" className="bg-surface">
        <div className="mx-auto grid max-w-[1440px] items-end gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:px-12 lg:py-28">
          <div>
            <Chip>La prochaine conversation commence ici</Chip>
            <Image
              src="/images/phone.svg"
              alt=""
              width={260}
              height={260}
              unoptimized
              className="mt-6 w-[clamp(100px,11vw,145px)]"
            />
            <h2
              id="titre-suite"
              className="mb-8 mt-6 max-w-[900px] font-heading text-[clamp(2.4rem,6vw,5.25rem)] font-medium leading-[1.02] tracking-[-0.045em] text-ink"
            >
              Parlons des appels que vous souhaitez nous confier.
            </h2>
            <ButtonLink href="/contact">
              Demander un devis <span aria-hidden="true">→</span>
            </ButtonLink>
          </div>
          <aside className="border-t border-ink/40 pt-6">
            <p className="text-[0.9375rem] leading-[1.7] text-ink/80">
              Accueil, suivi, rendez-vous ou rappels&nbsp;: décrivons votre
              besoin et le cadre dans lequel Nzé Call peut intervenir.
            </p>
            <p className="mt-5">
              <Link
                href="/contact"
                className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-ink/70 underline-offset-4 hover:text-accent hover:underline"
              >
                Nous écrire <span aria-hidden="true">→</span>
              </Link>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
