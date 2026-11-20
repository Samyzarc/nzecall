import localFont from "next/font/local";

/**
 * Polices auto-hébergées (fichiers woff2 dans /public/fonts, licence OFL).
 * Aucune requête vers Google Fonts : les fichiers sont servis par next/font.
 * Fredoka (titres), Nunito (texte), JetBrains Mono (étiquettes, numéros).
 */

export const fredoka = localFont({
  src: [
    { path: "../../public/fonts/fredoka-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/fredoka-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/fredoka-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-fredoka",
  display: "swap",
});

export const nunito = localFont({
  src: [
    { path: "../../public/fonts/nunito-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/nunito-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/nunito-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/nunito-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-nunito",
  display: "swap",
});

export const jetbrainsMono = localFont({
  src: [
    { path: "../../public/fonts/jetbrains-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/jetbrains-mono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
