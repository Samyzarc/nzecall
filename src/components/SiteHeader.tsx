"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./Logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/approche", label: "Notre approche" },
  { href: "/contact", label: "Contact" },
];

/**
 * Barre de navigation collante : marque, trois liens, bouton d'action.
 * Menu mobile refermable au clavier et à l'aide de la touche Échap.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="shrink-0 rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Nzé Call — retour à l'accueil"
        >
          <Wordmark />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] transition-colors hover:text-accent ${
                pathname === l.href ? "text-ink" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden border border-accent bg-accent px-5 py-3 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-on-accent outline outline-1 outline-offset-4 outline-accent transition-colors hover:bg-ink hover:text-bg hover:outline-ink sm:inline-block"
          >
            Demander un devis <span aria-hidden="true">→</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="flex h-10 w-10 items-center justify-center border border-hairline text-ink md:hidden"
          >
            <span className="sr-only">
              {open ? "Fermer le menu" : "Ouvrir le menu"}
            </span>
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" fill="none" />
              ) : (
                <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" fill="none" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="menu-mobile"
          aria-label="Navigation principale (mobile)"
          className="border-t border-hairline bg-bg md:hidden"
        >
          <ul className="mx-auto max-w-[1440px] px-5 py-4 sm:px-8">
            {links.map((l) => (
              <li key={l.href} className="border-b border-hairline last:border-b-0">
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="block py-3.5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/contact"
                className="block bg-accent px-5 py-3.5 text-center font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-on-accent"
              >
                Demander un devis
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
