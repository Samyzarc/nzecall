/**
 * Types et état initial du formulaire de contact.
 * (Fichier distinct de l'action : un fichier « use server » ne peut
 * exporter que des fonctions asynchrones.)
 */

export type ContactFieldKey = "name" | "email" | "company" | "message";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  /** Message général (succès / erreur), en français */
  message?: string;
  /** Erreurs par champ, en français */
  fieldErrors?: Partial<Record<ContactFieldKey, string>>;
};

export const emptyContactState: ContactFormState = { status: "idle" };
