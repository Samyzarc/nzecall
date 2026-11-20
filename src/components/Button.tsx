import Link from "next/link";

/**
 * Bouton principal du design : fond accent, liseré + contour décalé,
 * angles vifs, libellé monospace majuscule. Au survol, inversion
 * (fond clair, texte sombre). Décliné en lien ou en bouton natif.
 */
export const buttonClass =
  "inline-flex min-h-[52px] items-center justify-center gap-2 border border-accent bg-accent px-6 py-4 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-on-accent outline outline-1 outline-offset-4 outline-accent transition-colors hover:bg-ink hover:text-bg hover:outline-ink";

export function ButtonLink({
  href,
  children,
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <Link href={href} className={`${buttonClass} ${className ?? ""}`} {...rest}>
      {children}
    </Link>
  );
}
