/* ───────────────────────────────────────────────────────────────────────────
   TABOURET VIVANT — contenu de la fiche, par langue

   Même organisation que project-marseille.ts : le texte vit ici, le composant
   ne porte que la structure.

   ⚠️ Deux zones à ne pas réécrire à la légère.

   1. `funding` est une citation. La formule et les numéros de subvention ont
      été fournis tels quels par le financeur ; ils ne se traduisent pas et ne
      s'abrègent pas. Ils restent en anglais dans les trois langues.
   2. Le polonais est une traduction que j'ai écrite, pas une relecture
      native — comme pour la fiche Marseille. Les termes techniques
      (grzybnia, podłoże, wiązania) gagneraient à être vérifiés.
   ─────────────────────────────────────────────────────────────────────────── */

export type StoolContent = typeof fr;

const fr = {
  allWork: "Tous les travaux",
  title: "Tabouret vivant",
  subtitle: "(l'atelier de l'Epinay)",
  note: "Objet de recherche, en vue de l'exposition finale à Copenhague en 2028",

  meta: [
    { k: "Atelier", v: "L'atelier de l'Epinay · Adrien Rigobello" },
    { k: "Lieu", v: "Vallée de l'Epinay" },
    { k: "Années", v: "2026 – 2028" },
    { k: "Recherche", v: "Relational Tectonics" },
  ],

  intro: {
    label: "Le projet",
    lead:
      "Un tabouret dont l'assise n'est pas fabriquée mais cultivée. Le mycélium — la partie souterraine du champignon, un feutrage de filaments — colonise un substrat de bois et le lie en un matériau ferme et léger. Les pieds sont trois branches coupées dans le bois voisin. Rien n'a été apporté de loin.",
    body: [
      "L'objet est né à l'atelier de l'Epinay, en montagne, en août 2026, sous la conduite d'Adrien Rigobello. L'atelier est un des terrains du projet de recherche Relational Tectonics, qui explore ce que devient la construction quand elle travaille avec le vivant plutôt que contre lui.",
      "Biorégional est ici un mot précis, pas une intention : le bois vient de la parcelle, la laine du troupeau qui la broute, le mycélium se nourrit des copeaux du bois coupé. La vallée fournit la matière, l'énergie et le temps de prise. Ce qui manque à la vallée ne fait pas partie de l'objet.",
      "Cette pièce est une étape. Elle prépare l'exposition finale de la recherche, à Copenhague en 2028, où elle sera montrée avec les autres épreuves du programme.",
    ],
  },

  site: {
    label: "Le lieu",
    lead:
      "Une vallée, une ferme, des toits de lauzes posées à recouvrement. La culture constructive du lieu tient déjà de ce que le projet cherche : des matériaux pris à portée, assemblés sans colle, remplaçables pièce à pièce.",
    caption: "La vallée de l'Epinay, au fond du pré. Les lauzes du toit viennent du même versant.",
  },

  liaison: {
    label: "Assemblages",
    heading:
      "Des ligatures d'éclisse, essayées une à une avant d'être portées sur l'ossature.",
    body:
      "Les croisements ont été étudiés au mur, en série, sur des branches de diamètres différents. Une ligature bien serrée tient par friction et se défait sans rien casser : l'objet peut être démonté, ses pieds replantés, son assise rendue au sol.",
  },

  matiere: {
    label: "La matière",
    cultureAlt: "Le tabouret monté dans le pré, l'assise encore sous film pendant la prise",
    heading:
      "Le mycélium n'est pas un liant que l'on mélange : c'est un organisme que l'on nourrit, et qui prend la forme du moule où on l'installe.",
    items: [
      { t: "Le substrat", d: "Copeaux et sciure du bois coupé sur place, humidifiés et ensemencés. La matière première du champignon est le déchet de la coupe." },
      { t: "La colonisation", d: "Quelques jours de croissance à l'abri, le temps que le feutrage blanc envahisse le substrat et le lie de part en part." },
      { t: "L'arrêt", d: "Le séchage stoppe la croissance. La pièce devient stable, sèche, légère, et ne repartira pas d'elle-même." },
      { t: "Le retour", d: "En fin de vie, l'assise se composte. Elle n'aura été empruntée au sol que le temps d'un usage." },
    ],
  },

  fabrication: {
    label: "Fabrication",
    heading: "Quatre gestes, un pré.",
    items: [
      { t: "Couper", d: "Trois branches choisies pour leur fourche naturelle, taillées à la longueur d'assise." },
      { t: "Lier", d: "Les ligatures d'éclisse tiennent l'ossature, qui sert ensuite de support au moule." },
      { t: "Cultiver", d: "Le substrat ensemencé est tassé dans le moule, posé sur l'ossature, et laissé prendre." },
      { t: "Planter", d: "Les pieds sont mis en terre : le tabouret se cale sur le pré comme un piquet, sans semelle ni scellement." },
    ],
  },

  galerie: {
    label: "L'atelier",
    alts: [
      "La toison de laine posée sur l'ossature de branches, dans le pré",
      "Le carnet de croquis et les branches choisies, posés côte à côte",
      "Une ligature d'éclisse serrée sur le croisement de deux branches",
      "Le substrat ensemencé, étalé avant la mise en moule",
      "L'établi monté dans le pré, le substrat étalé sur la bâche",
      "Les pieds du tabouret mis en terre à la bêche",
    ],
  },

  final: {
    label: "L'objet",
    caption: "Le tabouret, debout dans le pré où il a poussé.",
  },

  recherche: {
    label: "Recherche",
    lead:
      "Relational Tectonics étudie les architectures qui se négocient avec le vivant. L'atelier de l'Epinay en est l'édition d'été, en montagne.",
    liens: [
      { t: "La page de l'atelier", u: "https://adrienrigobello.com/latelierdelepinay" },
      { t: "Le projet Relational Tectonics", u: "https://adrienrigobello.com/relationaltectonics" },
    ],
    fundingLabel: "Financement",
  },

  credits: {
    label: "Crédits",
    atelier: "Atelier et transmission",
    studio: "Conception et réalisation",
    equipe: "Équipe TINYLABS",
    contact: "Contact",
  },

  cta: "Pour un devis ou un renseignement, écrivez-nous à",

  openingAlt: "Le tabouret achevé dans le pré, la montagne derrière",
  finalAlt: "Le tabouret achevé, assise de mycélium sur trois pieds de branches",
};

