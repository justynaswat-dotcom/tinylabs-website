/* ───────────────────────────────────────────────────────────────────────────
   LA VOIE — contenu de la fiche, par langue

   Même organisation que project-stool.ts : le texte vit ici, le composant ne
   porte que la structure.

   Le texte s'appuie sur le livre La Voie (TINY LABS éditions, mai 2025) :
   prologue, méthodologie (résidence, workshop, exposition), sommaire,
   conclusion et crédits. Les faits (Mouans-Sartoux, résidence du 22 au
   30 juin 2024, atelier de septembre 2024, container au Festival du Livre,
   14 chapitres et leurs entretiens) en sont tirés tels quels. Les valeurs
   restent celles de l'ancien site la-voie.info. L'atlas des communs
   sensibles annoncé sur l'ancien site ne s'est pas fait : il n'apparaît
   nulle part. L'anglais et le polonais sont mes traductions, pas des
   relectures natives, comme pour les autres fiches.

   Les boutons « Voir l'extrait » et « Liste de précommandes » du site
   d'origine ne pointaient vers aucune adresse : ils deviennent ici l'appel
   de contact, vers hello@tinylabs.one.
   ─────────────────────────────────────────────────────────────────────────── */

export type LaVoieContent = typeof fr;

/** Playlist des films, et premier film (affiche + lecteur). */
export const PLAYLIST =
  "https://www.youtube.com/playlist?list=PL-VosBr167xDGtwCrnr4le81NrPc5vFLN";
export const FILM_ID = "cmnIruLz1sk";


