import Link from "next/link";

/**
 * Lien interne avec flèche — motif signature du design.
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
      className={`group inline-flex items-center gap-2 font-medium text-ink underline-offset-4 hover:text-accent hover:underline focus-visible:underline ${className ?? ""}`}
    >
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