const en: StoolContent = {
  allWork: "All work",
  title: "Living stool",
  subtitle: "(l’atelier de l’Epinay)",
  note: "A research object, toward the final exhibition in Copenhagen in 2028",

  meta: [
    { k: "Workshop", v: "L’atelier de l’Epinay · Adrien Rigobello" },
    { k: "Place", v: "Epinay valley" },
    { k: "Years", v: "2026 – 2028" },
    { k: "Research", v: "Relational Tectonics" },
  ],

  intro: {
    label: "The project",
    lead:
      "A stool whose seat is not made but grown. Mycelium — the underground body of a fungus, a felt of fine filaments — colonises a wood substrate and binds it into a firm, light material. The legs are three branches cut in the wood next door. Nothing was brought from far away.",
    body: [
      "The object was born at l’atelier de l’Epinay, in the mountains, in August 2026, led by Adrien Rigobello. The workshop is one of the testing grounds of the Relational Tectonics research project, which asks what building becomes when it works with the living rather than against it.",
      "Bioregional is a precise word here, not an intention: the wood comes from the plot, the wool from the flock that grazes it, the mycelium feeds on the shavings of the cut timber. The valley supplies the matter, the energy and the setting time. What the valley does not hold is not part of the object.",
      "This piece is a step. It prepares the research's final exhibition in Copenhagen in 2028, where it will be shown alongside the programme's other trials.",
    ],
  },

  site: {
    label: "The place",
    lead:
      "A valley, a farm, roofs of overlapping stone slabs. The building culture of the place already holds what the project is after: materials taken within reach, assembled without glue, replaceable piece by piece.",
    caption: "The Epinay valley, at the far end of the meadow. The roof slabs come from the same slope.",
  },

  liaison: {
    label: "Joints",
    heading:
      "Cane lashings, each tried on its own before being carried to the frame.",
    body:
      "The crossings were studied on a wall, in series, on branches of different diameters. A well-drawn lashing holds by friction and comes undone without breaking anything: the object can be taken apart, its legs replanted, its seat returned to the soil.",
  },

  matiere: {
    label: "The material",
    cultureAlt: "The stool set up in the meadow, the seat still under film while it takes",
    heading:
      "Mycelium is not a binder you mix in: it is an organism you feed, and it takes the shape of the mould you settle it in.",
    items: [
      { t: "The substrate", d: "Shavings and sawdust from timber cut on site, moistened and inoculated. The fungus's raw material is the waste of the cut." },
      { t: "Colonisation", d: "A few days of growth under cover, long enough for the white felt to run through the substrate and bind it end to end." },
      { t: "The stop", d: "Drying halts the growth. The piece becomes stable, dry, light, and will not start again on its own." },
      { t: "The return", d: "At the end of its life the seat composts. It will only have been borrowed from the soil for the length of a use." },
    ],
  },

  fabrication: {
    label: "Making",
    heading: "Four gestures, one meadow.",
    items: [
      { t: "Cut", d: "Three branches chosen for their natural fork, trimmed to seat height." },
      { t: "Lash", d: "Cane lashings hold the frame, which then carries the mould." },
      { t: "Grow", d: "The inoculated substrate is packed into the mould, set on the frame, and left to take." },
      { t: "Plant", d: "The legs go into the ground: the stool steadies itself on the meadow like a stake, with no footing and no fixing." },
    ],
  },

  galerie: {
    label: "The workshop",
    alts: [
      "The wool fleece set over the branch frame, in the meadow",
      "The sketchbook and the chosen branches, laid side by side",
      "A cane lashing drawn tight over the crossing of two branches",
      "The inoculated substrate, spread out before moulding",
      "The bench set up in the meadow, the substrate spread on the sheet",
      "The stool's legs driven into the ground with a spade",
    ],
  },

  final: {
    label: "The object",
    caption: "The stool, standing in the meadow where it grew.",
  },

  recherche: {
    label: "Research",
    lead:
      "Relational Tectonics studies architectures negotiated with the living. L’atelier de l’Epinay is its summer edition, in the mountains.",
    liens: [
      { t: "The workshop page", u: "https://adrienrigobello.com/latelierdelepinay" },
      { t: "The Relational Tectonics project", u: "https://adrienrigobello.com/relationaltectonics" },
    ],
    fundingLabel: "Funding",
  },

  credits: {
    label: "Credits",
    atelier: "Workshop and teaching",
    studio: "Design and making",
    equipe: "TINYLABS team",
    contact: "Contact",
  },

  cta: "For a quote or any question, write to us at",

  openingAlt: "The finished stool in the meadow, the mountain behind",
  finalAlt: "The finished stool, a mycelium seat on three branch legs",
};