const fr = {
  allWork: "Tous les travaux",
  nav: {
    voir: "Découvrir",
    retour: "La Voie",
    precedent: "Précédent",
    suivant: "Suivant",
    volets: "Les quatre volets du projet",
  },
  title: "La Voie",
  subtitle: "Concevoir le mouvement pour un futur commun",
  note: "Une recherche-action à Mouans-Sartoux sur les véhicules intermédiaires, entre le vélo et la voiture : résidence, atelier, films, exposition et livre.",

  meta: [
    { k: "Programme", v: "Extrême Défi Mobilité · ADEME, France 2030" },
    { k: "Territoire", v: "Mouans-Sartoux, Alpes-Maritimes" },
    { k: "Période", v: "Juin 2024 – octobre 2025" },
    { k: "Formats", v: "Résidence, atelier, 14 entretiens filmés, exposition, livre" },
  ],

  intro: {
    label: "Le projet",
    lead:
      "La manière dont nous nous déplaçons rend-elle justice au paysage ? La Voie part de cette question, à Mouans-Sartoux, pour explorer les Vélis : des véhicules intermédiaires entre le vélo, agile mais limité, et la voiture, protectrice mais lourde et polluante.",
    body:
      "Tout le monde n'a pas accès à ces véhicules, ni les moyens de les choisir. La Voie part de ce constat et le relie au reste du territoire : la santé, l'eau, la biodiversité. Nos objectifs :",
    aims: [
      "Écouter un territoire avant de proposer : élu·es, jardinier·es, mécanicien·nes, soignant·es, enfants, artistes",
      "Tester les Vélis dans le quotidien réel, sur les trajets et dans les paysages de Mouans-Sartoux",
      "Relier la mobilité à l'eau, au sol, à la santé, à la biodiversité et à la culture",
      "Laisser des outils que d'autres territoires peuvent reprendre : cartes sensibles, exposition, films, livre",
    ],
  },

  valeurs: {
    label: "Les valeurs",
    heading:
      "Elles donnent un cap, une direction, et traduisent ce que nous voulons cultiver à travers chaque action.",
    items: [
      { t: "Régénération", d: "Une mobilité qui aide à restaurer nos écosystèmes et renforce les liens sociaux, au lieu de les épuiser." },
      { t: "Lien social", d: "Faire de chaque déplacement une occasion d'échanger et de partager avec les habitants." },
      { t: "Plaisir", d: "Retrouver la joie de se déplacer, la beauté des paysages et la poésie de chaque chemin." },
      { t: "Ancrage culturel", d: "Développer de nouveaux imaginaires et des pratiques bien ancrées dans l'histoire et l'identité de chaque lieu." },
    ],
  },

  films: {
    label: "Films",
    heading: "Quatorze entretiens filmés, un par chapitre du livre.",
    voixLabel: "Quelques voix",
    principal: "Le film du projet",
    courtsLabel: "Les courts métrages en ligne",
    play: "Lire le film",
    consent: "La vidéo se charge depuis YouTube au clic.",
    playlist: "Voir toute la playlist",
    posterAlt: "Une route de montagne vue du ciel, titre « La Voie »",
  },

  demarche: {
    label: "En bref",
    heading:
      "Le projet en quatre volets.",
    items: [
      { t: "Résidence et atelier", d: "Une semaine sur place en juin 2024, puis un atelier en septembre." },
      { t: "Films", d: "Quatorze entretiens filmés, un par chapitre du livre." },
      { t: "Exposition", d: "Un espace itinérant pour faire l'expérience de la mobilité légère." },
      { t: "Livre", d: "212 pages, 14 chapitres, 14 entretiens et la méthode." },
    ],
  },

  ateliers: {
    label: "Résidence et atelier",
    heading:
      "Une semaine sur place pour écouter et tester, puis un atelier pour décider ensemble.",
    body:
      "Du 22 au 30 juin 2024, l'équipe s'est installée à Mouans-Sartoux avec ses micros, ses caméras et des Vélis. En septembre, un atelier a réuni les services de la ville et des associations autour d'une question : comment partager les Vélis entre eux ?",
    steps: [
      { t: "Écouter", d: "Rencontres avec habitant·es, élu·es, soignant·es et jardinier·es, autour de quatre thèmes : tourisme, santé et nature, culture, alimentation et eau." },
      { t: "Tester les Vélis", d: "Prise en main des véhicules et déambulations sur le territoire, pour capter des usages réels. Des directs en ligne avec la communauté Extrême Défi." },
      { t: "Cartographier ensemble", d: "Une cartographie sensible conçue pour l'atelier de septembre 2024 : régie agricole, régie des eaux, services techniques et associations y ont tracé flux, besoins et complémentarités." },
      { t: "Mutualiser", d: "Affiner un scénario commun pour partager les Vélis, choisir ou adapter un véhicule, imaginer un fonctionnement collectif et poser les bases d'une gouvernance partagée." },
    ],
    closing:
      "Maquettes, fiches pratiques et plans d'usage issus de l'atelier ont ensuite nourri l'exposition.",
    galerie: {
      brouillard: "Prise en main des Vélis, dans la brume",
      chemin: "Une déambulation entre les cyprès",
      groupe: "Essais à plusieurs, autour des véhicules",
      table: "L'atelier de septembre 2024, autour de la table",
      mains: "Tracer les flux et les besoins sur la cartographie sensible",
      soiree: "Une soirée de rencontre pendant la résidence",
      atelier: "Des participant·es penché·es sur une grande carte, en atelier",
      soir: "Les Vélis à la tombée du jour, dans la garrigue",
      vert: "Un Véli sur un chemin de gravier, entre les arbres",
      debout: "Autour de la grande carte, pendant l'atelier",
    },
    carnet: [
      "On a posé nos micros, nos caméras, nos Vélis… et on a écouté.",
      "Résidence, 22 – 30 juin 2024. Chacun·e avait une pièce du puzzle : élu·es, jardinier·es, mécanicien·nes, enfants, artistes.",
      "La mobilité devient vivante dès qu'on la reconnecte au territoire. À l'eau, au sol, à la santé, au paysage.",
    ],
    atelierAlt: "Des participant·es penché·es sur une grande carte, en atelier",
    carteAlt: "La cartographie sensible posée sur la table de l'atelier, jalonnée de repères",
  },

  dessinAlt: "Un territoire dessiné à la main, vu du ciel",

  exposition: {
    label: "Exposition",
    heading:
      "Un espace dédié à l'expérience de la mobilité légère.",
    body:
      "Un module itinérant, installé dans l'espace public, pour découvrir autrement les véhicules intermédiaires. On y entre, on écoute les habitants filmés, on lit les cartes du territoire, puis on essaie les Vélis garés à côté. Après le Festival du Livre de Mouans-Sartoux, il a voyagé jusqu'à Arles et Paris.",
    lieuxLabel: "Où l'exposition a été montrée",
    lieux: [
      { quand: "4 – 6 octobre 2024", ou: "Festival du Livre, Mouans-Sartoux" },
      { quand: "23 – 27 août 2025", ou: "Agir pour le vivant, Arles" },
      { quand: "8 – 9 octobre 2025", ou: "Produrable, Palais des Congrès, Paris" },
    ],
    contenuLabel: "Contenu",
    contenu: [
      "Vidéos en boucle et extraits d'entretiens",
      "Cartes sensibles qui lient mobilité, paysages et biodiversité",
      "Objets, maquettes et fiches issus de l'atelier",
      "Une terrasse d'accueil et une rampe d'accès, les Vélis à proximité",
    ],
    objectifsLabel: "Objectifs",
    objectifs: [
      "Rendre aux habitant·es ce qu'ils et elles ont partagé, sous une forme tangible",
      "Attirer les passant·es et ouvrir la discussion",
      "Faire comprendre les besoins, les limites et les potentiels du territoire",
      "Circuler : le module peut se réinstaller, adapté, dans d'autres territoires",
    ],
    galerie: {
      place: "Le container installé sur la place, pendant le Festival du Livre 2024",
      interieur: "À l'intérieur : photographies de terrain et table cartographique",
      ecran: "Sous la pergola, les entretiens projetés en boucle",
      visiteurs: "Des visiteurs à l'entrée de l'exposition",
      carte: "La maquette-carte du territoire, posée sur la table",
      dialogue: "Une discussion devant les panneaux, sous la pergola",
    },
    moduleAlt: "Rendu du module : container maritime réaménagé, pergola en bois et terrasse d'accueil",
    panneauxAlt: "Panneaux de l'exposition derrière un écran de polycarbonate ondulé",
    photosAlt: "Les photographies de terrain accrochées sur le module",
    routeAlt: "Une route en lacets vue du ciel, à côté d'un tracé de parcours",
  },

  livre: {
    label: "Livre",
    heading:
      "Un journal de bord en quatorze chapitres, du défi à la liberté.",
    body:
      "Chaque chapitre part d'un entretien : un ingénieur de l'ADEME, des élus et agents de Mouans-Sartoux, des fabricants et réparateurs de véhicules, une soignante, un chef-jardinier, une habitante. Au milieu, la méthodologie de TINYLABS ; à la fin, une conclusion sur la ville pensée comme un organisme vivant.",
    sousTitre: "La documentation d'une expérimentation : des Vélis partagés pour répondre aux besoins réels d'une commune.",
    pourquoi: "À Mouans-Sartoux et dans le pays de Grasse, nous avons suivi des habitant·es, des services publics et des associations sur leurs trajets de tous les jours, essayé avec eux des véhicules intermédiaires entre le vélo et la voiture, puis construit un scénario de partage. Le livre rassemble ces cas : ce qui marche, ce qui coince, et la méthode pour le refaire ailleurs.",
    casLabel: "Les cas documentés",
    casIntro: "Chaque chapitre part d'un besoin réel, d'un lieu et d'un véhicule qui peut y répondre.",
    cas: [
      { besoin: "Livrer les légumes aux cantines", d: "La régie agricole produit 25 tonnes de légumes par an pour les écoles. Les livrer chaque matin sans utilitaire, et mutualiser les trajets.", lieu: "MEAD, Mouans-Sartoux", vehicule: "Remorque K-Ryole", chap: 4 },
      { besoin: "Un service public qui roule peu", d: "Les agents de la régie des eaux font environ 2 000 km par an entre les sites. Pourquoi acheter une camionnette électrique pour si peu ?", lieu: "Station d'épuration, Mouans-Sartoux", vehicule: "Midipile", chap: 5 },
      { besoin: "Les trajets d'une famille", d: "Laura marche déjà pour l'école et les petites courses, mais reprend la voiture pour les activités des enfants. Essai d'un Véli avec ses deux enfants à bord.", lieu: "Marché de Mouans-Sartoux", vehicule: "QBX Sorean", chap: 8 },
      { besoin: "Transporter des enfants hors des villes", d: "Un vélo à quatre roues, stable et abrité, pour un adulte et plusieurs enfants : un premier pas pour les familles qui n'osent pas le vélo.", lieu: "Gourdon", vehicule: "BOB, Sanka Cycle", chap: 1 },
      { besoin: "Travailler un jardin en pente", d: "Engrais, outils, terrasses à flanc de colline : un petit véhicule électrique a changé le travail des jardiniers, sans bruit ni pollution.", lieu: "Jardins du Musée international de la parfumerie, Grasse", vehicule: "Goupil", chap: 11 },
      { besoin: "Accéder aux potagers citoyens", d: "Des terrains confiés aux habitant·es, accessibles à pied ou à vélo. Porter outils, terreau et récoltes sans goudronner le chemin.", lieu: "Potagers citoyens, Mouans-Sartoux", vehicule: "Vheliotech", chap: 9 },
      { besoin: "Venir travailler à l'hôpital", d: "70 % du personnel vit à moins de 10 km. Vélos, atelier de réparation, covoiturage : une cinquantaine d'agents viennent à vélo, contre aucun au départ.", lieu: "Centre hospitalier de Grasse", vehicule: "Karbikes", chap: 10 },
      { besoin: "Essayer avant de choisir", d: "Prêter des vélos électriques, des cargos et des remorques pour tester au quotidien. Là où le dénivelé ou les distances dépassent le vélo, le Véli prend le relais.", lieu: "Association Choisir le Vélo", vehicule: "Le Formidable", chap: 7 },
    ],
    partageLabel: "Un véhicule, quatre usages",
    partageTexte: "En septembre 2024, la régie agricole, la régie des eaux, les services techniques et des associations se sont réunis autour d'une question : comment partager les Vélis ? Le résultat est une semaine type pour un seul véhicule, le Véli agricole.",
    partage: [
      { qui: "Régie agricole", quand: "Du lundi au vendredi, 8 h – 9 h 30 : livraison des légumes à 3 cantines et 1 crèche." },
      { qui: "Poulaillers et jardins citoyens", quand: "Mercredi 10 h 30, mardi, jeudi et samedi 14 h – 16 h : nourriture des poules." },
      { qui: "Ruches participatives", quand: "Une demi-journée le week-end au printemps et à l'automne ; transhumance en montagne en juin et en septembre." },
      { qui: "Habitant·es, avec Choisir le Vélo", quand: "Tous les créneaux libres." },
    ],
    partageAlt: "Tableau de la semaine type du Véli agricole partagé entre la régie agricole, les poulaillers et jardins citoyens, les ruches participatives et les habitant·es",
    etapesLabel: "Comment le travail a été mené",
    etapes: [
      { quand: "22 – 30 juin 2024", quoi: "Résidence : essais des Vélis sur le territoire, cartographie par thème avec les habitant·es et les services, six directs avec la communauté Extrême Défi." },
      { quand: "Septembre 2024", quoi: "Atelier : un scénario commun de partage, le choix du véhicule, les bases d'une gouvernance partagée." },
      { quand: "Octobre 2024", quoi: "Exposition au Festival du Livre de Mouans-Sartoux, avec les Vélis à essayer." },
      { quand: "Mai 2025", quoi: "Le livre : les quatorze cas, la méthode et les outils." },
    ],
    faits: "212 pages · 14 chapitres · TINYLABS éditions, mai 2025 · en français",
    feuilleter: "Feuilleter l'extrait",
    commanderBouton: "Commander le livre",
    chapitresLabel: "Les quatorze chapitres",
    chapitres: [
      { t: "Le défi", d: "Gabriel Plassat, ingénieur à l'ADEME" },
      { t: "L'esprit", d: "Benoît Tholence, cofondateur de Sanka Cycle" },
      { t: "Le lien", d: "Jean Dard, designer, projet Supercycle 2" },
      { t: "La biodiversité", d: "Marc Faure, conseiller municipal" },
      { t: "Le sol et l'usage", d: "Gilles Pérole, adjoint au maire, et Léa Sturton, MEAD" },
      { t: "L'eau", d: "Romain Bailly, SEM Eaux de Mouans" },
      { t: "L'entretien", d: "Victor Landes et Olivier Guido, EV Garage Riviera" },
      { t: "Le choix", d: "Arthur Garnier, association Choisir le Vélo" },
      { t: "La limite", d: "Laura, habitante de Mouans-Sartoux" },
      { t: "La citoyenneté", d: "Sylvain Bourdon, foncier agricole de la mairie" },
      { t: "La santé", d: "Nicole Spielmann, Centre hospitalier de Grasse" },
      { t: "L'identité", d: "Christophe Mège, chef-jardinier, Musée international de la parfumerie" },
      { t: "Le plaisir", d: "Olivier Cornet, fondateur d'Acticycle" },
      { t: "La liberté", d: "Docufiction avec Garance Tritschler" },
    ],
    couvertureAlt: "La couverture du livre « La Voie », vert sombre, pictogrammes blancs",
    pictogrammesAlt: "Les quatorze pictogrammes des chapitres, tracés au trait",
    herbesAlt: "Des herbes hautes et des fleurs sauvages, en pleine lumière",
    extrait: "Feuilleter un extrait",
    extraitNote: "48 pages sur 212",
    reperesLabel: "Aller à",
    reperes: { prologue: "Prologue", sommaire: "Sommaire", methode: "Méthode", conclusion: "Conclusion" },
    commander: "Le livre complet fait 212 pages, avec les quatorze entretiens en entier. Pour le commander, écrivez-nous à",
    feuilleteur: {
      precedente: "Page précédente",
      suivante: "Page suivante",
      aide: "Cliquez sur un coin ou faites glisser une page pour la tourner. Pour lire le texte, ouvrez le livre en grand.",
      pageAlt: "Extrait du livre La Voie, page {n}",
      agrandir: "Lire en grand",
      fermer: "Fermer",
      zoom: "Cliquez ou touchez la page pour l'agrandir.",
    },
  },

  citation: {
    texte: "Ce qui a été semé à Mouans-Sartoux peut maintenant circuler, germer ailleurs.",
    source: "Le livre La Voie",
  },

  credits: {
    label: "Partenaires et contact",
    projet: "Un projet de",
    soutien: "Avec le soutien de",
    films: "Les films",
    contact: "Contact",
  },

  cta: "Pour accueillir l'exposition ou une résidence, ou pour commander le livre, écrivez-nous à",

  openingAlt: "Une route en lacets dans la montagne, avec le titre La Voie",
};

