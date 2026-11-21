# Nzé Call — site vitrine

Une voix humaine pour chaque appel.

Site vitrine de **Nzé Call**, service de relation client téléphonique basé à
Libreville (Gabon) : accueil téléphonique, service client externalisé, prise
de rendez-vous B2B et rappel de prospects, assurés par des agents
francophones appuyés par l'IA.

- **Pages** : accueil, `/services`, `/approche`, `/contact`,
  `/mentions-legales`, `/confidentialite`, page 404 en français.
- **Contact** : formulaire unique (Server Action maison), validation côté
  serveur en français, pot de miel, limitation de débit par IP, envoi par
  e-mail via Resend. Aucune donnée n'est stockée en base.
- **Conformité** : RGPD + loi gabonaise n°001/2011 modifiée (voir plus bas).

## Stack technique

| Élément | Choix |
| --- | --- |
| Framework | Next.js 16 (App Router, génération statique de toutes les pages) |
| Langage | TypeScript (strict) |
| Styles | Tailwind CSS 4 (aucun kit UI, aucun CSS-in-JS) |
| Polices | Fredoka, Nunito, JetBrains Mono — **auto-hébergées** (`/public/fonts`, licence OFL), servies par `next/font/local` |
| Images | `next/image` (AVIF/WebP), fichiers optimisés dans `/public/images` |
| Formulaire | Server Action + zod (validation serveur, messages en français) + Resend (SDK) |
| E-mails | Resend — variables d'environnement uniquement |

## Installation locale

Prérequis : Node.js 20.9 ou supérieur.

```bash
npm install
cp .env.example .env.local   # renseigner les variables si besoin
npm run dev                  # http://localhost:3000
```

Autres commandes :

```bash
npm run build   # build de production
npm start       # serveur de production local
```

