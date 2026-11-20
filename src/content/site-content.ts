/**
 * Données de contenu partagées entre les pages.
 * Structure et textes repris du site d'origine, adaptés à Nzé Call :
 * marque, Libreville (Gabon), interlocuteurs francophones, demande de devis
 * par formulaire (unique canal de contact). Les intitulés des quatre
 * missions et les trois témoignages sont conservés à l'identique.
 */

/* ------------------------------------------------------------------ */
/* Page d'accueil                                                      */
/* ------------------------------------------------------------------ */

export const heroPills = [
  "Ligne disponible",
  "FR · Voix humaine",
  "Échange en cours",
  "Rendez-vous B2B",
];

export type Scene = {
  number: string;
  name: string;
  chip: string;
  heading: string;
  text: string;
  image: string;
  alt: string;
};

/** Galerie « Chaque appel compte. » — trois scènes de conversation. */
export const homeScenes: Scene[] = [
  {
    number: "01",
    name: "Accueil",
    chip: "Appel pris en charge",
    heading: "Une première impression qui tient parole.",
    text: "Répondre au nom de votre entreprise, transmettre le bon message, passer le relais au bon interlocuteur.",
    image: "/images/scene-accueil.jpg",
    alt: "Une professionnelle répond à un appel dans un bureau calme",
  },
  {
    number: "02",
    name: "Suivi",
    chip: "Demande suivie",
    heading: "Une réponse claire, même quand c'est compliqué.",
    text: "Demandes, commandes et réclamations suivent les procédures que nous avons définies ensemble.",
    image: "/images/scene-suivi.jpg",
    alt: "Une agente écoute attentivement un client au téléphone",
  },
  {
    number: "03",
    name: "Relation",
    chip: "Rendez-vous qualifié",
    heading: "La suite de la conversation commence ici.",
    text: "Nous rappelons les personnes intéressées dans le cadre précis de leur demande.",
    image: "/images/scene-relation.jpg",
    alt: "Deux professionnels préparent un rendez-vous dans un bureau",
  },
];

export type ServiceTile = {
  number: string;
  label: string;
  name: string;
  text: string;
  anchor: string;
  image?: string;
  alt?: string;
};

/** « Quatre façons d'être présents pour vous. » — grille bento de l'accueil. */
export const homeServices: ServiceTile[] = [
  {
    number: "01",
    label: "La première voix",
    name: "Accueil téléphonique",
    text: "Nous répondons au nom de votre entreprise, prenons les messages et transférons les communications. Avant le démarrage, nous fixons ensemble les plages de disponibilité, les actions autorisées ou interdites, la durée de la mission et la mobilisation des agents.",
    anchor: "accueil",
    image: "/images/offer-accueil.jpg",
    alt: "Une professionnelle prend un message téléphonique",
  },
  {
    number: "02",
    label: "Le suivi",
    name: "Service client externalisé",
    text: "Suivi des commandes, réponses aux demandes et traitement des réclamations. Accès aux outils, habilitations, procédures de transmission et situations nécessitant votre validation sont définis avant la prise en charge.",
    anchor: "service-client",
  },
  {
    number: "03",
    label: "Le bon interlocuteur",
    name: "Prise de rendez-vous B2B",
    text: "Nous recontactons les entreprises qui ont exprimé un besoin d'information. Profil, interlocuteur, objet et conditions de confirmation d'un rendez-vous valable sont convenus par écrit avec vous.",
    anchor: "rdv-b2b",
  },
  {
    number: "04",
    label: "La conversation continue",
    name: "Rappel de prospects",
    text: "Nous rappelons les personnes ayant demandé des informations, dans le périmètre de leur demande initiale. Chaque campagne précise l'origine des demandes, son cadre légal, les informations communicables et les suites possibles.",
    anchor: "rappel-prospects",
  },
];

export type StoryStep = {
  number: string;
  name: string;
  text: string;
};