const en: LaVoieContent = {
  allWork: "All work",
  nav: {
    voir: "Discover",
    retour: "La Voie",
    precedent: "Previous",
    suivant: "Next",
    volets: "The four parts of the project",
  },
  title: "La Voie",
  subtitle: "Designing movement for a shared future",
  note: "Action research in Mouans-Sartoux on intermediate vehicles, between the bike and the car: a residency, a workshop, films, an exhibition and a book.",

  meta: [
    { k: "Programme", v: "Extrême Défi Mobilité · ADEME, France 2030" },
    { k: "Place", v: "Mouans-Sartoux, Alpes-Maritimes" },
    { k: "Period", v: "June 2024 – October 2025" },
    { k: "Formats", v: "Residency, workshop, 14 filmed interviews, exhibition, book" },
  ],

  intro: {
    label: "The project",
    lead:
      "Does the way we move do justice to the landscape? La Voie starts from this question, in Mouans-Sartoux, to explore Vélis: intermediate vehicles between the bike, nimble but limited, and the car, protective but heavy and polluting.",
    body:
      "Not everyone has access to these vehicles, or the means to choose them. La Voie starts from that fact and links it to the rest of the territory: health, water, biodiversity. Our aims:",
    aims: [
      "Listen to a place before proposing anything: elected officials, gardeners, mechanics, carers, children, artists",
      "Test Vélis in real daily life, on the journeys and in the landscapes of Mouans-Sartoux",
      "Connect mobility to water, soil, health, biodiversity and culture",
      "Leave tools other places can pick up: sensitive maps, an exhibition, films, a book",
    ],
  },

  valeurs: {
    label: "Values",
    heading:
      "They set a course and a direction, and express what we want to cultivate through every action.",
    items: [
      { t: "Regeneration", d: "Mobility that helps restore our ecosystems and strengthens social ties, instead of wearing them out." },
      { t: "Social ties", d: "Making every journey a chance to meet and share with the people who live there." },
      { t: "Pleasure", d: "Rediscovering the joy of moving, the beauty of landscapes and the poetry of every path." },
      { t: "Cultural roots", d: "Growing new imaginaries and practices that are rooted in the history and identity of each place." },
    ],
  },

  films: {
    label: "Films",
    heading: "Fourteen filmed interviews, one for each chapter of the book.",
    voixLabel: "Some of the voices",
    principal: "The project film",
    courtsLabel: "The short films online",
    play: "Play the film",
    consent: "The video loads from YouTube when you press play.",
    playlist: "See the full playlist",
    posterAlt: "A mountain road seen from above, with the title “La Voie”",
  },

  demarche: {
    label: "In short",
    heading:
      "The project in four parts.",
    items: [
      { t: "Residency and workshop", d: "A week on site in June 2024, then a workshop in September." },
      { t: "Films", d: "Fourteen filmed interviews, one for each chapter of the book." },
      { t: "Exhibition", d: "A travelling space for experiencing light mobility." },
      { t: "Book", d: "212 pages, 14 chapters, 14 interviews and the method." },
    ],
  },

  ateliers: {
    label: "Residency and workshop",
    heading:
      "A week on site to listen and test, then a workshop to decide together.",
    body:
      "From 22 to 30 June 2024, the team settled in Mouans-Sartoux with microphones, cameras and Vélis. In September, a workshop brought the town's services and local associations together around one question: how could they share the Vélis?",
    steps: [
      { t: "Listen", d: "Meetings with residents, elected officials, carers and gardeners, around four themes: tourism, health and nature, culture, food and water." },
      { t: "Test the Vélis", d: "Getting to grips with the vehicles and walking the territory with them, to capture real uses. Live broadcasts with the Extrême Défi community." },
      { t: "Map together", d: "A sensitive map designed for the September 2024 workshop: the municipal farm, the water utility, technical services and local associations drew flows, needs and complementarities on it." },
      { t: "Share", d: "Refine a common scenario for sharing Vélis, choose or adapt a vehicle, imagine a collective way of running it and lay the foundations of shared governance." },
    ],
    closing:
      "Models, practical sheets and usage plans from the workshop then fed into the exhibition.",
    galerie: {
      brouillard: "Getting to grips with the Vélis in the mist",
      chemin: "A ride between the cypress trees",
      groupe: "Trying the vehicles out together",
      table: "The September 2024 workshop, around the table",
      mains: "Drawing flows and needs on the sensitive map",
      soiree: "An evening gathering during the residency",
      atelier: "Participants leaning over a large map during a workshop",
      soir: "The Vélis at dusk, in the scrubland",
      vert: "A Véli on a gravel path between the trees",
      debout: "Around the large map during the workshop",
    },
    carnet: [
      "We set down our microphones, our cameras, our Vélis… and we listened.",
      "Residency, 22–30 June 2024. Everyone held a piece of the puzzle: elected officials, gardeners, mechanics, children, artists.",
      "Mobility comes alive as soon as you reconnect it to the place. To water, to soil, to health, to the landscape.",
    ],
    atelierAlt: "Participants leaning over a large map during a workshop",
    carteAlt: "The sensitive map on the workshop table, dotted with markers",
  },

  dessinAlt: "A territory drawn by hand, seen from above",

  exposition: {
    label: "Exhibition",
    heading:
      "A space dedicated to experiencing light mobility.",
    body:
      "A travelling module set up in public space, to discover intermediate vehicles in a different way. Visitors step in, listen to the residents on film, read the maps of the territory, then try the Vélis parked outside. After the Festival du Livre in Mouans-Sartoux, it travelled to Arles and Paris.",
    lieuxLabel: "Where the exhibition was shown",
    lieux: [
      { quand: "4 – 6 October 2024", ou: "Festival du Livre, Mouans-Sartoux" },
      { quand: "23 – 27 August 2025", ou: "Agir pour le vivant, Arles" },
      { quand: "8 – 9 October 2025", ou: "Produrable, Palais des Congrès, Paris" },
    ],
    contenuLabel: "Contents",
    contenu: [
      "Looping videos and interview extracts",
      "Sensitive maps linking mobility, landscapes and biodiversity",
      "Objects, models and sheets from the workshop",
      "A welcome terrace and an access ramp, with the Vélis close by",
    ],
    objectifsLabel: "Aims",
    objectifs: [
      "Give back to residents what they shared, in a tangible form",
      "Draw in passers-by and start a conversation",
      "Help people understand the needs, limits and potential of the place",
      "Travel: the module can be set up again, adapted, in other places",
    ],
    galerie: {
      place: "The container set up on the square during the Festival du Livre 2024",
      interieur: "Inside: field photographs and the map table",
      ecran: "Under the pergola, the interviews playing on a loop",
      visiteurs: "Visitors at the entrance to the exhibition",
      carte: "The model map of the territory, on the table",
      dialogue: "A conversation in front of the panels, under the pergola",
    },
    moduleAlt: "Render of the module: a converted shipping container, a timber pergola and a welcome terrace",
    panneauxAlt: "Exhibition panels behind a corrugated polycarbonate screen",
    photosAlt: "Field photographs hung on the module",
    routeAlt: "A winding road seen from above, next to a drawn route",
  },

  livre: {
    label: "Book",
    heading:
      "A logbook in fourteen chapters, from the challenge to freedom.",
    body:
      "Each chapter starts from an interview: an ADEME engineer, elected officials and staff of Mouans-Sartoux, vehicle makers and repairers, a carer, a head gardener, a resident. In the middle, the TINYLABS methodology; at the end, a conclusion on the city as a living organism.",
    sousTitre: "The record of an experiment: shared Vélis to meet the real needs of a town.",
    pourquoi: "In Mouans-Sartoux and around Grasse, we followed residents, public services and associations on their everyday trips, tried intermediate vehicles between the bike and the car with them, then built a plan to share them. The book gathers these cases: what works, what gets in the way, and the method to do it again elsewhere.",
    casLabel: "The documented cases",
    casIntro: "Each chapter starts from a real need, a place and a vehicle that can meet it.",
    cas: [
      { besoin: "Delivering vegetables to school canteens", d: "The municipal farm grows 25 tonnes of vegetables a year for the schools. Delivering them every morning without a van, and pooling the trips.", lieu: "MEAD, Mouans-Sartoux", vehicule: "K-Ryole trailer", chap: 4 },
      { besoin: "A public service that drives very little", d: "Water company staff drive about 2,000 km a year between sites. Why buy an electric van for so little?", lieu: "Treatment plant, Mouans-Sartoux", vehicule: "Midipile", chap: 5 },
      { besoin: "A family's daily trips", d: "Laura already walks to school and the shops, but takes the car for the children's activities. She tried a Véli with her two children on board.", lieu: "Mouans-Sartoux market", vehicule: "QBX Sorean", chap: 8 },
      { besoin: "Carrying children outside the city", d: "A stable, sheltered four-wheel bike for one adult and several children: a first step for families who don't yet dare to cycle.", lieu: "Gourdon", vehicule: "BOB, Sanka Cycle", chap: 1 },
      { besoin: "Working a garden on a slope", d: "Fertiliser, tools, hillside terraces: a small electric vehicle changed the gardeners' work, with no noise or fumes.", lieu: "Gardens of the International Perfume Museum, Grasse", vehicule: "Goupil", chap: 11 },
      { besoin: "Reaching the community gardens", d: "Plots given to residents, reachable only on foot or by bike. Carrying tools, soil and harvests without paving the path.", lieu: "Community gardens, Mouans-Sartoux", vehicule: "Vheliotech", chap: 9 },
      { besoin: "Getting to work at the hospital", d: "70% of staff live within 10 km. Bikes, a repair workshop, carpooling: about fifty staff now cycle in, up from none.", lieu: "Grasse hospital", vehicule: "Karbikes", chap: 10 },
      { besoin: "Trying before choosing", d: "Lending e-bikes, cargo bikes and trailers to test in daily life. Where hills or distances are too much for a bike, a Véli takes over.", lieu: "Choisir le Vélo association", vehicule: "Le Formidable", chap: 7 },
    ],
    partageLabel: "One vehicle, four uses",
    partageTexte: "In September 2024, the municipal farm, the water company, the technical services and local associations met around one question: how do we share the Vélis? The result is a typical week for a single vehicle, the farm Véli.",
    partage: [
      { qui: "Municipal farm", quand: "Monday to Friday, 8:00 – 9:30: delivering vegetables to 3 canteens and 1 crèche." },
      { qui: "Community henhouses and gardens", quand: "Wednesday 10:30, Tuesday, Thursday and Saturday 14:00 – 16:00: feeding the hens." },
      { qui: "Community beehives", quand: "Half a day at weekends in spring and autumn; moving the hives to the mountains in June and September." },
      { qui: "Residents, with Choisir le Vélo", quand: "All free slots." },
    ],
    partageAlt: "Chart of a typical week for the farm Véli shared between the municipal farm, community henhouses and gardens, community beehives and residents",
    etapesLabel: "How the work was done",
    etapes: [
      { quand: "22 – 30 June 2024", quoi: "Residency: trying Vélis around the area, mapping by theme with residents and services, six live sessions with the Extrême Défi community." },
      { quand: "September 2024", quoi: "Workshop: a shared plan for the vehicles, the choice of vehicle, the basis for shared governance." },
      { quand: "October 2024", quoi: "Exhibition at the Mouans-Sartoux Festival du Livre, with Vélis to try." },
      { quand: "May 2025", quoi: "The book: the fourteen cases, the method and the tools." },
    ],
    faits: "212 pages · 14 chapters · TINYLABS éditions, May 2025 · in French",
    feuilleter: "Leaf through the extract",
    commanderBouton: "Order the book",
    chapitresLabel: "The fourteen chapters",
    chapitres: [
      { t: "The challenge", d: "Gabriel Plassat, engineer at ADEME" },
      { t: "The spirit", d: "Benoît Tholence, co-founder of Sanka Cycle" },
      { t: "The link", d: "Jean Dard, designer, Supercycle 2 project" },
      { t: "Biodiversity", d: "Marc Faure, town councillor" },
      { t: "Soil and use", d: "Gilles Pérole, deputy mayor, and Léa Sturton, MEAD" },
      { t: "Water", d: "Romain Bailly, SEM Eaux de Mouans" },
      { t: "Maintenance", d: "Victor Landes and Olivier Guido, EV Garage Riviera" },
      { t: "The choice", d: "Arthur Garnier, Choisir le Vélo association" },
      { t: "The limit", d: "Laura, a resident of Mouans-Sartoux" },
      { t: "Citizenship", d: "Sylvain Bourdon, the town's farmland service" },
      { t: "Health", d: "Nicole Spielmann, Grasse hospital" },
      { t: "Identity", d: "Christophe Mège, head gardener, International Perfume Museum" },
      { t: "Pleasure", d: "Olivier Cornet, founder of Acticycle" },
      { t: "Freedom", d: "Docufiction with Garance Tritschler" },
    ],
    couvertureAlt: "The cover of the book “La Voie”, dark green with white pictograms",
    pictogrammesAlt: "The fourteen chapter pictograms, drawn in line",
    herbesAlt: "Tall grass and wild flowers in full light",
    extrait: "Leaf through an extract",
    extraitNote: "48 of 212 pages",
    reperesLabel: "Go to",
    reperes: { prologue: "Prologue", sommaire: "Contents", methode: "Method", conclusion: "Conclusion" },
    commander: "The full book has 212 pages, with all fourteen interviews. To order it, write to us at",
    feuilleteur: {
      precedente: "Previous page",
      suivante: "Next page",
      aide: "Click a corner or drag a page to turn it. To read the text, open the book full screen.",
      pageAlt: "Extract from the book La Voie, page {n}",
      agrandir: "Read full screen",
      fermer: "Close",
      zoom: "Click or tap the page to zoom in.",
    },
  },

  citation: {
    texte: "What was sown in Mouans-Sartoux can now travel and take root elsewhere.",
    source: "The book La Voie",
  },

  credits: {
    label: "Partners and contact",
    projet: "A project by",
    soutien: "Supported by",
    films: "The films",
    contact: "Contact",
  },

  cta: "To host the exhibition or a residency, or to order the book, write to us at",

  openingAlt: "A winding mountain road, with the title La Voie",
};

