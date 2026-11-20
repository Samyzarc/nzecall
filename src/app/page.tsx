import Image from "next/image";
import Link from "next/link";
import ArrowLink from "@/components/ArrowLink";
import { ButtonLink } from "@/components/Button";
import Chip from "@/components/Chip";
import Reveal from "@/components/Reveal";
import { site } from "@/config/site";
import {
  heroPills,
  homeScenes,
  homeServices,
  storySteps,
  testimonials,
} from "@/content/site-content";

/** Données structurées : Organisation + établissement (Libreville, Gabon). */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/logo-accent.svg`,
  description: site.description,
  slogan: site.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Libreville",
    addressCountry: "GA",
  },
  areaServed: ["France", "Union européenne", "Afrique francophone"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Contact commercial",
    email: site.contactEmail,
    availableLanguage: ["Français"],
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  image: `${site.url}/og-image.png`,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Libreville",
    addressCountry: "GA",
  },
  email: site.contactEmail,
};

/** Positions des quatre pastilles flottantes du hero (repérées sur l'original). */
const pillPositions = [
  "left-[8%] top-[14%]",
  "right-[7%] top-[25%]",
  "bottom-[13%] right-[12%]",
  "bottom-[21%] left-[4%]",
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />

      {/* ------------------------------------------------ Hero */}
      <section className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden border-b border-hairline bg-[radial-gradient(ellipse_at_50%_60%,#10243b_0%,#010b1b_66%)]">
        {/* Pastilles flottantes — décoratives, floues et discrètes, masquées sur petit écran */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
          {heroPills.map((label, i) => (
            <span
              key={label}
              className={`absolute border border-ink/30 bg-surface/85 px-2.5 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.09em] text-ink opacity-90 blur-[1.3px] ${
                pillPositions[i % pillPositions.length]
              }`}
            >
              <span className="mr-1.5 inline-block h-[5px] w-[5px] bg-accent align-middle" />
              {label}
            </span>
          ))}
        </div>

        <div className="relative z-[1] mx-auto w-full max-w-[1440px] px-5 py-24 text-center sm:px-8 lg:px-12 lg:py-28">
          <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-muted">
            Nzé Call · {site.location}
          </p>
          <h1 className="mx-auto mb-7 max-w-[1250px] font-heading text-[clamp(3.1rem,9.5vw,8.5rem)] font-medium leading-[0.95] tracking-[-0.05em] text-ink">
            La bonne voix
            <br />
            au bon moment.
          </h1>
          <p className="mx-auto mb-8 max-w-[600px] text-[clamp(1.0625rem,1.6vw,1.3125rem)] leading-[1.6] text-silver">
            Vos clients ont besoin d&rsquo;être écoutés, pas simplement redirigés.
            Nzé Call confie chaque conversation à un interlocuteur francophone,
            attentif à vos consignes comme à vos clients.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-7">
            <ButtonLink href="/contact">
              Demander un devis <span aria-hidden="true">→</span>
            </ButtonLink>
          </div>
        </div>

        <div className="absolute bottom-5 left-0 right-0 flex items-center justify-between gap-4 px-5 text-muted sm:px-8 lg:px-12">
          <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em]">
            L&rsquo;humain au cœur du service
          </p>
          <p aria-hidden="true" className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em]">
            Faire défiler ↓
          </p>
        </div>
      </section>

      {/* ------------------------------------------------ Chaque appel compte */}
      <section aria-labelledby="titre-appel" className="bg-shade">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
          <div className="mx-auto mb-14 max-w-6xl text-center">
            <div className="flex items-center justify-center gap-8 lg:gap-10">
              <Image
                src="/images/onde.svg"
                alt=""
                width={400}
                height={200}
                unoptimized
                className="hidden w-[clamp(120px,13vw,190px)] lg:block"
              />
              <h2
                id="titre-appel"
                className="font-heading text-[clamp(2.5rem,5.5vw,5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink lg:whitespace-nowrap lg:text-[clamp(3rem,5.2vw,5rem)]"
              >
                Chaque appel compte.
              </h2>
              <Image
                src="/images/onde.svg"
                alt=""
                width={400}
                height={200}
                unoptimized
                className="hidden w-[clamp(120px,13vw,190px)] -scale-x-100 lg:block"
              />
            </div>
            <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-[1.7] text-muted">
              À l&rsquo;autre bout du fil, une personne qui comprend la
              demande et sait quoi en faire.
            </p>
          </div>

          <ul className="grid list-none gap-4 md:grid-cols-3" role="list">
            {homeScenes.map((s) => (
              <li
                key={s.number}
                className="flex min-w-0 flex-col gap-4 border border-ink/25 bg-surface p-7"
              >
                <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-muted">
                  {s.number} / {s.name}
                  <span aria-hidden="true" className="ml-2 inline-block h-[7px] w-[7px] bg-accent align-middle" />
                </p>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="inline-flex self-start bg-ink px-4 py-2.5 font-heading text-[0.9375rem] font-medium text-bg">
                  <span aria-hidden="true" className="mr-3 text-accent">●</span>
                  {s.chip}
                </p>
                <h3 className="font-heading text-[1.375rem] font-medium leading-[1.2] tracking-[-0.01em] text-ink">
                  {s.heading}
                </h3>
                <p className="text-[0.9375rem] leading-[1.7] text-muted">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------ Ce que nous prenons en charge */}
      <section aria-labelledby="titre-offre">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Chip>Ce que nous prenons en charge</Chip>
              <h2
                id="titre-offre"
                className="mt-5 max-w-[800px] font-heading text-[clamp(2.5rem,5.5vw,5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
              >
                Quatre façons d&rsquo;être présents pour vous.
              </h2>
            </div>
            <p className="max-w-[330px] text-[0.9375rem] leading-[1.7] text-muted">
              Une mission commence par des consignes écrites et un périmètre
              clair. Vos clients entendent une voix humaine&nbsp;; vous gardez
              la maîtrise de ce qui est dit et décidé.
            </p>
          </div>

          {/* Révélation « accordéon » : les cartons s'ouvrent l'un après
              l'autre au défilement (décalage --d, voir Reveal.tsx). */}
          <Reveal className="grid gap-3 md:grid-cols-[1.12fr_1fr_1fr]">
            {homeServices.map((s, i) => (
              <article
                key={s.number}
                style={{ "--d": `${i * 300}ms` } as React.CSSProperties}
                className={`flex min-h-[320px] min-w-0 flex-col border border-hairline p-[30px] ${
                  i === 0 ? "border-transparent bg-story" : i === 3 ? "md:col-span-3" : "bg-bg"
                }`}
              >
                <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-muted">
                  {s.number} / {s.label}
                </p>
                <h3 className="my-5 font-heading text-[clamp(1.65rem,2.6vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.02em] text-ink">
                  <Link
                    href={`/services#${s.anchor}`}
                    className="underline-offset-4 transition-colors hover:text-accent hover:underline"
                  >
                    {s.name}
                  </Link>
                </h3>
                {s.image ? (
                  <div className="relative mb-5 mt-auto aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.alt ?? ""}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover grayscale"
                    />
                  </div>
                ) : null}
                <p className="text-[0.9375rem] leading-[1.7] text-muted">{s.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ Le sérieux d'un cadre */}
      <section aria-labelledby="titre-cadre" className="bg-story">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:items-start lg:gap-16">
            <div>
              <Image
                src="/images/asterisk-badge.svg"
                alt=""
                width={140}
                height={140}
                unoptimized
                className="mb-8 w-[clamp(84px,9vw,118px)]"
              />
              <h2
                id="titre-cadre"
                className="font-heading text-[clamp(2.3rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-white"
              >
                Le sérieux d&rsquo;un cadre.
                <br />
                La chaleur d&rsquo;une voix.
              </h2>
            </div>
            <div>
              <p className="font-heading text-[clamp(1.5rem,2.6vw,2.125rem)] font-medium leading-[1.25] tracking-[-0.015em] text-white">
                Nous sommes basés à Libreville, au Gabon. Nous avons choisi de
                faire de l&rsquo;échange humain le cœur du service.
              </p>
              <p className="mt-5 text-[0.9375rem] leading-[1.7] text-white/70">
                Comprendre une nuance, reformuler une demande, savoir quand
                transmettre plutôt que promettre&nbsp;: ces gestes simples
                protègent la confiance que vos clients placent en vous. Nos
                interlocuteurs francophones travaillent dans le cadre
                opérationnel et légal défini pour chaque mission.
              </p>
              <div className="mt-14 border-t border-white/25 pt-8">
                <ol className="grid list-none gap-8 sm:grid-cols-3 sm:gap-6" role="list">
                  {storySteps.map((step) => (
                    <li key={step.number}>
                      <p className="font-mono text-xs font-bold tracking-[0.15em] text-white/60">
                        {step.number} <span aria-hidden="true">→</span>
                      </p>
                      <h3 className="mt-3 font-heading text-[1.25rem] font-medium leading-[1.15] tracking-[-0.01em] text-white">
                        {step.name}
                      </h3>
                      <p className="mt-2 text-[0.875rem] leading-[1.7] text-white/70">
                        {step.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Témoignages */}
      <section aria-labelledby="titre-voix">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-6 border-b border-hairline pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Chip>Ce que change une vraie conversation</Chip>
              <h2
                id="titre-voix"
                className="mt-5 font-heading text-[clamp(2.3rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
              >
                Une relation qui reste humaine.
              </h2>
            </div>
            <Chip tone="ink" className="shrink-0">
              Écouter · Comprendre · Transmettre
            </Chip>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.author}
                className={`flex min-h-[300px] flex-col justify-between border p-[30px] ${
                  i === 1 ? "border-transparent bg-surface text-ink" : "border-hairline text-ink"
                }`}
              >
                <blockquote className="m-0">
                  <p className="font-heading text-[clamp(1.25rem,1.8vw,1.75rem)] font-normal leading-[1.3] text-ink">
                    «&nbsp;{t.quote}&nbsp;»
                  </p>
                </blockquote>
                <figcaption
                  className={`mt-8 text-[0.9375rem] ${i === 1 ? "text-ink/75" : "text-muted"}`}
                >
                  — {t.author}, {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Ouvrir la discussion */}
      <section aria-labelledby="titre-ouverture" className="bg-surface">
        <div className="mx-auto grid max-w-[1440px] items-end gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:px-12 lg:py-28">
          <div>
            <Image
              src="/images/phone.svg"
              alt=""
              width={260}
              height={260}
              unoptimized
              className="mx-auto mb-9 w-[clamp(100px,11vw,145px)]"
            />
            <Chip>Parlons de votre accueil</Chip>
            <h2
              id="titre-ouverture"
              className="mb-8 mt-6 max-w-[620px] font-heading text-[clamp(2.4rem,6vw,5.25rem)] font-medium leading-[1.02] tracking-[-0.045em] text-ink"
            >
              Et si votre prochain appel était entre de bonnes mains&nbsp;?
            </h2>
            <div className="flex flex-wrap items-center gap-7">
              <ButtonLink href="/contact">
                Demander un devis <span aria-hidden="true">→</span>
              </ButtonLink>
              <ArrowLink href="/contact">Nous écrire</ArrowLink>
            </div>
          </div>
          <aside className="border-t border-ink/40 pt-7">
            <Image
              src="/images/asterisk-badge.svg"
              alt=""
              width={140}
              height={140}
              unoptimized
              className="w-[clamp(80px,8vw,106px)]"
            />
            <p className="mt-6 text-[0.9375rem] leading-[1.7] text-ink/80">
              Expliquez-nous les appels que vous souhaitez confier à Nzé Call.
              Nous définirons ensemble le périmètre, les consignes et la façon
              de travailler.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
