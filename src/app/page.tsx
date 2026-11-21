import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import ContactForm from "@/components/ContactForm";
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
              className={`absolute border border-ink/30 bg-surface/85 px-2.5 py-1.5 font-body text-[0.625rem] uppercase tracking-[0.09em] text-ink opacity-90 blur-[1.3px] ${
                pillPositions[i % pillPositions.length]
              }`}
            >
              <span className="mr-1.5 inline-block h-[5px] w-[5px] bg-accent align-middle" />
              {label}
            </span>
          ))}
        </div>

        <div className="relative z-[1] mx-auto w-full max-w-[1440px] px-5 py-24 text-center sm:px-8 lg:px-12 lg:py-28">
          <p className="font-body text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-muted">
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
            <ButtonLink href="#formulaire">Demander un devis</ButtonLink>
          </div>
        </div>

        <div className="absolute bottom-5 left-0 right-0 flex items-center justify-between gap-4 px-5 text-muted sm:px-8 lg:px-12">
          <p className="font-body text-[0.6875rem] font-bold uppercase tracking-[0.15em]">
            L&rsquo;humain au cœur du service
          </p>
          <p aria-hidden="true" className="font-body text-[0.6875rem] font-bold uppercase tracking-[0.15em]">
            Faire défiler ↓
          </p>
        </div>
      </section>

      {/* ------------------------------------------------ Chaque appel compte */}
      <section aria-labelledby="titre-appel" className="bg-shade">
        <div className="mx-auto max-w-[1440px] px-5 py-[90px] sm:px-8 lg:px-12 lg:pb-[110px]">
          <div className="mb-[52px] grid grid-cols-1 items-center gap-6 text-center sm:grid-cols-[160px_1fr_160px] sm:gap-6">
            <Image
              src="/images/original/ondes.webp"
              alt=""
              width={1024}
              height={1024}
              unoptimized
              className="hidden w-full max-w-[150px] justify-self-center sm:block"
            />
            <h2
              id="titre-appel"
              className="font-heading text-[clamp(2.3rem,5.5vw,5.35rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink lg:whitespace-nowrap lg:text-[clamp(2.8rem,6vw,5.35rem)]"
            >
              Chaque appel compte.
            </h2>
            <Image
              src="/images/original/ondes.webp"
              alt=""
              width={1024}
              height={1024}
              unoptimized
              className="hidden w-full max-w-[150px] -scale-x-100 justify-self-center sm:block"
            />
          </div>
          <p className="mb-8 text-left text-[1rem] leading-[1.7] text-muted">
            À l&rsquo;autre bout du fil, une personne qui comprend la
            demande et sait quoi en faire.
          </p>

          <ul className="grid list-none gap-4 md:grid-cols-3" role="list">
            {homeScenes.map((s, i) => (
              <li
                key={s.number}
                className={`relative flex min-w-0 flex-col border p-7 ${
                  i === 1
                    ? "border-transparent bg-story text-ink"
                    : i === 2
                      ? "border-hairline bg-bg"
                      : "border-hairline bg-surface"
                }`}
              >
                <div className="flex items-center justify-between gap-4 font-body text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  <span>
                    {s.number} / {s.name}
                  </span>
                  <span>FR ●</span>
                </div>
                <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-85 grayscale"
                  />
                </div>
                <span className="mt-4 inline-flex max-w-full self-start bg-ink px-3 py-2 font-heading text-[13px] font-medium leading-[1.3] text-bg">
                  <span aria-hidden="true" className="mr-3 text-accent">●</span>
                  {s.chip}
                </span>
                <div className="mt-auto pt-4">
                  <h3 className="font-heading text-[clamp(1.6rem,2.4vw,2.16rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink">
                    {s.heading}
                  </h3>
                  <p className="mt-3 max-w-[27ch] text-[0.9375rem] leading-[1.7] text-muted">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------ Ce que nous prenons en charge */}
      <section aria-labelledby="titre-offre">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-[120px]">
          <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div>
              <Chip>Ce que nous prenons en charge</Chip>
              <h2
                id="titre-offre"
                className="mt-5 max-w-[680px] font-heading text-[clamp(2.8rem,6vw,5.35rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
              >
                Quatre façons d&rsquo;être présents pour vous.
              </h2>
            </div>
            <p className="max-w-[330px] text-[0.8125rem] leading-[1.7] text-muted">
              Une mission commence par des consignes écrites et un périmètre
              clair. Vos clients entendent une voix humaine&nbsp;; vous gardez
              la maîtrise de ce qui est dit et décidé.
            </p>
          </div>

          {/* Révélation « accordéon » : les cartons s'ouvrent l'un après
              l'autre au défilement (décalage --d, voir Reveal.tsx). */}
          <Reveal className="grid gap-3 md:grid-cols-[1.12fr_1fr_1fr]">
            {homeServices.map((s, i) => {
              const indexLabel = (
                <p className="font-body text-xs font-bold uppercase tracking-[0.15em] text-muted">
                  {s.number} / {s.label}
                </p>
              );
              const heading = (
                <h3 className="my-6 font-heading text-[clamp(1.8rem,2.6vw,2.35rem)] font-medium leading-[1.08] tracking-[-0.02em] text-ink">
                  <Link
                    href={`/services#${s.anchor}`}
                    className="underline-offset-4 transition-colors hover:text-accent hover:underline"
                  >
                    {s.name}
                  </Link>
                </h3>
              );
              if (i === 0) {
                return (
                  <article
                    key={s.number}
                    style={{ "--d": "0ms" } as React.CSSProperties}
                    className="flex min-h-[650px] min-w-0 flex-col border border-story bg-story p-[30px] md:row-span-2"
                  >
                    {indexLabel}
                    {heading}
                    {s.image ? (
                      <div className="relative mr-0 mt-6 ml-auto aspect-[4/5] w-[58%] overflow-hidden">
                        <Image
                          src={s.image}
                          alt={s.alt ?? ""}
                          fill
                          sizes="(max-width: 768px) 100vw, 30vw"
                          className="object-cover grayscale"
                        />
                      </div>
                    ) : null}
                    <p className="mt-auto text-[0.9375rem] leading-[1.7] text-white/80">{s.text}</p>
                  </article>
                );
              }
              if (i === 3) {
                return (
                  <article
                    key={s.number}
                    style={{ "--d": "900ms" } as React.CSSProperties}
                    className="flex min-h-[280px] min-w-0 flex-col border border-hairline bg-bg p-[30px] md:col-span-2 md:grid md:grid-cols-2 md:items-start md:gap-8"
                  >
                    <div className="md:col-span-full">{indexLabel}</div>
                    <div className="mb-0">{heading}</div>
                    <p className="text-[0.9375rem] leading-[1.7] text-muted md:self-end">{s.text}</p>
                  </article>
                );
              }
              return (
                <article
                  key={s.number}
                  style={{ "--d": `${i * 300}ms` } as React.CSSProperties}
                  className="flex min-h-[320px] min-w-0 flex-col border border-hairline bg-bg p-[30px]"
                >
                  {indexLabel}
                  {heading}
                  <p className="mt-auto text-[0.9375rem] leading-[1.7] text-muted">{s.text}</p>
                </article>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ Le sérieux d'un cadre */}
      <section aria-labelledby="titre-cadre" className="bg-story">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-start lg:gap-[8vw]">
            <div>
              <Image
                src="/images/asterisk-badge.svg"
                alt=""
                width={160}
                height={160}
                unoptimized
                className="mb-[30px] w-[150px] text-ink"
              />
              <h2
                id="titre-cadre"
                className="font-heading text-[clamp(2.8rem,6vw,5.35rem)] font-medium leading-[1.04] tracking-[-0.045em] text-white"
              >
                Le sérieux
                <br />
                d&rsquo;un cadre.
                <br />
                La chaleur
                <br />
                d&rsquo;une voix.
              </h2>
            </div>
            <div className="lg:pt-[75px]">
              <p className="max-w-[650px] font-heading text-[clamp(1.5rem,2.7vw,2.4rem)] font-medium leading-[1.25] tracking-[-0.015em] text-white">
                Nous sommes basés à Libreville, au Gabon. Nous avons choisi de
                faire de l&rsquo;échange humain le cœur du service.
              </p>
              <p className="mt-5 max-w-[580px] text-[1rem] leading-[1.7] text-white/75">
                Comprendre une nuance, reformuler une demande, savoir quand
                transmettre plutôt que promettre&nbsp;: ces gestes simples
                protègent la confiance que vos clients placent en vous. Nos
                interlocuteurs francophones travaillent dans le cadre
                opérationnel et légal défini pour chaque mission.
              </p>
              <div className="mt-[55px] border-t border-white/55 pt-[18px]">
                <ol className="grid list-none gap-6 sm:grid-cols-3" role="list">
                  {storySteps.map((step) => (
                    <li key={step.number} className="pr-4">
                      <p className="font-body text-xs font-bold tracking-[0.15em] text-white/70">
                        {step.number} <span aria-hidden="true">→</span>
                      </p>
                      <h3 className="mt-[15px] mb-2 font-heading text-[1.125rem] font-medium leading-[1.15] text-white">
                        {step.name}
                      </h3>
                      <p className="text-sm leading-[1.7] text-white/70">
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
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-[115px]">
          <div className="flex flex-col gap-6 border-b border-hairline pb-[30px] md:flex-row md:items-end md:justify-between">
            <div>
              <Chip>Ce que change une vraie conversation</Chip>
              <h2
                id="titre-voix"
                className="mt-5 max-w-[700px] font-heading text-[clamp(2.8rem,6vw,5.35rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
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
                className={`flex min-h-[390px] flex-col justify-between border p-[30px] ${
                  i === 1 ? "border-transparent bg-surface text-ink" : "border-hairline text-ink"
                }`}
              >
                <blockquote className="m-0">
                  <p className="font-heading text-[clamp(1.3rem,1.8vw,1.6rem)] font-normal leading-[1.3] text-ink">
                    «&nbsp;{t.quote}&nbsp;»
                  </p>
                </blockquote>
                <figcaption
                  className={`mt-8 text-[1rem] ${i === 1 ? "text-ink/75" : "text-muted"}`}
                >
                  — {t.author}, {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Ouvrir la discussion */}
      <section
        id="formulaire"
        aria-labelledby="titre-ouverture"
        className="scroll-mt-24 bg-surface"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-12 lg:py-[105px]">
          <div>
            <Image
              src="/images/original/combine.webp"
              alt=""
              width={1024}
              height={1024}
              unoptimized
              className="mb-6 w-[105px]"
            />
            <Chip className="text-[1.1875rem] tracking-[0.15em]">Parlons de votre accueil</Chip>
            <h2
              id="titre-ouverture"
              className="mt-5 max-w-[650px] font-heading text-[clamp(2.8rem,6.9vw,6.25rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
            >
              Et si votre prochain appel était entre de bonnes mains&nbsp;?
            </h2>
            <p className="mt-8 max-w-[520px] text-[1rem] leading-[1.7] text-ink/80">
              Expliquez-nous les appels que vous souhaitez confier à Nzé Call.
              Nous définirons ensemble le périmètre, les consignes et la façon
              de travailler.
            </p>
          </div>
          <div className="lg:pt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