/** Bandeau bleu « Le sérieux d'un cadre. La chaleur d'une voix. » */
export const storySteps: StoryStep[] = [
  {
    number: "01",
    name: "Nous écoutons",
    text: "Votre activité, vos clients et les situations qui reviennent le plus souvent.",
  },
  {
    number: "02",
    name: "Nous cadrons",
    text: "Consignes, accès, limites de décision et modalités de transmission.",
  },
  {
    number: "03",
    name: "Nous répondons",
    text: "Une prise en charge humaine, fidèle au périmètre convenu.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

/** Les trois témoignages sont conservés à l'identique. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Quand quelqu'un appelle, il veut d'abord savoir qu'on a compris pourquoi. C'est là que tout commence.",
    author: "Béatrice",
    role: "dirigeante",
  },
  {
    quote:
      "La différence se sent dans les détails : une question reformulée correctement, un message précis, et personne qui doit raconter son histoire deux fois.",
    author: "Guillaume",
    role: "responsable commercial",
  },
  {
    quote: "Je préfère une réponse honnête et un bon relais à une promesse donnée trop vite.",
    author: "Julie",
    role: "responsable clientèle",
  },
];

/* ------------------------------------------------------------------ */
/* Page Services                                                       */
/* ------------------------------------------------------------------ */

export type ServiceDetail = {
  anchor: string;
  number: string;
  label: string;
  name: string;
  text: string;
  cta: string;
};

/** « Quatre missions, un même sens de l'écoute. » */
export const servicesDetail: ServiceDetail[] = [
  {
    anchor: "accueil",
    number: "01",
    label: "Première voix",
    name: "Accueil téléphonique",
    text: "Nous répondons au nom de votre entreprise, prenons les messages et transférons les appels aux bons interlocuteurs. Avant le démarrage, nous fixons vos plages de disponibilité, les actions autorisées ou interdites, la durée de la mission et la mobilisation des agents.",
    cta: "Parler de votre accueil",
  },
  {
    anchor: "service-client",
    number: "02",
    label: "Demande suivie",
    name: "Service client externalisé",
    text: "Suivi des commandes, réponses aux demandes et traitement des réclamations : nos agents suivent vos procédures. Nous définissons leurs accès aux outils, leurs habilitations, les transmissions attendues et les décisions qui restent soumises à votre validation.",
    cta: "Définir le périmètre",
  },
  {
    anchor: "rdv-b2b",
    number: "03",
    label: "Échange B2B",
    name: "Prise de rendez-vous B2B",
    text: "Nous recontactons les entreprises qui ont demandé des informations ou exprimé un besoin. Avant tout appel, nous convenons par écrit du profil recherché, de l'interlocuteur attendu, de l'objet de l'échange et des conditions de confirmation d'un rendez-vous valable.",
    cta: "Échanger sur vos critères",
  },
  {
    anchor: "rappel-prospects",
    number: "04",
    label: "Conversation reprise",
    name: "Rappel de prospects",
    text: "Nous rappelons les personnes ayant sollicité des informations, sans sortir du périmètre de leur demande initiale. Chaque campagne précise l'origine des demandes, les éléments justifiant la conformité des rappels, les informations communicables et les suites que nos agents peuvent proposer.",
    cta: "Préparer vos rappels",
  },
];

export type ConstellationItem = {
  mark: string;
  chip: string;
  title: string;
  text: string;
};

/** « Une conversation libre, un cadre précis. » */
export const constellationItems: ConstellationItem[] = [
  {
    mark: "●",
    chip: "Ligne active · FR",
    title: "La bonne disponibilité",
    text: "Les plages de prise en charge et les modalités de mobilisation sont convenues avant la mission.",
  },
  {
    mark: "✳",
    chip: "Consignes écrites",
    title: "Les bonnes limites",
    text: "Actions permises, situations à transmettre et validations nécessaires sont établies avec votre équipe.",
  },
  {
    mark: "→",
    chip: "Relais défini",
    title: "La bonne suite",
    text: "Un message exploitable, un transfert pertinent ou un suivi conforme à votre procédure.",
  },
];

/** « Votre façon de répondre reste la vôtre. » — trois étapes ✳. */
export const afterHelloSteps: string[] = [
  "Nous prenons connaissance des demandes récurrentes et des réponses attendues.",
  "Nous établissons les accès, les procédures et les limites d'intervention.",
  "Nos interlocuteurs francophones prennent le relais dans le périmètre convenu ; les outils utilisés sont validés avec vous et soumis à une vérification humaine.",
];

/** « Les questions à poser, les réponses à construire. » — cinq questions. */
export const faqItems = [
  {
    question: "Comment définissez-vous les horaires de réponse ?",
    answer:
      "Nous convenons avec vous des plages pendant lesquelles les agents doivent être disponibles, ainsi que de la durée de la mission et des modalités de leur mobilisation. Ces éléments sont arrêtés avant le démarrage de l'accueil téléphonique.",
  },
  {
    question: "Vos agents peuvent-ils prendre une décision sur une réclamation ?",
    answer:
      "Uniquement dans les limites que nous avons définies avec vous. Les procédures précisent ce que l'agent peut traiter, ce qu'il doit transmettre et les situations qui exigent votre validation.",
  },
  {
    question: "Qu'est-ce qu'un rendez-vous B2B valable ?",
    answer:
      "La réponse est fixée par écrit avec vous avant toute intervention : profil de l'entreprise, interlocuteur attendu, objet du rendez-vous et conditions de confirmation. L'agent travaille à partir de ces critères, et non d'une définition improvisée pendant l'appel.",
  },
  {
    question: "Dans quel cadre rappelez-vous des prospects ?",
    answer:
      "Nous recontactons des personnes ayant demandé des informations, dans le périmètre de leur demande initiale. Avant la campagne, nous précisons l'origine et l'objet des demandes, vérifions les éléments permettant de justifier la conformité des rappels au cadre légal applicable et encadrons les informations que l'agent peut communiquer.",
  },
  {
    question: "Quelle place l'IA occupe-t-elle dans vos conversations ?",
    answer:
      "L'interaction humaine est au cœur de notre service. Les outils utilisés, y compris toute assistance par IA, sont convenus avec vous et soumis à une vérification humaine. Nos interlocuteurs francophones, basés à Libreville, peuvent reformuler une demande, tenir compte de sa nuance et passer le relais lorsqu'une réponse exige votre décision.",
  },
];

/* ------------------------------------------------------------------ */
/* Page Notre approche                                                 */
/* ------------------------------------------------------------------ */

export type FrameBlock = {
  number: string;
  label: string;
  chip: string;
  rows: { key: string; value: string }[];
  heading: string;
  text: string;
};

/** « Une conversation libre dans un cadre précis » — trois blocs numérotés. */
export const frameBlocks: FrameBlock[] = [
  {
    number: "01",
    label: "Préparer",
    chip: "Ligne cadrée",
    rows: [
      { key: "Disponibilité des agents", value: "À définir" },
      { key: "Actions autorisées", value: "Par écrit" },
      { key: "Messages et transferts", value: "Selon vos consignes" },
    ],
    heading: "Vos consignes donnent le ton.",
    text: "Pour l'accueil téléphonique, nous fixons les plages de disponibilité, la durée de la mission et les modalités de mobilisation. Nous précisons aussi quels messages prendre, quand transférer un appel et quelles actions ne pas entreprendre.",
  },
  {
    number: "02",
    label: "Accompagner",
    chip: "Demande suivie",
    rows: [
      { key: "Demande reçue", value: "Écouter" },
      { key: "Procédure applicable", value: "Traiter" },
      { key: "Décision réservée au client", value: "Transmettre" },
    ],
    heading: "Répondre sans dépasser son rôle.",
    text: "Pour le suivi des commandes et les réclamations, nous définissons les accès aux outils, les habilitations et les procédures. Une demande qui exige votre validation vous revient avec les éléments utiles.",
  },
  {
    number: "03",
    label: "Reprendre contact",
    chip: "Suite pertinente",
    rows: [],
    heading: "Un rappel a toujours un contexte.",
    text: "Pour les rendez-vous B2B, les critères de qualification sont convenus par écrit. Pour les prospects, nous vérifions le cadre légal applicable et restons dans le périmètre de leur demande initiale.",
  },
];

/** « Ce que nous gardons à l'esprit pendant chaque échange » — trois repères. */
export const mindsetCards = [
  {
    title: "Comprendre la nuance",
    text: "Reformuler une demande avant d'y répondre évite les malentendus et permet de transmettre un message fidèle à ce que la personne a réellement dit.",
  },
  {
    title: "Dire ce qui est possible",
    text: "Nos agents s'en tiennent aux informations et aux décisions que vous les avez autorisés à communiquer. Une réponse honnête vaut mieux qu'une promesse donnée trop vite.",
  },
  {
    title: "Passer le bon relais",
    text: "Lorsqu'une situation sort du cadre convenu, nous la transmettons selon la procédure prévue, avec le contexte nécessaire pour que votre équipe puisse prendre la suite.",
  },
];

/** Badges de la section « Une personne, pas un scénario. » */
export const approachBadges = [
  "Voix francophones",
  "L'humain d'abord",
  "Basés à Libreville",
  "Consignes définies ensemble",
];

/* ------------------------------------------------------------------ */
/* Page Contact                                                        */
/* ------------------------------------------------------------------ */

/** Repères affichés à côté du formulaire. */
export const contactFacts = [
  { key: "Lieu", value: "Libreville, Gabon" },
  { key: "Équipe", value: "Interlocuteurs francophones" },
  { key: "Prise en charge", value: "Accueil · suivi · rendez-vous B2B · rappels" },
  { key: "Cadre", value: "Consignes définies avant chaque mission" },
];