Sans `RESEND_API_KEY`, le formulaire fonctionne en développement : l'envoi
est simulé et le message est consigné dans la console du serveur. En
production sans clé, une erreur générique est affichée (aucun détail interne
n'est divulgué).

## Variables d'environnement

Voir `.env.example` (documenté en français) :

| Variable | Rôle | Valeur par défaut |
| --- | --- | --- |
| `SITE_URL` | URL canonique (sitemap, robots, Open Graph, canoniques) | `https://nzecall.com` |
| `RESEND_API_KEY` | Clé API Resend pour l'envoi des e-mails | — |
| `CONTACT_EMAIL_TO` | Adresse destinataire des demandes de devis | `contact@nzecall.com` |
| `RESEND_FROM` | Expéditeur des e-mails (optionnel) | `Nzé Call <onboarding@resend.dev>` |

## Déploiement sur Vercel

1. Importer le dépôt GitHub dans Vercel (New Project → Import Git Repository).
2. Renseigner les variables d'environnement ci-dessus dans
   Project → Settings → Environment Variables.
3. Déployer. Aucun réglage particulier : le framework Next.js est détecté
   automatiquement, toutes les pages publiques sont prérendues en statique.

## Structure du dossier

```
nzecall/
├── public/
│   ├── brand/          # Logo (SVG éditables), favicon, icônes
│   ├── fonts/          # Polices woff2 auto-hébergées (licence OFL)
│   ├── images/         # Photographies optimisées
│   └── og-image.png    # Image Open Graph (1200 × 630)
├── src/
│   ├── actions/        # Server Action du formulaire (contact.ts)
│   ├── app/            # Pages (App Router), layout, sitemap, robots, icônes
│   ├── components/     # En-tête, pied de page, accordéon, formulaire, chips…
│   ├── config/site.ts  # ⚙️ Configuration unique (nom, URL, e-mail…)
│   └── content/        # Contenus partagés (services, approche, témoignages, FAQ)
├── .env.example        # Variables d'environnement documentées
├── TODO.md             # Liste de contrôle du fondateur
└── package.json
```

## Comment changer…

### …le logo

Toutes les sources SVG éditables sont dans `/public/brand/`
(`logo-mono.svg`, `logo-accent.svg`, `mark-*.svg`, `favicon.svg`,
`apple-touch-icon.svg`). Remplacez ces fichiers, puis régénérez :

- `src/app/icon.svg` et `src/app/favicon.ico` (favicon navigateur),
- `src/app/apple-icon.png` et `public/og-image.png` (réseaux sociaux),
- la marque affichée dans la navigation et le pied de page
  (`src/components/Logo.tsx`).

### …le domaine

Une seule ligne : la variable `SITE_URL` (`.env.local` en développement,
Environment Variables dans Vercel en production). Toutes les URL canoniques,
le sitemap, `robots.txt` et Open Graph en dérivent via `src/config/site.ts`.

### …l'adresse destinataire des demandes

Variable `CONTACT_EMAIL_TO` (aucune modification de code nécessaire).

## Note de conformité

- **Aucun traceur** : le site ne dépose aucun cookie, n'utilise ni
  statistiques, ni publicité, ni plugin social, ni script tiers — aucune
  bannière de consentement n'est donc nécessaire. Une vérification réseau
  du site chargé ne montre que des requêtes vers le domaine du site.
- **Polices auto-hébergées** : aucune requête vers Google Fonts.
- **Formulaire** : validation serveur, pot de miel anti-robots, limitation
  de débit (5 envois/heure/adresse IP), aucune conservation en base de
  données ; les droits d'accès, de rectification et d'effacement sont
  décrits dans la [politique de confidentialité](/confidentialite).
- **Accessibilité** : structure sémantique (landmarks, titres), libellés
  de champs visibles, accordéons et navigation pilotables au clavier,
  focus visible, contrastes vérifiés (WCAG 2.1 AA).
- **SEO** : `lang="fr"`, titres et descriptions uniques, canoniques,
  `sitemap.xml`, `robots.txt`, Open Graph, JSON-LD (Organization +
  LocalBusiness à Libreville).

## Audit par rapport au site d'origine (Durable)

Le site reprend la structure, la langue visuelle et le contenu du site de
démonstration TryCall, avec les corrections et ajouts suivants :

1. **Traceurs supprimés** : plus aucun script tiers ni cookie déposé par la
   plateforme (l'original, construit avec Durable, chargeait ses propres
   scripts et cookies) ; badge « Built with Durable » et bandeau
   « Preview mode » retirés.
2. **Pages juridiques ajoutées** : mentions légales et politique de
   confidentialité complètes, liées depuis le pied de page, conformes au
   RGPD et à la loi gabonaise n°001/2011 modifiée par la loi n°025/2023
   (autorité compétente au Gabon : APDPVP — *Autorité pour la Protection
   des Données Personnelles et de la Vie Privée*).
3. **Polices auto-hébergées** : zéro requête vers Google Fonts (l'original
   en dépendait), fichiers OFL versionnés dans le dépôt.
4. **Accessibilité** : accordéons natifs `button` + `aria-expanded`
   pilotables au clavier, libellés de champs explicites (l'original
   utilisait des placeholders), focus visible, lien d'évitement.
5. **SEO** : sitemap, robots, canoniques, Open Graph avec image dédiée et
   JSON-LD absents de l'original.
6. **Contenu** : marque « Nzé Call » partout, agents francophones (et non
   « français »), base opérationnelle à Libreville (Gabon), numéro de
   téléphone factice supprimé (le formulaire devient l'unique canal de
   contact), propos ouverts aux organisations de toutes tailles, aucune
   entreprise réelle citée.
7. **Formulaire** : service de réservation tiers remplacé par une Server
   Action maison (validation, anti-spam, envoi Resend), sans stockage de
   données.

## Licence

Code et contenus propriétaires — **tous droits réservés**. Ce projet n'est
pas distribué sous licence open source ; toute réutilisation requiert
l'autorisation écrite de Nzé Call.
