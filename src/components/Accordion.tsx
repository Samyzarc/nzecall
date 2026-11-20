"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Chip from "./Chip";

export type AccordionItem = {
  /** Numéro ou étiquette affichée avant la question (ex. 01) */
  number?: string;
  /** Intitulé du bouton / question */
  question: string;
  /** Étiquette de la réponse [ Équipe ] */
  label?: string;
  /** Titre de la réponse */
  heading?: string;
  /** Texte de la réponse */
  answer: string;
  /** Image facultative (Points de contrôle) */
  image?: { src: string; alt: string; width: number; height: number };
};

/**
 * Accordéon accessible : boutons natifs, aria-expanded, aria-controls,
 * navigation clavier (Tab / Espace / Entrée). Un seul panneau ouvert à la fois.
 */
export default function Accordion({
  items,
  defaultOpenIndex = 0,
}: {
  items: AccordionItem[];
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const baseId = useId();

  return (
    <div className="border-t border-hairline">
      {items.map((item, i) => {
        const open = openIndex === i;
        const buttonId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.question} className="border-b border-hairline">
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.number ? (
                  <span className="font-mono text-xs font-medium tracking-[0.14em] text-accent">
                    {item.number}
                  </span>
                ) : null}
                <span className="flex-1 font-heading text-[1.0625rem] font-medium leading-snug text-ink sm:text-xl">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`font-mono text-lg leading-none text-muted transition-transform ${open ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="pb-7"
            >
              {item.label ? <Chip>{item.label}</Chip> : null}
              {item.heading ? (
                <p className="mt-3 font-heading text-lg font-semibold leading-snug text-ink sm:text-xl">
                  {item.heading}
                </p>
              ) : null}
              <p className="mt-3 max-w-2xl text-[0.9375rem] leading-[1.8] text-muted">
                {item.answer}
              </p>
              {item.image ? (
                <div className="relative mt-5 aspect-[16/9] max-w-xl overflow-hidden border border-hairline">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 40rem"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
