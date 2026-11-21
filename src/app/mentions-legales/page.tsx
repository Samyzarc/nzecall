import type { Metadata } from "next";
import Link from "next/link";
import Chip from "@/components/Chip";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Nzé Call : éditeur, hébergeur, propriété intellectuelle, limitation de responsabilité et droit applicable.",
  alternates: { canonical: "/mentions-legales" },
};

function Block({
  chip,
  title,
  children,
}: {
  chip: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-hairline py-12 first:border-t-0">
      <Chip>{chip}</Chip>
      <h2 className="mt-4 font-heading text-2xl font-semibold leading-snug text-ink sm:text-[1.75rem]">
        {title}
      </h2>
      <div className="mt-5 max-w-3xl space-y-4 text-[0.9375rem] leading-[1.85] text-muted">
        {children}
      </div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="max-w-3xl">
        <Chip>Nzé Call / Informations légales</Chip>
        <h1 className="mt-6 font-heading text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-ink">
          Mentions légales
        </h1>
        <p className="mt-6 text-[1.0625rem] leading-[1.75] text-silver">
          Les informations ci-dessous identifient l'éditeur et l'hébergeur du
          site, et précisent les règles applicables à son utilisation. Elles
          sont complétées par la{" "}
          <Link
            href="/confidentialite"
            className="text-ink underline underline-offset-4 hover:text-accent"
          >
            Politique de confidentialité
          </Link>
          .
        </p>
      </div>

      <div className="mt-14 max-w-3xl">
        <Block chip="01 / Éditeur" title="Éditeur du site">
          <p>
            Le site {site.name} ({site.url.replace(/^https?:\/\//, "")}) est
            édité par <strong className="text-ink">Nzé Call</strong>, société en
            cours de constitution, dont le siège est établi à Libreville
            (Gabon).
          </p>
          <p>
            Contact :{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-ink underline underline-offset-4 hover:text-accent"
            >
              {site.contactEmail}
            </a>
            . Le formulaire de contact, accessible depuis la page Contact, est
            le canal de communication du site.
          </p>
          <p>
            Le directeur de la publication est le représentant légal de Nzé
            Call. Les identifiants d'immatriculation (RCCM et NIF) seront
            complétés dès la constitution définitive de la société.
          </p>
        </Block>

        <Block chip="02 / Hébergement" title="Hébergeur">
          <p>
            Le site est hébergé par <strong className="text-ink">Vercel Inc.</strong>,
            société organisée selon le droit de l'État du Delaware (États-Unis),
            dont l'adresse de correspondance publiée est : 440 N Barranca
            Avenue #4133, Covina, CA 91723, États-Unis (
            <a
              href="https://vercel.com"
              className="text-ink underline underline-offset-4 hover:text-accent"
            >
              vercel.com
            </a>
            ).
          </p>
          <p>
            Les traitements de données personnelles réalisés dans le cadre de
            cet hébergement, ainsi que les garanties applicables aux transferts
            hors de l'Union européenne, sont décrits dans la{" "}
            <Link
              href="/confidentialite"
              className="text-ink underline underline-offset-4 hover:text-accent"
            >
              Politique de confidentialité
            </Link>
            .
          </p>
        </Block>

        <Block chip="03 / Propriété intellectuelle" title="Propriété intellectuelle">
          <p>
            L'ensemble des éléments du site — textes, marque et logo « Nzé
            Call », charte graphique, photographies, structures de pages — est
            la propriété exclusive de Nzé Call ou fait l'objet d'une
            autorisation d'utilisation. Ces éléments sont protégés par le droit
            de la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification ou exploitation,
            totale ou partielle, sans autorisation écrite préalable est
            interdite. La citation de courts extraits est tolérée dans le
            respect du droit de citation, avec mention de la source.
          </p>
        </Block>

        <Block chip="04 / Responsabilité" title="Limitation de responsabilité">
          <p>
            Nzé Call s'efforce d'assurer l'exactitude des informations publiées
            et la disponibilité du site, sans y être obligée. Les informations
            diffusées ont une valeur générale et ne constituent ni un conseil
            juridique ni un engagement contractuel : seul le devis et la
            documentation signée avec chaque client engagent Nzé Call.
          </p>
          <p>
            Nzé Call ne saurait être tenue responsable des dommages directs ou
            indirects résultant de l'utilisation du site, d'une indisponibilité
            temporaire ou de l'interprétation des informations publiées. Les
            liens hypertextes éventuels vers des sites tiers sont proposés à
            titre d'information ; Nzé Call n'exerce aucun contrôle sur leur
            contenu.
          </p>
        </Block>

        <Block chip="05 / Droit applicable" title="Droit applicable">
          <p>
            Le présent site et ses mentions légales sont régis par le droit
            gabonais. En cas de litige relatif à l'utilisation du site, et à
            défaut de résolution amiable, compétence est attribuée aux
            tribunaux de Libreville (Gabon).
          </p>
          <p>
            Pour toute question relative aux données personnelles, les
            modalités d'exercice des droits et les autorités de protection
            compétentes (CNIL pour la France, APDPVP pour le Gabon) sont
            indiquées dans la{" "}
            <Link
              href="/confidentialite"
              className="text-ink underline underline-offset-4 hover:text-accent"
            >
              Politique de confidentialité
            </Link>
            .
          </p>
        </Block>
      </div>
    </div>
  );
}