const pl: LaVoieContent = {
  allWork: "Wszystkie prace",
  nav: {
    voir: "Zobacz",
    retour: "La Voie",
    precedent: "Poprzedni",
    suivant: "Następny",
    volets: "Cztery części projektu",
  },
  title: "La Voie",
  subtitle: "Projektować ruch dla wspólnej przyszłości",
  note: "Badania w działaniu w Mouans-Sartoux o pojazdach pośrednich, między rowerem a samochodem: rezydencja, warsztat, filmy, wystawa i książka.",

  meta: [
    { k: "Program", v: "Extrême Défi Mobilité · ADEME, France 2030" },
    { k: "Miejsce", v: "Mouans-Sartoux, Alpy Nadmorskie" },
    { k: "Okres", v: "Czerwiec 2024 – październik 2025" },
    { k: "Formy", v: "Rezydencja, warsztat, 14 filmowanych wywiadów, wystawa, książka" },
  ],

  intro: {
    label: "Projekt",
    lead:
      "Czy sposób, w jaki się przemieszczamy, oddaje sprawiedliwość krajobrazowi? La Voie wychodzi od tego pytania w Mouans-Sartoux, by zbadać Vélis: pojazdy pośrednie między rowerem, zwinnym, ale ograniczonym, a samochodem, który chroni, ale jest ciężki i zanieczyszcza.",
    body:
      "Nie każdy ma dostęp do tych pojazdów ani środki, by je wybrać. La Voie wychodzi od tego faktu i łączy go z resztą terytorium: zdrowiem, wodą, bioróżnorodnością. Nasze cele:",
    aims: [
      "Wysłuchać miejsca, zanim cokolwiek zaproponujemy: samorządowców, ogrodników, mechaników, opiekunów, dzieci, artystów",
      "Przetestować Vélis w prawdziwej codzienności, na trasach i w krajobrazach Mouans-Sartoux",
      "Powiązać mobilność z wodą, glebą, zdrowiem, bioróżnorodnością i kulturą",
      "Zostawić narzędzia, które inne miejsca mogą przejąć: mapy wrażliwe, wystawę, filmy, książkę",
    ],
  },

  valeurs: {
    label: "Wartości",
    heading:
      "Wyznaczają kurs i kierunek, i wyrażają to, co chcemy pielęgnować w każdym działaniu.",
    items: [
      { t: "Regeneracja", d: "Mobilność, która pomaga odbudowywać ekosystemy i wzmacnia więzi społeczne, zamiast je wyczerpywać." },
      { t: "Więzi społeczne", d: "Każda podróż jako okazja do rozmowy i dzielenia się z mieszkańcami." },
      { t: "Przyjemność", d: "Odnaleźć radość przemieszczania się, piękno krajobrazów i poezję każdej drogi." },
      { t: "Zakorzenienie kulturowe", d: "Rozwijać nowe wyobrażenia i praktyki zakorzenione w historii i tożsamości każdego miejsca." },
    ],
  },

  films: {
    label: "Filmy",
    heading: "Czternaście filmowanych wywiadów, po jednym na każdy rozdział książki.",
    voixLabel: "Kilka głosów",
    principal: "Film o projekcie",
    courtsLabel: "Krótkie filmy online",
    play: "Odtwórz film",
    consent: "Film ładuje się z YouTube po kliknięciu.",
    playlist: "Zobacz całą playlistę",
    posterAlt: "Górska droga z lotu ptaka, z tytułem „La Voie”",
  },

  demarche: {
    label: "W skrócie",
    heading:
      "Projekt w czterech częściach.",
    items: [
      { t: "Rezydencja i warsztat", d: "Tydzień na miejscu w czerwcu 2024, potem warsztat we wrześniu." },
      { t: "Filmy", d: "Czternaście wywiadów, po jednym na każdy rozdział książki." },
      { t: "Wystawa", d: "Objazdowa przestrzeń do doświadczania lekkiej mobilności." },
      { t: "Książka", d: "212 stron, 14 rozdziałów, 14 wywiadów i metoda." },
    ],
  },

  ateliers: {
    label: "Rezydencja i warsztat",
    heading:
      "Tydzień na miejscu, by słuchać i testować, potem warsztat, by wspólnie zdecydować.",
    body:
      "Od 22 do 30 czerwca 2024 roku zespół zamieszkał w Mouans-Sartoux z mikrofonami, kamerami i pojazdami Vélis. We wrześniu warsztat zgromadził służby miejskie i stowarzyszenia wokół jednego pytania: jak mogą wspólnie korzystać z pojazdów Vélis?",
    steps: [
      { t: "Słuchać", d: "Spotkania z mieszkańcami, samorządowcami, opiekunami i ogrodnikami wokół czterech tematów: turystyka, zdrowie i przyroda, kultura, żywność i woda." },
      { t: "Testować Vélis", d: "Oswajanie się z pojazdami i przejażdżki po okolicy, by uchwycić prawdziwe sposoby użycia. Transmisje na żywo ze społecznością Extrême Défi." },
      { t: "Mapować razem", d: "Mapa wrażliwa zaprojektowana na wrześniowy warsztat 2024: gminne gospodarstwo rolne, wodociągi, służby techniczne i stowarzyszenia zaznaczyły na niej przepływy, potrzeby i powiązania." },
      { t: "Dzielić się", d: "Dopracować wspólny scenariusz współdzielenia Vélis, wybrać lub dostosować pojazd, wymyślić wspólny sposób działania i położyć podwaliny pod wspólne zarządzanie." },
    ],
    closing:
      "Makiety, karty praktyczne i plany użytkowania z warsztatu trafiły potem na wystawę.",
    galerie: {
      brouillard: "Pierwsze jazdy pojazdami Vélis we mgle",
      chemin: "Przejażdżka między cyprysami",
      groupe: "Wspólne testy pojazdów",
      table: "Warsztat we wrześniu 2024, wokół stołu",
      mains: "Zaznaczanie przepływów i potrzeb na mapie wrażliwej",
      soiree: "Wieczorne spotkanie podczas rezydencji",
      atelier: "Uczestnicy pochyleni nad dużą mapą podczas warsztatu",
      soir: "Pojazdy Vélis o zmierzchu, wśród zarośli",
      vert: "Véli na żwirowej ścieżce między drzewami",
      debout: "Wokół dużej mapy podczas warsztatu",
    },
    carnet: [
      "Rozstawiliśmy mikrofony, kamery, pojazdy Vélis… i słuchaliśmy.",
      "Rezydencja, 22–30 czerwca 2024. Każdy miał kawałek układanki: samorządowcy, ogrodnicy, mechanicy, dzieci, artyści.",
      "Mobilność ożywa, gdy tylko połączy się ją z miejscem. Z wodą, glebą, zdrowiem, krajobrazem.",
    ],
    atelierAlt: "Uczestnicy pochyleni nad dużą mapą podczas warsztatu",
    carteAlt: "Mapa wrażliwa na stole warsztatowym, z naniesionymi znacznikami",
  },

  dessinAlt: "Terytorium narysowane ręcznie, z lotu ptaka",

  exposition: {
    label: "Wystawa",
    heading:
      "Przestrzeń poświęcona doświadczaniu lekkiej mobilności.",
    body:
      "Objazdowy moduł ustawiany w przestrzeni publicznej, by w nowy sposób poznać pojazdy pośrednie. Wchodzi się do środka, słucha sfilmowanych mieszkańców, czyta mapy terytorium, a potem testuje pojazdy Vélis zaparkowane obok. Po Festival du Livre w Mouans-Sartoux pojechał do Arles i Paryża.",
    lieuxLabel: "Gdzie pokazano wystawę",
    lieux: [
      { quand: "4 – 6 października 2024", ou: "Festival du Livre, Mouans-Sartoux" },
      { quand: "23 – 27 sierpnia 2025", ou: "Agir pour le vivant, Arles" },
      { quand: "8 – 9 października 2025", ou: "Produrable, Palais des Congrès, Paryż" },
    ],
    contenuLabel: "Zawartość",
    contenu: [
      "Zapętlone filmy i fragmenty wywiadów",
      "Mapy wrażliwe łączące mobilność, krajobrazy i bioróżnorodność",
      "Przedmioty, makiety i karty z warsztatu",
      "Taras powitalny i podjazd, a obok pojazdy Vélis",
    ],
    objectifsLabel: "Cele",
    objectifs: [
      "Oddać mieszkańcom to, czym się podzielili, w namacalnej formie",
      "Przyciągnąć przechodniów i zacząć rozmowę",
      "Pomóc zrozumieć potrzeby, ograniczenia i potencjał miejsca",
      "Podróżować: moduł można ponownie ustawić, po dostosowaniu, w innych miejscach",
    ],
    galerie: {
      place: "Kontener na placu podczas Festival du Livre 2024",
      interieur: "Wewnątrz: fotografie z terenu i stół z mapą",
      ecran: "Pod pergolą wywiady wyświetlane w pętli",
      visiteurs: "Zwiedzający przy wejściu na wystawę",
      carte: "Makieta-mapa terytorium na stole",
      dialogue: "Rozmowa przed planszami, pod pergolą",
    },
    moduleAlt: "Wizualizacja modułu: przebudowany kontener morski, drewniana pergola i taras powitalny",
    panneauxAlt: "Plansze wystawy za ekranem z falistego poliwęglanu",
    photosAlt: "Fotografie z terenu zawieszone na module",
    routeAlt: "Kręta droga z lotu ptaka, obok narysowanej trasy",
  },

  livre: {
    label: "Książka",
    heading:
      "Dziennik pokładowy w czternastu rozdziałach, od wyzwania po wolność.",
    body:
      "Każdy rozdział wychodzi od wywiadu: z inżynierem ADEME, samorządowcami i pracownikami Mouans-Sartoux, producentami i serwisantami pojazdów, opiekunką, głównym ogrodnikiem, mieszkanką. W środku metodologia TINYLABS, na końcu podsumowanie o mieście jako żywym organizmie.",
    sousTitre: "Dokumentacja eksperymentu: wspólne Véli odpowiadające na realne potrzeby gminy.",
    pourquoi: "W Mouans-Sartoux i okolicach Grasse towarzyszyliśmy mieszkańcom, służbom publicznym i stowarzyszeniom w ich codziennych trasach, testowaliśmy z nimi pojazdy pośrednie między rowerem a samochodem, a potem stworzyliśmy plan ich wspólnego użytkowania. Książka zbiera te przypadki: co działa, co przeszkadza i metodę, by powtórzyć to gdzie indziej.",
    casLabel: "Udokumentowane przypadki",
    casIntro: "Każdy rozdział wychodzi od realnej potrzeby, miejsca i pojazdu, który może na nią odpowiedzieć.",
    cas: [
      { besoin: "Dowóz warzyw do stołówek", d: "Gminne gospodarstwo uprawia 25 ton warzyw rocznie dla szkół. Dowozić je każdego ranka bez furgonetki i łączyć kursy.", lieu: "MEAD, Mouans-Sartoux", vehicule: "Przyczepa K-Ryole", chap: 4 },
      { besoin: "Służba publiczna, która mało jeździ", d: "Pracownicy spółki wodnej przejeżdżają około 2000 km rocznie między obiektami. Po co kupować elektryczną furgonetkę na tak mało?", lieu: "Oczyszczalnia ścieków, Mouans-Sartoux", vehicule: "Midipile", chap: 5 },
      { besoin: "Codzienne trasy rodziny", d: "Laura chodzi pieszo do szkoły i na zakupy, ale na zajęcia dzieci bierze samochód. Przetestowała Véli z dwójką dzieci na pokładzie.", lieu: "Targ w Mouans-Sartoux", vehicule: "QBX Sorean", chap: 8 },
      { besoin: "Przewóz dzieci poza miastem", d: "Stabilny, zadaszony czterokołowy rower dla dorosłego i kilkorga dzieci: pierwszy krok dla rodzin, które jeszcze nie odważyły się na rower.", lieu: "Gourdon", vehicule: "BOB, Sanka Cycle", chap: 1 },
      { besoin: "Praca w ogrodzie na zboczu", d: "Nawozy, narzędzia, tarasy na zboczu: mały pojazd elektryczny zmienił pracę ogrodników, bez hałasu i spalin.", lieu: "Ogrody Międzynarodowego Muzeum Perfum, Grasse", vehicule: "Goupil", chap: 11 },
      { besoin: "Dojazd do ogrodów społecznych", d: "Działki powierzone mieszkańcom, dostępne tylko pieszo lub rowerem. Przewożenie narzędzi, ziemi i plonów bez asfaltowania ścieżki.", lieu: "Ogrody społeczne, Mouans-Sartoux", vehicule: "Vheliotech", chap: 9 },
      { besoin: "Dojazd do pracy w szpitalu", d: "70% personelu mieszka w promieniu 10 km. Rowery, warsztat naprawczy, wspólne dojazdy: około pięćdziesięciu pracowników dojeżdża rowerem, wcześniej nikt.", lieu: "Szpital w Grasse", vehicule: "Karbikes", chap: 10 },
      { besoin: "Wypróbować przed wyborem", d: "Wypożyczanie rowerów elektrycznych, cargo i przyczep do testów na co dzień. Tam, gdzie wzniesienia lub odległości przerastają rower, wkracza Véli.", lieu: "Stowarzyszenie Choisir le Vélo", vehicule: "Le Formidable", chap: 7 },
    ],
    partageLabel: "Jeden pojazd, cztery zastosowania",
    partageTexte: "We wrześniu 2024 gminne gospodarstwo, spółka wodna, służby techniczne i lokalne stowarzyszenia spotkały się wokół jednego pytania: jak dzielić się Véli? Efektem jest typowy tydzień jednego pojazdu, rolniczego Véli.",
    partage: [
      { qui: "Gminne gospodarstwo", quand: "Od poniedziałku do piątku, 8:00 – 9:30: dowóz warzyw do 3 stołówek i 1 żłobka." },
      { qui: "Kurniki i ogrody społeczne", quand: "Środa 10:30, wtorek, czwartek i sobota 14:00 – 16:00: karmienie kur." },
      { qui: "Ule społeczne", quand: "Pół dnia w weekendy wiosną i jesienią; przewóz uli w góry w czerwcu i we wrześniu." },
      { qui: "Mieszkańcy, z Choisir le Vélo", quand: "Wszystkie wolne terminy." },
    ],
    partageAlt: "Tabela typowego tygodnia rolniczego Véli dzielonego między gminne gospodarstwo, kurniki i ogrody społeczne, ule społeczne i mieszkańców",
    etapesLabel: "Jak przebiegała praca",
    etapes: [
      { quand: "22 – 30 czerwca 2024", quoi: "Rezydencja: testy Véli w terenie, mapowanie tematyczne z mieszkańcami i służbami, sześć transmisji na żywo ze społecznością Extrême Défi." },
      { quand: "Wrzesień 2024", quoi: "Warsztat: wspólny plan użytkowania, wybór pojazdu, podstawy wspólnego zarządzania." },
      { quand: "Październik 2024", quoi: "Wystawa na Festival du Livre w Mouans-Sartoux, z Véli do wypróbowania." },
      { quand: "Maj 2025", quoi: "Książka: czternaście przypadków, metoda i narzędzia." },
    ],
    faits: "212 stron · 14 rozdziałów · TINYLABS éditions, maj 2025 · po francusku",
    feuilleter: "Przejrzyj fragment",
    commanderBouton: "Zamów książkę",
    chapitresLabel: "Czternaście rozdziałów",
    chapitres: [
      { t: "Wyzwanie", d: "Gabriel Plassat, inżynier ADEME" },
      { t: "Duch", d: "Benoît Tholence, współzałożyciel Sanka Cycle" },
      { t: "Więź", d: "Jean Dard, projektant, projekt Supercycle 2" },
      { t: "Bioróżnorodność", d: "Marc Faure, radny gminy" },
      { t: "Gleba i użytkowanie", d: "Gilles Pérole, zastępca mera, i Léa Sturton, MEAD" },
      { t: "Woda", d: "Romain Bailly, SEM Eaux de Mouans" },
      { t: "Serwis", d: "Victor Landes i Olivier Guido, EV Garage Riviera" },
      { t: "Wybór", d: "Arthur Garnier, stowarzyszenie Choisir le Vélo" },
      { t: "Granica", d: "Laura, mieszkanka Mouans-Sartoux" },
      { t: "Obywatelskość", d: "Sylvain Bourdon, gminne grunty rolne" },
      { t: "Zdrowie", d: "Nicole Spielmann, szpital w Grasse" },
      { t: "Tożsamość", d: "Christophe Mège, główny ogrodnik, Międzynarodowe Muzeum Perfum" },
      { t: "Przyjemność", d: "Olivier Cornet, założyciel Acticycle" },
      { t: "Wolność", d: "Dokufikcja z Garance Tritschler" },
    ],
    couvertureAlt: "Okładka książki „La Voie”, ciemnozielona z białymi piktogramami",
    pictogrammesAlt: "Czternaście piktogramów rozdziałów, rysowanych kreską",
    herbesAlt: "Wysokie trawy i dzikie kwiaty w pełnym świetle",
    extrait: "Przejrzyj fragment",
    extraitNote: "48 z 212 stron",
    reperesLabel: "Przejdź do",
    reperes: { prologue: "Prolog", sommaire: "Spis treści", methode: "Metoda", conclusion: "Zakończenie" },
    commander: "Pełna książka ma 212 stron i zawiera wszystkie czternaście wywiadów. Aby ją zamówić, napiszcie do nas:",
    feuilleteur: {
      precedente: "Poprzednia strona",
      suivante: "Następna strona",
      aide: "Kliknij róg lub przeciągnij stronę, aby ją przewrócić. Aby przeczytać tekst, otwórz książkę na pełnym ekranie.",
      pageAlt: "Fragment książki La Voie, strona {n}",
      agrandir: "Czytaj na pełnym ekranie",
      fermer: "Zamknij",
      zoom: "Kliknij lub dotknij strony, aby ją powiększyć.",
    },
  },

  citation: {
    texte: "To, co zasialiśmy w Mouans-Sartoux, może teraz krążyć i kiełkować gdzie indziej.",
    source: "Książka La Voie",
  },

  credits: {
    label: "Partnerzy i kontakt",
    projet: "Projekt",
    soutien: "Przy wsparciu",
    films: "Filmy",
    contact: "Kontakt",
  },

  cta: "Aby pokazać wystawę, zorganizować rezydencję lub zamówić książkę, napiszcie do nas:",

  openingAlt: "Kręta górska droga z tytułem La Voie",
};

export const projectLaVoie: Record<string, LaVoieContent> = { en, fr, pl };
