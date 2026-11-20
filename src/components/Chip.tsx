/**
 * Étiquette monospace — petit libellé majuscule du design (eyebrow, index),
 * avec marque décorative facultative (✳, ●, →) devant le texte.
 */
export default function Chip({
  children,
  tone = "muted",
  mark,
  className,
}: {
  children: React.ReactNode;
  tone?: "muted" | "ink" | "accent" | "light";
  mark?: string;
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
      className={`inline-block font-mono text-[0.6875rem] font-bold uppercase leading-[1.6] tracking-[0.15em] ${toneClass} ${className ?? ""}`}
    >
      {mark ? (
        <span aria-hidden="true" className="mr-2 text-accent">
          {mark}
        </span>
      ) : null}
      {children}
    </span>
  );
}
