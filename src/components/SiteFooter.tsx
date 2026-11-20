import Link from "next/link";
import { site } from "@/config/site";
import { buttonClass } from "./Button";
import { Wordmark } from "./Logo";

const explorerLinks = [
  { href: "/services", label: "Services" },
  { href: "/approche", label: "Notre approche" },
  { href: "/contact", label: "Contact" },
];

/**
 * Pied de page commun : marque, localisation et description, liens,
 * appel à l'action, mentions et politique de confidentialité.
 */
export default function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-bg">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Wordmark markClassName="h-8 w-8" />
            <p className="mt-4 text-[0.8125rem] leading-[1.7] text-muted">
              {site.location} · {site.footerDescription}
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
            <nav aria-label="Explorer">
              <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {explorerLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              href="/contact"
              className={`${buttonClass} !min-h-[44px] !px-5 !py-3`}
            >
              Demander un devis
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Nzé Call — {site.tagline}.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link href="/mentions-legales" className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
