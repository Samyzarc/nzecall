import Link from "next/link";

/**
 * Bouton principal du design d'origine : Fredoka moyenne en casse
 * normale, fond bleu profond, liseré + contour décalé de 4 px, angles
 * vifs. Au survol, inversion (fond clair, texte sombre, contour ramené
 * à 2 px). Décliné en lien ou en bouton natif.
 */
export const buttonClass =
  "inline-flex min-h-[52px] items-center justify-center gap-2 border border-[#1a63a8] bg-[#1a63a8] px-[22px] py-4 font-heading text-[17px] font-medium leading-[1.2] text-on-accent outline outline-1 outline-offset-4 outline-accent transition-[background-color,color,outline-offset] duration-300 hover:bg-ink hover:text-bg hover:outline-ink hover:outline-offset-2";

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

export function Button({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="submit" className={`${buttonClass} ${className ?? ""}`} {...rest}>
      {children}
    </button>
  );
}