const pl: StoolContent = {
  allWork: "Wszystkie prace",
  title: "Żywy taboret",
  subtitle: "(l’atelier de l’Epinay)",
  note: "Obiekt badawczy, z myślą o wystawie finałowej w Kopenhadze w 2028 roku",

  meta: [
    { k: "Warsztat", v: "L’atelier de l’Epinay · Adrien Rigobello" },
    { k: "Miejsce", v: "Dolina Epinay" },
    { k: "Lata", v: "2026 – 2028" },
    { k: "Badania", v: "Relational Tectonics" },
  ],

  intro: {
    label: "Projekt",
    lead:
      "Taboret, którego siedzisko nie zostało wykonane, lecz wyhodowane. Grzybnia — podziemna część grzyba, filc z cienkich nitek — zarasta podłoże z drewna i wiąże je w materiał twardy i lekki. Nogi to trzy gałęzie ścięte w sąsiednim lesie. Nic nie zostało przywiezione z daleka.",
    body: [
      "Obiekt powstał w l’atelier de l’Epinay, w górach, w sierpniu 2026 roku, pod okiem Adriena Rigobello. Warsztat jest jednym z poligonów projektu badawczego Relational Tectonics, który pyta, czym staje się budowanie, gdy pracuje z tym, co żywe, a nie przeciw niemu.",
      "Bioregionalny jest tu słowem ścisłym, nie deklaracją: drewno pochodzi z działki, wełna od stada, które ją spasa, grzybnia żywi się wiórami ze ściętego drewna. Dolina daje materię, energię i czas wiązania. To, czego dolina nie ma, nie wchodzi w skład obiektu.",
      "Ta praca jest etapem. Przygotowuje wystawę finałową badań w Kopenhadze w 2028 roku, gdzie pokazana zostanie obok pozostałych prób programu.",
    ],
  },

  site: {
    label: "Miejsce",
    lead:
      "Dolina, gospodarstwo, dachy z układanych na zakład kamiennych płyt. Kultura budowlana tego miejsca zawiera już to, czego szuka projekt: materiały wzięte z najbliższego otoczenia, łączone bez kleju, wymienialne sztuka po sztuce.",
    caption: "Dolina Epinay, w głębi łąki. Płyty na dachu pochodzą z tego samego zbocza.",
  },

  liaison: {
    label: "Połączenia",
    heading:
      "Wiązania z taśmy trzcinowej, każde wypróbowane osobno, zanim trafiło na konstrukcję.",
    body:
      "Skrzyżowania badano na ścianie, seriami, na gałęziach o różnych średnicach. Dobrze zaciągnięte wiązanie trzyma tarciem i rozchodzi się bez niszczenia czegokolwiek: obiekt można rozebrać, nogi wsadzić z powrotem w ziemię, a siedzisko oddać glebie.",
  },

  matiere: {
    label: "Materiał",
    cultureAlt: "Taboret ustawiony na łące, siedzisko jeszcze pod folią w trakcie wiązania",
    heading:
      "Grzybnia nie jest spoiwem, które się miesza: to organizm, który się karmi, i który przyjmuje kształt formy, w jakiej się go osadzi.",
    items: [
      { t: "Podłoże", d: "Wióry i trociny z drewna ściętego na miejscu, nawilżone i zaszczepione. Surowcem grzyba jest odpad po ścince." },
      { t: "Zarastanie", d: "Kilka dni wzrostu pod przykryciem — tyle, by biały filc przeszedł przez podłoże i związał je na wskroś." },
      { t: "Zatrzymanie", d: "Suszenie wstrzymuje wzrost. Element staje się stabilny, suchy, lekki i sam z siebie już nie ruszy." },
      { t: "Powrót", d: "Pod koniec życia siedzisko się kompostuje. Będzie pożyczone od gleby tylko na czas użytkowania." },
    ],
  },

  fabrication: {
    label: "Wykonanie",
    heading: "Cztery gesty, jedna łąka.",
    items: [
      { t: "Ściąć", d: "Trzy gałęzie wybrane dla naturalnego rozwidlenia, przycięte na wysokość siedziska." },
      { t: "Związać", d: "Wiązania z taśmy trzymają konstrukcję, która następnie niesie formę." },
      { t: "Wyhodować", d: "Zaszczepione podłoże ubija się w formie, stawia na konstrukcji i zostawia do związania." },
      { t: "Wsadzić", d: "Nogi wchodzą w ziemię: taboret opiera się na łące jak palik, bez stopy i bez kotwienia." },
    ],
  },

  galerie: {
    label: "Warsztat",
    alts: [
      "Runo wełny położone na konstrukcji z gałęzi, na łące",
      "Szkicownik i wybrane gałęzie, złożone obok siebie",
      "Wiązanie z taśmy zaciągnięte na skrzyżowaniu dwóch gałęzi",
      "Zaszczepione podłoże, rozłożone przed formowaniem",
      "Warsztat ustawiony na łące, podłoże rozłożone na plandece",
      "Nogi taboretu wbite w ziemię szpadlem",
    ],
  },

  final: {
    label: "Obiekt",
    caption: "Taboret, stojący na łące, na której wyrósł.",
  },

  recherche: {
    label: "Badania",
    lead:
      "Relational Tectonics bada architektury negocjowane z tym, co żywe. L’atelier de l’Epinay to ich letnia edycja, w górach.",
    liens: [
      { t: "Strona warsztatu", u: "https://adrienrigobello.com/latelierdelepinay" },
      { t: "Projekt Relational Tectonics", u: "https://adrienrigobello.com/relationaltectonics" },
    ],
    fundingLabel: "Finansowanie",
  },

  credits: {
    label: "Autorzy",
    atelier: "Warsztat i prowadzenie",
    studio: "Projekt i wykonanie",
    equipe: "Zespół TINYLABS",
    contact: "Kontakt",
  },

  cta: "W sprawie wyceny lub pytań napiszcie do nas:",

  openingAlt: "Gotowy taboret na łące, w tle góra",
  finalAlt: "Gotowy taboret, siedzisko z grzybni na trzech nogach z gałęzi",
};

/* Citation, non traduite : voir l'avertissement en tête de fichier. */
export const FUNDING =
  "This work is supported by The Carlsberg Foundation under the Internationalisation " +
  "Fellowship program (CF25-0205). The 2026 edition of l’atelier de l’Epinay has been " +
  "co-funded by the Designae COST Action Network (CA24126).";

export const projectStool: Record<string, StoolContent> = { en, fr, pl };
