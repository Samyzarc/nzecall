/**
 * Configuration unique du site.
 * Tout ce qui dépend du domaine (URL, e-mail, nom) dérive de ce fichier :
 * changer de domaine plus tard = une seule ligne à modifier (voir README).
 */
export const site = {
  /** Nom affiché (navigation, pied de page, métadonnées) */
  name: "Nzé Call",
  /** Signature / accroche — conservée à l'identique */
  tagline: "Une voix humaine pour chaque appel",
  /** URL canonique du site (surchargée par la variable d'environnement SITE_URL) */
  url: process.env.SITE_URL ?? "https://nzecall.com",
  /** Description par défaut (SEO / Open Graph) */
  description:
    "Nzé Call, basé à Libreville, confie votre accueil téléphonique, service client et rappels à des interlocuteurs francophones. L'humain est au cœur du service, avec des outils convenus avec vous.",
  /** Adresse de destination du formulaire de contact (variable CONTACT_EMAIL_TO) */
  contactEmail: process.env.CONTACT_EMAIL_TO ?? "contact@nzecall.com",
  /** Localisation affichée sur le site */
  location: "Libreville, Gabon",
  /** Ligne du pied de page */
  footerDescription: "Des voix humaines pour vos clients.",
} as const;
