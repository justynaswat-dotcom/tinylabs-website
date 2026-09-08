/* ───────────────────────────────────────────────────────────────────────────
   MARSEILLE 2050 — contenu de la fiche, par langue

   Séparé de translations.ts, qui porte l'habillage du site (navigation, hero,
   pied de page). Le contenu d'un projet a un cycle de vie propre : il grossit,
   il se corrige, et il n'a pas à alourdir le fichier que toutes les pages
   chargent.

   ⚠️ Le polonais reprend l'anglais. Écrire ce volume de texte spécialisé en
   polonais demanderait une relecture native que je ne peux pas garantir ;
   servir de l'anglais est plus honnête qu'une traduction approximative.
   ─────────────────────────────────────────────────────────────────────────── */

export type ProjectContent = typeof fr;

const fr = {
  back: "Travaux",
  allWork: "Tous les travaux",
  title: "Ici, ça chauffe",
  subtitle: "Marseille 2050",

  meta: [
    { k: "Client", v: "Ville de Marseille · Mission Marseille 2030" },
    { k: "Lieu", v: "Marseille" },
    { k: "Année", v: "2025" },
    { k: "Rôle", v: "Conception et scénographie" },
  ],

  intro: {
    label: "Le projet",
    lead:
      "Marseille 2050 est une exposition itinérante, immersive et pédagogique qui rend tangibles les transformations climatiques de la ville. À travers cinq échelles, de la maison au grand territoire, elle invite chacun·e à comprendre, ressentir et imaginer ensemble un Marseille habitable, désirable et résilient face au climat de demain.",
    body: [
      "L'exposition s'adresse à toutes et tous : familles, écoles, curieux·ses, habitant·es. Elle voyage dans la ville, s'installe sur les places, dans les cours d'école et sur des sites emblématiques, et déploie un parcours fait de panneaux, de maquettes et d'objets manipulables.",
      "Marseille y apparaît comme un point chaud du climat méditerranéen : canicules plus longues, eau plus rare, mer qui monte, biodiversité fragilisée, incendies plus fréquents. D'ici 2050, le climat de la ville pourrait ressembler à celui de Séville aujourd'hui.",
      "Plutôt que d'alarmer, l'exposition donne à voir les transitions déjà à l'œuvre : végétaliser les rues, ouvrir les sols, réinventer la mobilité, manger local, prendre soin du vivant marin et terrestre. Elle célèbre l'énergie collective marseillaise pour donner envie d'agir, ensemble.",
    ],
  },

  plan: {
    caption:
      "Quatre îlots et une agora, autour du véhicule qui transporte l'exposition.",
  },

  structure: {
    label: "Principe constructif",
    lead:
      "Un seul chevalet, décliné en quatre configurations : panneau seul, table d'atelier, îlot double avec ses bancs, et module d'ombrage. Bois, toile et contreplaqué, assemblés pour être démontés, transportés et remontés en quelques heures.",
    alt:
      "Axonométries des quatre configurations de chevalet de l'exposition",
  },

  method: {
    label: "Méthode",
    heading:
      "Transmettre sans leçon, à hauteur d'yeux, avec humour, clarté et une envie partagée d'agir, chacun·e à son échelle.",
    items: [
      { t: "Lecture sensible du territoire", d: "Écouter, observer, marcher, comprendre Marseille avant de la transformer." },
      { t: "Approche systémique", d: "Relier climat, eau, énergie, biodiversité, mobilité, alimentation, santé et culture comme les fils d'une même trame." },
      { t: "Co-construction", d: "Travailler avec les scientifiques, les associations, les habitant·es et les acteurs publics du territoire marseillais." },
      { t: "Prototypage itératif", d: "Tester les contenus, maquettes et dispositifs sur place, ajuster, transmettre sans moraliser." },
    ],
  },

  exhibition: {
    label: "L'exposition",
    heading:
      "Cinq escales, de Soi au Grand Dehors, où chaque panneau pose une question simple pour éveiller la pensée et l'envie d'agir.",
    route: "Soi · la Maison · la Rue · la Ville · le Grand Dehors",
    routeNote: "quatre d'entre elles portent une interaction.",
    items: [
      {
        t: "La Maison",
        vue: "La maquette du trois-fenêtres, pignon au goéland et façade ouverte",
        d: "Une maquette du fameux « trois-fenêtres » marseillais, l'immeuble qui fait l'identité de la ville. Façade après façade, on l'adapte au climat de 2050 : volets et persiennes, enduit à la chaux clair, isolation biosourcée, toiture-terrasse végétalisée, cour intérieure fraîche, récupération d'eau et soleil sur les toits.",
      },
      {
        t: "La Rue",
        vue: "La maquette de la rue, ses commerces et ses passants",
        d: "« À MARS-eille, on sait jouer collectif, comme sur un terrain de foot. » La rue devient terrain de jeu et de transition : trottoirs qui boivent la pluie, arbres qui montent vers le ciel, voitures ralenties, marchés ouverts, bancs partagés, murs qui parlent. Une maquette à manipuler pour comparer la rue d'hier et celle de demain.",
      },
      {
        t: "La Ville",
        vue: "Le plateau de jeu et ses modules, vu de dessus",
        d: "Un jeu pour les moins de 10 ans, pour comprendre en jouant comment les choix d'aménagement transforment le cadre de vie. Un plateau, des modules à poser, huit missions à mener avec un·e médiateur·ice : trente minutes à une heure d'urbanisme joyeux, à hauteur d'enfant.",
      },
      {
        t: "La Posidonie",
        vue: "L'herbier en volume et ses poissons, porté par un chevalet",
        d: "Sous la mer, une plante endémique de la Méditerranée tisse de vastes prairies : la posidonie, joyau du littoral. Une maquette en bois ouvre une fenêtre sous l'eau, où l'on découvre l'herbier, ses habitants, ses racines millénaires et son rôle climatique pour Marseille et les calanques.",
      },
    ],
  },

  catalogue: {
    label: "Scénographie et catalogue",
    heading:
      "Un parcours modulaire, mobile et frugal : quatre îlots et une agora, autour d'un véhicule-totem qui transporte l'exposition de quartier en quartier.",
    items: [
      { t: "Panneaux pédagogiques", d: "Format 90 × 180 cm assemblé en triptyque, imprimé sur supports recyclables et fixé sur des portants modulaires en bois et acier. Trois à quatre panneaux par îlot selon les thèmes." },
      { t: "Tablettes d'ombrage", d: "Tablettes textiles de 60 × 180 cm fixées au-dessus des panneaux. Elles abritent les visiteurs du soleil, animent les volumes et portent la signalétique du parcours." },
      { t: "Maquettes manipulables", d: "Maison résiliente, rue désimperméabilisée, ville aux flux, territoire vivant. Bois clair, matériaux biosourcés et pièces aimantées, pour comprendre par le geste et à plusieurs." },
      { t: "Mobilier scénographique", d: "Portants démontables, assises basses, tables d'atelier, et caisses de transport qui deviennent socles. Une gamme frugale pensée pour le montage rapide et l'usage intensif en extérieur." },
      { t: "Identité graphique", d: "Titres manuscrits, pictogrammes filaires, illustrations dessinées à la main, palette empruntée aux terres et aux mers. Une signalétique chaleureuse qui dialogue avec la ville." },
      { t: "Outils pédagogiques", d: "Carnet de visite, cartels « Et moi ? », fiches gestes et livret pour les enseignant·es. Des supports à emporter pour prolonger l'expérience en classe ou en famille." },
    ],
  },

  // Diptyque : la structure nue, puis les pièces à plat.
  duo: [
    "Un chevalet vu de face, son assemblage de bois apparent",
    "Des poissons découpés dans le contreplaqué, posés à plat sur la tablette",
  ],

  gallery: {
    alts: [
      "Un îlot entier et ses panneaux, isolé dans la halle",
      "Le panneau « Ici, c'est Marseille » et son goéland au trait",
      "Le littoral marseillais imprimé en bleu sur le contreplaqué",
      "Un chevalet nu, ses bancs et sa tablette, sans panneau",
      "La posidonie dessinée au trait sur le contreplaqué, légendée",
      "L'intérieur de la maquette de la maison, la lumière aux fenêtres",
    ],
  },

  award: {
    label: "Distinction",
    lead: "Lauréat francilien de l'appel à projets Bois Français & Design, porté par le réseau Fibois France avec Fibois Île-de-France.",
    leadEm: "Bois Français & Design",
    body: "Le dispositif est exposé du 10 au 19 septembre 2026 dans le cadre de la Paris Design Week, à la Bibliothèque Historique de la Ville de Paris, 24 rue Pavée, 75004 Paris.",
    dates: "du 10 au 19 septembre 2026",
    logoAlt: "Paris Design Week, 10 au 19 septembre 2026, Maison & Objet",
  },

  credits: {
    label: "Crédits",
    team: "Équipe TINYLABS",
    engineering: "BET structure",
    vehicle: "Véhicule",
    printing: "Impression sur bois",
    contact: "Contact",
  },

  openingAlt: "Les îlots de l'exposition et leurs panneaux, montés dans la halle",
  planAlt: "Vue d'implantation : quatre îlots, l'agora et le véhicule, occupés par le public",
};

