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
    { k: "Période", v: "Juin 2024 – mai 2025" },
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
      { t: "Exposition", d: "Un container réaménagé, au Festival du Livre de Mouans-Sartoux." },
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
      "Un container maritime réaménagé, installé sur une place pendant le Festival du Livre.",
    body:
      "On y retrouvait les entretiens filmés, les cartes et les objets de l'atelier, en douze chapitres. Les Vélis étaient garés à côté : on pouvait les voir et les essayer.",
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
      place: "Le container installé sur la place, pendant le Festival du Livre",
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
      "Un journal de bord en quatorze chapitres, de « Le défi » à « La liberté ».",
    body:
      "Chaque chapitre part d'un entretien : un ingénieur de l'ADEME, des élus et agents de Mouans-Sartoux, des fabricants et réparateurs de véhicules, une soignante, un chef-jardinier, une habitante. Au milieu, la méthodologie de TINYLABS ; à la fin, une conclusion sur la ville pensée comme un organisme vivant.",
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
    extraitNote: "32 pages sur 212",
    feuilleteur: {
      precedente: "Page précédente",
      suivante: "Page suivante",
      aide: "Cliquez sur un coin ou faites glisser une page pour la tourner. Les flèches du clavier fonctionnent aussi.",
      pageAlt: "Extrait du livre La Voie, page {n}",
    },
  },

  citation: {
    texte: "« Ce qui a été semé à Mouans-Sartoux peut maintenant circuler, germer ailleurs. »",
    source: "Le livre La Voie",
  },

  credits: {
    label: "Partenaires et contact",
    projet: "Un projet de",
    soutien: "Avec le soutien de",
    equipe: "Avec",
    equipeNoms: "Louise Viollet Deval (édition et graphisme), Adrian Howell (caméra et montage), Les Mythos (fiction)",
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
    { k: "Period", v: "June 2024 – May 2025" },
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
      { t: "Exhibition", d: "A converted container at the Festival du Livre, Mouans-Sartoux." },
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
      "A converted shipping container, set up on a square during the Festival du Livre.",
    body:
      "Inside were the filmed interviews, the maps and the objects from the workshop, in twelve chapters. The Vélis were parked next to it, so people could see them and try them.",
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
      place: "The container set up on the square during the Festival du Livre",
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
      "A logbook in fourteen chapters, from “The challenge” to “Freedom”.",
    body:
      "Each chapter starts from an interview: an ADEME engineer, elected officials and staff of Mouans-Sartoux, vehicle makers and repairers, a carer, a head gardener, a resident. In the middle, the TINYLABS methodology; at the end, a conclusion on the city as a living organism.",
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
    extraitNote: "32 of 212 pages",
    feuilleteur: {
      precedente: "Previous page",
      suivante: "Next page",
      aide: "Click a corner or drag a page to turn it. The arrow keys work too.",
      pageAlt: "Extract from the book La Voie, page {n}",
    },
  },

  citation: {
    texte: "“What was sown in Mouans-Sartoux can now travel and take root elsewhere.”",
    source: "The book La Voie",
  },

  credits: {
    label: "Partners and contact",
    projet: "A project by",
    soutien: "Supported by",
    equipe: "With",
    equipeNoms: "Louise Viollet Deval (editing and design), Adrian Howell (camera and editing), Les Mythos (fiction)",
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
    { k: "Okres", v: "Czerwiec 2024 – maj 2025" },
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
      { t: "Wystawa", d: "Przebudowany kontener na Festival du Livre w Mouans-Sartoux." },
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
      "Przebudowany kontener morski, ustawiony na placu podczas Festival du Livre.",
    body:
      "W środku były filmowane wywiady, mapy i przedmioty z warsztatu, w dwunastu rozdziałach. Obok stały pojazdy Vélis, które można było obejrzeć i wypróbować.",
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
      place: "Kontener na placu podczas Festival du Livre",
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
      "Dziennik pokładowy w czternastu rozdziałach, od „Wyzwania” po „Wolność”.",
    body:
      "Każdy rozdział wychodzi od wywiadu: z inżynierem ADEME, samorządowcami i pracownikami Mouans-Sartoux, producentami i serwisantami pojazdów, opiekunką, głównym ogrodnikiem, mieszkanką. W środku metodologia TINYLABS, na końcu podsumowanie o mieście jako żywym organizmie.",
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
    extraitNote: "32 z 212 stron",
    feuilleteur: {
      precedente: "Poprzednia strona",
      suivante: "Następna strona",
      aide: "Kliknij róg lub przeciągnij stronę, aby ją przewrócić. Działają też strzałki na klawiaturze.",
      pageAlt: "Fragment książki La Voie, strona {n}",
    },
  },

  citation: {
    texte: "„To, co zasialiśmy w Mouans-Sartoux, może teraz krążyć i kiełkować gdzie indziej.”",
    source: "Książka La Voie",
  },

  credits: {
    label: "Partnerzy i kontakt",
    projet: "Projekt",
    soutien: "Przy wsparciu",
    equipe: "Współtwórcy",
    equipeNoms: "Louise Viollet Deval (redakcja i projekt graficzny), Adrian Howell (zdjęcia i montaż), Les Mythos (fikcja)",
    films: "Filmy",
    contact: "Kontakt",
  },

  cta: "Aby pokazać wystawę, zorganizować rezydencję lub zamówić książkę, napiszcie do nas:",

  openingAlt: "Kręta górska droga z tytułem La Voie",
};

export const projectLaVoie: Record<string, LaVoieContent> = { en, fr, pl };
