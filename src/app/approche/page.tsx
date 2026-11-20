import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import Chip from "@/components/Chip";
import { site } from "@/config/site";
import { approachBadges, frameBlocks, mindsetCards } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Notre approche",
  description:
    "Découvrez comment Nzé Call prépare chaque mission et confie vos conversations à des interlocuteurs francophones, avec des outils convenus avec vous et vérifiés par un humain.",
  alternates: { canonical: "/approche" },
};

export default function ApprochePage() {
  return (
    <>
      {/* ------------------------------------------------ Ouverture */}
      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-12 lg:py-24">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden border border-hairline">
              <Image
                src="/images/approche-hero.jpg"
                alt="Une personne échange au téléphone dans un bureau"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <p className="absolute left-4 top-4 bg-bg/85 px-3.5 py-2.5 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-ink">
                <span aria-hidden="true" className="mr-2 inline-block h-[7px] w-[7px] bg-accent align-middle" />
                Voix humaine · Libreville
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Chip tone="ink" mark="✳">
              Nzé Call · Notre approche
            </Chip>
            <h1 className="mt-6 font-heading text-[clamp(2.6rem,6.5vw,5.75rem)] font-medium leading-[0.98] tracking-[-0.05em] text-ink">
              La confiance commence à l&rsquo;autre bout du fil
            </h1>
            <p className="mt-7 max-w-xl text-[1.0625rem] leading-[1.7] text-muted">
              Une voix francophone, une attention réelle et des consignes
              précises&nbsp;: nous préparons chaque échange pour qu&rsquo;il
              ressemble à votre entreprise.
            </p>
            <div className="mt-9">
              <ButtonLink href="/contact">
                Demander un devis <span aria-hidden="true">→</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Écouter avant de répondre */}
      <section aria-labelledby="titre-ecouter" className="border-b border-hairline bg-shade">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 items-center gap-6 text-center sm:grid-cols-[130px_1fr_130px]">
            <Image
              src="/images/drawing-onde-approche.jpg"
              alt=""
              width={260}
              height={260}
              className="hidden justify-self-center sm:block"
            />
            <h2
              id="titre-ecouter"
              className="font-heading text-[clamp(2.5rem,5.5vw,5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
            >
              Écouter avant de répondre.
            </h2>
            <Image
              src="/images/drawing-onde-approche.jpg"
              alt=""
              width={260}
              height={260}
              className="hidden justify-self-center sm:block -scale-x-100"
            />
          </div>
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <p className="text-[1.0625rem] leading-[1.75] text-silver">
              Un appel peut contenir une question simple, une inquiétude ou une
              situation qui ne se règle pas en une phrase. Nos interlocuteurs
              prennent le temps de comprendre ce qui est demandé, puis agissent
              dans le cadre que nous avons défini avec vous.
            </p>
            <p className="text-[0.9375rem] leading-[1.75] text-muted">
              Nzé Call est basé à Libreville, au Gabon. Nous confions les
              conversations à des personnes francophones&nbsp;; les outils
              utilisés, y compris toute assistance par IA, sont convenus avec
              vous et soumis à une vérification humaine.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Une personne, pas un scénario */}
      <section aria-labelledby="titre-personne" className="border-b border-hairline">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <h2
            id="titre-personne"
            className="font-heading text-[clamp(2.3rem,5.5vw,5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
          >
            Une personne, pas un scénario.
          </h2>
          <ul className="mt-9 flex list-none flex-wrap gap-3" role="list">
            {approachBadges.map((badge, i) => (
              <li
                key={badge}
                className="border border-ink/30 bg-surface/85 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.09em] text-ink"
              >
                {i > 0 ? (
                  <span aria-hidden="true" className="mr-2 text-accent">✳</span>
                ) : (
                  <span aria-hidden="true" className="mr-2 inline-block h-[7px] w-[7px] bg-accent align-middle" />
                )}
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------ Le travail derrière la voix */}
      <section aria-labelledby="titre-travail" className="border-b border-hairline bg-shade">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Chip>Le travail derrière la voix</Chip>
          <h2
            id="titre-travail"
            className="mt-5 max-w-[900px] font-heading text-[clamp(2.3rem,5.5vw,5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
          >
            Une conversation libre dans un cadre précis
          </h2>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-[1.7] text-muted">
            Le naturel d&rsquo;un échange ne dispense jamais de préparation.
            Avant de répondre ou de rappeler, nous établissons ce que nos
            agents peuvent faire, ce qu&rsquo;ils doivent transmettre et ce qui
            reste à votre décision.
          </p>

          <div className="mt-14">
            {frameBlocks.map((block) => (
              <article
                key={block.number}
                className="grid gap-10 border-t border-hairline py-12 last:border-b lg:grid-cols-[1.2fr_1fr] lg:gap-16"
              >
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-muted">
                    {block.number} / {block.label}
                  </p>
                  <p className="mt-5">
                    <Chip tone="ink">{block.chip} <span aria-hidden="true">✳</span></Chip>
                  </p>
                  {block.rows.length > 0 ? (
                    <dl className="mt-6">
                      {block.rows.map((row) => (
                        <div
                          key={row.key}
                          className="flex items-baseline justify-between gap-6 border-b border-hairline py-3"
                        >
                          <dt className="text-[0.9375rem] text-silver">{row.key}</dt>
                          <dd className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-muted">
                            {row.value}
                            <span aria-hidden="true" className="text-accent">→</span>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                </div>
                <div>
                  <h3 className="font-heading text-[clamp(1.5rem,2.4vw,2.125rem)] font-medium leading-[1.1] tracking-[-0.02em] text-ink">
                    {block.heading}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-[1.8] text-muted">
                    {block.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Ce que nous gardons à l'esprit */}
      <section aria-labelledby="titre-esprit" className="border-b border-hairline">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <h2
            id="titre-esprit"
            className="max-w-[900px] font-heading text-[clamp(2.3rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink"
          >
            Ce que nous gardons à l&rsquo;esprit pendant chaque échange
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {mindsetCards.map((card) => (
              <article key={card.title} className="border border-hairline p-[26px]">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-accent">
                  <span aria-hidden="true" className="mr-2">✳</span>
                  {card.title}
                </p>
                <p className="mt-4 text-[0.9375rem] leading-[1.8] text-muted">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Bandeau image */}
      <section className="border-b border-hairline bg-shade">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-5 py-20 text-center sm:px-8 lg:px-12">
          <Image
            src="/images/drawing-gouache.jpg"
            alt=""
            width={300}
            height={300}
            className="max-w-[150px]"
          />
          <Chip tone="ink" mark="✳">
            Nzé Call · {site.location}
          </Chip>
          <p className="max-w-2xl text-[1.0625rem] leading-[1.7] text-muted">
            Accueil téléphonique, service client, rendez-vous B2B et rappels de
            prospects&nbsp;: une prise en charge adaptée à vos consignes.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------ Conclusion */}
      <section aria-labelledby="titre-suite" className="bg-surface">
        <div className="mx-auto grid max-w-[1440px] items-end gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:px-12 lg:py-28">
          <div>
            <Chip>La prochaine conversation</Chip>
            <h2
              id="titre-suite"
              className="mb-8 mt-6 max-w-[900px] font-heading text-[clamp(2.4rem,6vw,5.25rem)] font-medium leading-[1.02] tracking-[-0.045em] text-ink"
            >
              Parlons de la façon dont vous souhaitez répondre.
            </h2>
            <ButtonLink href="/contact">
              Demander un devis <span aria-hidden="true">→</span>
            </ButtonLink>
          </div>
          <aside className="border-t border-ink/40 pt-6">
            <p className="text-[0.9375rem] leading-[1.7] text-ink/80">
              Racontez-nous les demandes que vous recevez et les relais dont
              votre équipe a besoin. Nous pourrons définir ensemble un
              périmètre de travail clair.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
