import Link from "next/link";
import Chip from "@/components/Chip";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70dvh] items-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_60%,#10243b_0%,#010b1b_66%)]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 text-center sm:px-8 lg:px-12">
        <Chip tone="accent">Erreur 404</Chip>
        <h1 className="mx-auto mt-6 max-w-3xl font-heading text-[clamp(2.5rem,6.5vw,5.5rem)] font-medium leading-[1] tracking-[-0.045em] text-ink">
          Cette ligne est injoignable.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-[1.75] text-muted">
          L&rsquo;adresse composée ne correspond à aucune page du site. Nos
          interlocuteurs décrochent pour vos clients, pas pour les adresses
          erronées — mais tout le reste reste accessible.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-7">
          <Link
            href="/"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 border border-accent bg-accent px-6 py-4 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-on-accent outline outline-1 outline-offset-4 outline-accent transition-colors hover:bg-ink hover:text-bg hover:outline-ink"
          >
            Retour à l&rsquo;accueil <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/contact"
            className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-ink underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}
