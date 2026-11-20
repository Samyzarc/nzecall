"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Révèle ses enfants au défilement, un par un, façon accordéon :
 * chaque enfant démarre replié (légère compression verticale + fondu)
 * puis s'ouvre, le suivant commençant seulement après un décalage
 * (variable CSS `--d`). Sans JavaScript ou si l'utilisateur réduit le
 * mouvement, tout est affiché d'emblée.
 */
export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal={on ? "on" : "off"} className={className}>
      {children}
    </div>
  );
}
