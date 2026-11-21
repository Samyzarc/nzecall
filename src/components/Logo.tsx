/**
 * Logo Nzé Call — marque graphique (bulle à angles vifs + trois barres d'onde vocale).
 * Sources SVG éditables dans /public/brand/.
 */
export function LogoMark({
  className,
  tone = "accent",
}: {
  className?: string;
  tone?: "accent" | "mono";
}) {
  const bubble = tone === "accent" ? "#3182CE" : "#E6E8EB";
  const bars = tone === "accent" ? "#010B1B" : "#010B1B";
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <path d="M3 3h26v22H14.5L8 31v-6H3V3z" fill={bubble} />
      <rect x="11.2" y="11" width="2.6" height="6" fill={bars} />
      <rect x="14.7" y="8" width="2.6" height="12" fill={bars} />
      <rect x="18.2" y="11" width="2.6" height="6" fill={bars} />
    </svg>
  );
}

/** Marque + nom, tel qu'utilisé dans la navigation et le pied de page. */
export function Wordmark({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className={markClassName ?? "h-7 w-7"} tone="accent" />
      <span className="font-heading text-[1.3125rem] font-semibold tracking-[-0.03em] text-ink">
        Nzé Call
      </span>
      <span aria-hidden="true" className="font-heading text-[1.3125rem] font-semibold text-accent">
        ✳
      </span>
    </span>
  );
}
