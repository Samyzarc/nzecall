# TODO — Liste de contrôle du fondateur

Actions à réaliser pour faire passer le site de l'état « prêt à déployer » à
l'état « prêt à recevoir des clients ». Chaque point renvoie à l'endroit
exact où intervenir.

## 1. Domaine et e-mail

- [ ] **Acheter le domaine `nzecall.com`** puis mettre à jour la variable
  `SITE_URL` (Vercel → Settings → Environment Variables) : toutes les URL
  canoniques, le sitemap et Open Graph en dépendent (voir `README.md`).
- [ ] **Créer la boîte `contact@nzecall.com`** et la raccorder dans le
  fournisseur de messagerie choisi.
- [ ] Configurer la **redirection** vers la boîte perso et le
  **« Envoyer en tant que » (Send-As)** pour répondre depuis
  `contact@nzecall.com`.
- [ ] Publier les enregistrements **SPF, DKIM et DMARC** du domaine
  (indispensables pour que les e-mails envoyés en son nom ne partent pas en
  spam).

## 2. Envoi des e-mails (Resend)

- [ ] **Créer le compte Resend** (resend.com) et récupérer la clé API.
- [ ] Renseigner `RESEND_API_KEY` dans Vercel (Settings → Environment
  Variables), pour Production comme pour Preview.
- [ ] **Vérifier le domaine `nzecall.com` dans Resend** (enregistrements DNS
  proposés par Resend), puis remplacer `RESEND_FROM` par
  `Nzé Call <contact@nzecall.com>` — tant que le domaine n'est pas vérifié,
  seul l'expéditeur de test `onboarding@resend.dev` fonctionne.
- [ ] Envoyer une demande de test via le formulaire et vérifier la réception
  sur `contact@nzecall.com` (objet : « Demande de devis — … »).

## 3. Société et mentions légales

- [ ] **Immatriculer la société** et compléter les mentions légales
  (`/mentions-legales`) : numéro RCCM et NIF, forme juridique, adresse
  complète du siège, nom du directeur de la publication — les emplacements
  sont indiqués par la mention « société en cours de constitution ».
- [ ] Faire relire les deux pages juridiques (`/mentions-legales`,
  `/confidentialite`) par un conseil si possible.

## 4. Marque

- [ ] **Remplacer le logo SVG** si souhaité : les sources éditables sont dans
  `/public/brand/` (marque, favicon, apple-touch-icon), puis régénérer
  `src/app/icon.svg`, `src/app/favicon.ico`, `src/app/apple-icon.png` et
  `public/og-image.png` (voir README, section « Comment changer le logo »).
- [ ] Remplacer si besoin les photographies (`/public/images/`) par de
  vraies photos d'équipe — les textes alternatifs sont à ajuster dans
  `src/app/**` en même temps.

## 5. Conformité continue

- [ ] **Si un outil tiers est ajouté plus tard** (statistiques, chat,
  paiement, carte interactive…), revoir la conformité RGPD avant la mise en
  ligne : information des personnes, base légale, éventuel consentement
  préalable aux traceurs, et mise à jour de la politique de confidentialité
  (sous-traitants, transferts hors UE).
- [ ] Conserver le site sans traceur tant qu'aucun besoin mesurable n'est
  démontré : c'est son avantage de conformité.