const en: ProjectContent = {
  back: "Work",
  allWork: "All work",
  title: "It's getting hot in here",
  subtitle: "Marseille 2050",

  meta: [
    { k: "Client", v: "City of Marseille · Mission Marseille 2030" },
    { k: "Place", v: "Marseille" },
    { k: "Year", v: "2025" },
    { k: "Role", v: "Design and scenography" },
  ],

  intro: {
    label: "The project",
    lead:
      "Marseille 2050 is a travelling, immersive and educational exhibition that makes the city's climate shift tangible. Across five scales, from the home to the wider territory, it invites everyone to understand, feel and imagine together a Marseille that is liveable, desirable and resilient in the climate to come.",
    body: [
      "The exhibition is built for everyone: families, schools, the curious, residents. It travels through the city, settling on squares, in schoolyards and on landmark sites, unfolding a route of panels, models and objects to handle.",
      "Marseille appears here as a Mediterranean climate hotspot: longer heatwaves, scarcer water, rising sea, weakened biodiversity, more frequent fires. By 2050 the city's climate could resemble that of Seville today.",
      "Rather than alarm, the exhibition shows the transitions already under way: greening streets, opening up soils, rethinking mobility, eating local, caring for marine and terrestrial life. It celebrates Marseille's collective energy to make people want to act, together.",
    ],
  },

  plan: {
    caption:
      "Four islands and an agora, around the vehicle that carries the exhibition.",
  },

  structure: {
    label: "Structural principle",
    lead:
      "A single trestle, in four configurations: panel alone, workshop table, double island with benches, and shading module. Timber, canvas and plywood, assembled to be taken apart, transported and rebuilt within hours.",
    alt: "Axonometric drawings of the exhibition's four trestle configurations",
  },

  method: {
    label: "Method",
    heading:
      "Passing on without lecturing, at eye level, with humour, clarity and a shared urge to act, each at their own scale.",
    items: [
      { t: "Reading the territory closely", d: "Listening, observing, walking, understanding Marseille before transforming it." },
      { t: "Systemic approach", d: "Connecting climate, water, energy, biodiversity, mobility, food, health and culture as threads of one weave." },
      { t: "Co-construction", d: "Working with scientists, associations, residents and public bodies across Marseille." },
      { t: "Iterative prototyping", d: "Testing content, models and devices on site, adjusting, passing on without moralising." },
    ],
  },

  exhibition: {
    label: "The exhibition",
    heading:
      "Five stops, from the Self to the Great Outdoors, where each panel asks one simple question to open thought and the urge to act.",
    route: "the Self · the Home · the Street · the City · the Great Outdoors",
    routeNote: "four of them carry an interaction.",
    items: [
      {
        t: "The Home",
        vue: "The trois-fenêtres model, gull drawn on the gable, façade open",
        d: "A model of the famous Marseille trois-fenêtres, the building that gives the city its face. Façade by façade, it is adapted to the climate of 2050: shutters and louvres, pale lime render, biosourced insulation, planted roof terrace, cool inner courtyard, rainwater harvesting and sun on the roofs.",
      },
      {
        t: "The Street",
        vue: "The street model, its shopfronts and passers-by",
        d: "“In MARS-eille we know how to play as a team, like on a football pitch.” The street becomes a field of play and of transition: pavements that drink the rain, trees reaching upward, cars slowed, open markets, shared benches, walls that speak. A model to handle, comparing yesterday's street with tomorrow's.",
      },
      {
        t: "The City",
        vue: "The game board and its modules, seen from above",
        d: "A game for under-tens, to grasp through play how planning choices reshape daily life. A board, modules to place, eight missions run with a facilitator: thirty minutes to an hour of joyful urbanism, at a child's height.",
      },
      {
        t: "The Posidonia",
        vue: "The seagrass meadow in relief and its fish, carried on a trestle",
        d: "Beneath the sea, a plant endemic to the Mediterranean weaves vast meadows: posidonia, the jewel of the coast. A timber model opens a window underwater, revealing the meadow, its inhabitants, its thousand-year-old roots and its climate role for Marseille and the calanques.",
      },
    ],
  },

  catalogue: {
    label: "Scenography and catalogue",
    heading:
      "A modular, mobile and frugal route: four islands and an agora, around a totem vehicle that carries the exhibition from district to district.",
    items: [
      { t: "Educational panels", d: "90 × 180 cm assembled as a triptych, printed on recyclable supports and fixed to modular timber-and-steel frames. Three to four panels per island depending on the themes." },
      { t: "Shading canopies", d: "Textile canopies of 60 × 180 cm fixed above the panels. They shelter visitors from the sun, animate the volumes and carry the route's signage." },
      { t: "Models to handle", d: "Resilient house, unsealed street, city of flows, living territory. Pale timber, biosourced materials and magnetic parts, to understand through gesture and together." },
      { t: "Scenographic furniture", d: "Demountable frames, low seats, workshop tables, and transport crates that become plinths. A frugal range designed for fast assembly and heavy outdoor use." },
      { t: "Graphic identity", d: "Handwritten titles, line pictograms, hand-drawn illustrations, a palette borrowed from earth and sea. Warm signage in dialogue with the city." },
      { t: "Teaching tools", d: "Visit booklet, “What about me?” labels, action sheets and a teachers' guide. Take-away material to extend the experience in class or at home." },
    ],
  },

  duo: [
    "A trestle seen head-on, its timber joints exposed",
    "Fish cut from plywood, laid flat on the shelf",
  ],

  gallery: {
    alts: [
      "A whole island and its panels, standing alone in the hall",
      "The “Ici, c’est Marseille” panel and its line-drawn gull",
      "The Marseille coastline printed in blue on plywood",
      "A bare trestle, its benches and shelf, with no panel",
      "Posidonia drawn in outline on plywood, with labels",
      "Inside the house model, light at the windows",
    ],
  },

  award: {
    label: "Award",
    lead: "Île-de-France winner of the Bois Français & Design call for projects, run by the Fibois France network with Fibois Île-de-France.",
    leadEm: "Bois Français & Design",
    body: "The installation is on show from 10 to 19 September 2026 as part of Paris Design Week, at the Bibliothèque Historique de la Ville de Paris, 24 rue Pavée, 75004 Paris.",
    dates: "from 10 to 19 September 2026",
    logoAlt: "Paris Design Week, 10 to 19 September 2026, Maison & Objet",
  },

  credits: {
    label: "Credits",
    team: "TINYLABS team",
    engineering: "Structural engineering",
    vehicle: "Vehicle",
    printing: "Printing on wood",
    contact: "Contact",
  },

  openingAlt: "The exhibition islands and their panels, assembled in the hall",
  planAlt: "Site view: four islands, the agora and the vehicle, occupied by the public",
};

export const projectMarseille: Record<string, ProjectContent> = {
  en,
  fr,
  pl: en,   // voir l'avertissement en tête de fichier
};
