import type { Metadata } from "next";
import Link from "next/link";
import Chip from "@/components/Chip";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Nzé Call : données collectées via le formulaire de contact, finalités, durées de conservation, droits et autorités de protection des données (CNIL, APDPVP).",
  alternates: { canonical: "/confidentialite" },
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

export default function ConfidentialitePage() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="max-w-3xl">
        <Chip>Nzé Call / Protection des données</Chip>
        <h1 className="mt-6 font-heading text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-ink">
          Politique de confidentialité
        </h1>
        <p className="mt-6 text-[1.0625rem] leading-[1.75] text-silver">
          Nzé Call accorde une attention particulière au respect de la vie
          privée. Cette politique décrit, en toute transparence, les seules
          données traitées sur ce site, la raison de leur traitement et les
          droits dont vous disposez. Elle est établie conformément au règlement
          (UE) 2016/679 du 27 avril 2016 (RGPD) et à la loi gabonaise n°001/2011
          du 25 septembre 2011 relative à la protection des données à caractère
          personnel, modifiée par la loi n°025/2023 du 12 juillet 2023.
        </p>
      </div>

      <div className="mt-14 max-w-3xl">
        <Block chip="01 / Responsable" title="Responsable de traitement">
          <p>
            Le responsable de traitement est <strong className="text-ink">Nzé Call</strong>,
            société en cours de constitution, établie à Libreville (Gabon).
            Contact pour toute question relative aux données personnelles :{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-ink underline underline-offset-4 hover:text-accent"
            >
              {site.contactEmail}
            </a>
            .
          </p>
        </Block>

        <Block chip="02 / Données collectées" title="Données collectées et finalités">
          <p>
            Le site ne collecte des données que par l'intermédiaire de son
            formulaire de demande de devis. Les champs suivants sont transmis :
            nom, adresse e-mail professionnelle, entreprise ou organisation,
            mission envisagée et description du périmètre d'appels.
          </p>
          <p>
            Ces données servent exclusivement à{" "}
            <strong className="text-ink">
              traiter votre demande de devis et les échanges précontractuels
            </strong>{" "}
            qui en découlent (précision du cadre, des délais et du coût de la
            mission). Le fondement légal du traitement repose sur les mesures
            précontractuelles (article 6, 6.1.b du RGPD) et sur l'intérêt
            légitime à répondre aux sollicitations commerciales (article 6,
            6.1.f du RGPD).
          </p>
          <p>
            Les messages sont transmis par e-mail à l'adresse de contact de Nzé
            Call ; ils ne sont conservés dans aucune base de données du site.
            Une relance du formulaire vous invite par ailleurs à ne pas
            transmettre de données personnelles de vos clients dans le premier
            message.
          </p>
        </Block>

        <Block chip="03 / Durée" title="Durée de conservation">
          <p>
            Les données transmises via le formulaire sont conservées pendant la
            durée nécessaire au traitement de votre demande, puis archivées
            pendant trois ans à compter du dernier échange, à des fins de
            suivi de la relation. À l'issue de cette période, elles sont
            supprimées.
          </p>
        </Block>

        <Block chip="04 / Destinataires" title="Destinataires et sous-traitants">
          <p>
            Les données ne sont ni vendues, ni cédées, ni louées à des tiers.
            Seuls deux sous-traitants techniques interviennent dans le
            fonctionnement du site :
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-1 font-body text-xs text-accent">→</span>
              <span>
                <strong className="text-ink">Vercel Inc.</strong> (États-Unis) :
                hébergement du site. Vercel agit en qualité de sous-traitant au
                sens de l'article 28 du RGPD ; les transferts hors Union
                européenne sont encadrés par les clauses contractuelles types de
                la décision d'exécution 2021/914 et par la participation de
                Vercel au Data Privacy Framework UE-États-Unis.
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-1 font-body text-xs text-accent">→</span>
              <span>
                <strong className="text-ink">Resend</strong> (Plus Five Five,
                Inc., États-Unis) : acheminement des e-mails. Resend agit en
                qualité de sous-traitant ; ses engagements reposent
                également sur les clauses contractuelles types et sur le Data
                Privacy Framework UE-États-Unis.
              </span>
            </li>
          </ul>
        </Block>

        <Block chip="05 / Traceurs" title="Traceurs : aucun">
          <p>
            Le site ne dépose <strong className="text-ink">aucun cookie</strong>,
            n'utilise aucun outil de mesure d'audience, aucune régie
            publicitaire, aucun plugin social ni aucun script tiers. Il n'y a
            donc rien à consentir et aucune bannière de consentement n'est
            nécessaire. Aucune décision automatisée ni aucun profilage n'est
            réalisé à partir de vos données.
          </p>
        </Block>

        <Block chip="06 / Vos droits" title="Vos droits et leur exercice">
          <p>
            Vous disposez d'un droit d'accès, de rectification, d'effacement,
            de limitation, d'opposition et de portabilité sur les données vous
            concernant. Pour les exercer, écrivez à{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-ink underline underline-offset-4 hover:text-accent"
            >
              {site.contactEmail}
            </a>{" "}
            en précisant votre demande ; une réponse vous sera apportée dans un
            délai maximal d'un mois.
          </p>
          <p>
            Vous pouvez introduire une réclamation auprès de l'autorité de
            protection des données compétente : en France, la{" "}
            <strong className="text-ink">
              Commission nationale de l'informatique et des libertés (CNIL)
            </strong>{" "}
            (www.cnil.fr) — les personnes résidant dans un autre État membre de
            l'Union européenne peuvent saisir l'autorité de leur État de
            résidence ; au Gabon, l'
            <strong className="text-ink">
              Autorité pour la Protection des Données Personnelles et de la Vie
              Privée (APDPVP)
            </strong>{" "}
            (www.apdpvp.ga), instituée par la loi n°001/2011 modifiée précitée.
          </p>
        </Block>

        <Block chip="07 / Évolution" title="Évolution de cette politique">
          <p>
            La présente politique peut être mise à jour, notamment à la
            constitution définitive de la société ou si un nouveau service est
            ajouté au site. Toute modification substantielle sera signalée sur
            cette page. Pour toute question, la{" "}
            <Link
              href="/#formulaire"
              className="text-ink underline underline-offset-4 hover:text-accent"
            >
              page de contact
            </Link>{" "}
            reste le canal dédié.
          </p>
        </Block>
      </div>
    </div>
  );
}
