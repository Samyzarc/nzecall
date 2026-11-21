/**
 * Étiquette eyebrow — petit libellé majuscule du design (Nunito gras,
 * letter-spacing large), comme sur le site d'origine.
 */
export default function Chip({
  children,
  tone = "muted",
  className,
}: {
  children: React.ReactNode;
  tone?: "muted" | "ink" | "accent" | "light";
  className?: string;
}) {
  const toneClass =
    tone === "accent"
      ? "text-accent"
      : tone === "ink"
        ? "text-ink"
        : tone === "light"
          ? "text-white/80"
          : "text-muted";
  return (
    <span
      className={`inline-block font-body text-xs font-bold uppercase leading-[1.6] tracking-[0.15em] ${toneClass} ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
