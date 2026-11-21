import Link from "next/link";

/**
 * Lien interne souligné — style d'origine : texte souligné plein,
 * sans flèche.
 */
export default function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-medium text-silver underline decoration-1 underline-offset-4 hover:text-accent ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
