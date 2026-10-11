export type Language = "en" | "fr" | "pl";

/* Textes de l'accueil. Réécrits le 10 octobre 2026 dans une langue simple :
   des faits (ce que le studio fait, pour qui, où) plutôt que des formules
   abstraites. L'ordre des projets est POSITIONNEL : il doit rester le même
   dans les trois langues et correspondre aux tableaux de Work.tsx. */

export const translations = {
  en: {
    header: {
      location: "Paris",
      nav: {
        work: "Work",
        about: "About",
        contact: "Contact"
      }
    },
    hero: {
      headline: "We need new ways to navigate uncertainty, to build connections, and to design futures that are both desirable and grounded in reality.",
      mission: {
        title: "Mission",
        text: "TINYLABS is an exploratory design studio dedicated to helping organisations understand complexity and move into action with clarity. We work through systemic design, weaving together beauty, rigour, and ecological intelligence. Our ambition is simple: to make sustainability tangible, inspiring, and operational across objects, spaces, infrastructures, and collective narratives."
      },
      approach: {
        title: "Approach",
        text: "From a single object to a city-wide strategy, we make complexity visible and actionable, producing things that can be held, spaces that can be inhabited, and strategies that can be implemented."
      }
    },
    work: {
      sectionLabel: "Selected work",
      sectionTitle: "Projects from recent years, from fieldwork to finished objects.",
      projects: [
        {
          title: "La Voie",
          category: "Research & Territories",
          year: "2024–2025",
          description: "Action research in Mouans-Sartoux on intermediate vehicles, between the bike and the car: a residency, a workshop, fourteen filmed interviews, an exhibition and a book. For ADEME (Extrême Défi Mobilité)."
        },
        {
          title: "La Voie · Book",
          category: "Research & Territories",
          year: "2025",
          description: "212 pages, fourteen chapters and fourteen interviews. TINY LABS éditions, May 2025."
        },
        {
          title: "La Voie · Exhibition",
          category: "Spatial & Research",
          year: "2024–2025",
          description: "A travelling space dedicated to experiencing light mobility, shown in Mouans-Sartoux, Arles and Paris."
        },
        {
          title: "La Voie · Residency and workshop",
          category: "Research & Territories",
          year: "2024",
          description: "A week in Mouans-Sartoux with residents and Vélis in June 2024, then a mapping workshop with local services in September."
        },
        {
          title: "La Voie · Films",
          category: "Research & Territories",
          year: "2024–2025",
          description: "Fourteen interviews filmed in the field, one for each chapter of the book."
        },
        {
          title: "“Ici, ça chauffe” exhibition",
          category: "Spatial & Research",
          year: "2025",
          description: "A travelling exhibition for the City of Marseille on how the city will change with the climate by 2050. Fibois Île-de-France award, shown at Paris Design Week."
        },
        {
          title: "Alpine bioregional materials: mycelium",
          category: "Material Research",
          year: "2026–2028",
          description: "A residency at l’atelier de l’Epinay: prototypes of conceptual furniture made from mycelium grown on local wood. Relational Tectonics research, with Adrien Rigobello."
        },
        {
          title: "Le Grand Dehors, seascape",
          category: "Material Research",
          year: "2025",
          description: "A scale model of a Posidonia seagrass meadow, to show how this Mediterranean habitat lives and what depends on it."
        },
        {
          title: "Maison Modèle",
          category: "Objects & Spatial",
          year: "2025",
          description: "A scale model of a house, used to talk about how we will live in the years to come."
        },
        {
          title: "La Rue",
          category: "Spatial Systems",
          year: "2025",
          description: "A scale model of a street, used to discuss how public space is shared between its users."
        }
      ]
    },
    about: {
      sectionLabel: "Studio Philosophy",
      headline: "We believe the future is designed, not predicted, and that good design makes sustainability tangible, inspiring, and real.",
      research: {
        title: "Objects & Materials",
        text: "We design and research at the scale of the hand: objects, materials, and prototypes that make systems thinking visible, touchable, and transferable."
      },
      making: {
        title: "Spaces & Installations",
        text: "We create environments people can inhabit and experience: spatial installations, exhibitions, and interventions that change how a place, a problem, or a possibility is understood."
      },
      expression: {
        title: "Systems & Strategies",
        text: "We map complexity and design the tools to navigate it: innovation methodologies, transition frameworks, and strategies built for real institutional use."
      },
      relationship: {
        title: "Territories & Collectives",
        text: "We work at city and regional scale, co-creating with communities, institutions, and governments to activate transformation across entire ecosystems."
      },
      manifesto: {
        quote: "\"Hors Échelle\": beyond scale. New ways to navigate uncertainty, build connections, and design futures that are both desirable and grounded in reality.",
        attribution: "Studio Manifesto"
      }
    },
    footer: {
      headline: "Have a project in mind? Write to us.",
      description: "Material research, object design, exhibitions and consulting, for companies, public bodies and NGOs.",
      partnerLine: "Based in Paris, working across France and Europe.",
      email: "Email",
      phone: "Phone",
      phoneValue: "+33 9 56 85 11 65",
      location: "Location",
      locationValue: "13 rue Godefroy Cavaignac 75011 Paris",
      follow: "Follow",
      copyright: "© 2026 TINYLABS — Hors Échelle",
      tagline: "Design studio, Paris"
    }
  },
  fr: {
    header: {
      location: "Paris",
      nav: {
        work: "Travaux",
        about: "À propos",
        contact: "Contact"
      }
    },
    hero: {
      headline: "Nous avons besoin de nouvelles façons de naviguer l'incertitude, de tisser des connexions, et de concevoir des futurs à la fois désirables et ancrés dans la réalité.",
      mission: {
        title: "Mission",
        text: "TINYLABS est un studio de design exploratoire dédié à aider les organisations à comprendre la complexité et à passer à l'action avec clarté. Nous travaillons par le design systémique, en tissant ensemble beauté, rigueur et intelligence écologique. Notre ambition est simple : rendre la durabilité tangible, inspirante et opérationnelle à travers objets, espaces, infrastructures et récits collectifs."
      },
      approach: {
        title: "Approche",
        text: "D'un objet unique à une stratégie à l'échelle de la ville, nous rendons la complexité visible et actionnable, produisant des choses que l'on peut tenir, des espaces que l'on peut habiter, et des stratégies que l'on peut mettre en œuvre."
      }
    },
    work: {
      sectionLabel: "Travaux",
      sectionTitle: "Des projets de ces dernières années, du terrain jusqu'à l'objet fini.",
      projects: [
        {
          title: "La Voie",
          category: "Recherche & Territoires",
          year: "2024–2025",
          description: "Une recherche-action à Mouans-Sartoux sur les véhicules intermédiaires, entre le vélo et la voiture : résidence, atelier, quatorze entretiens filmés, exposition et livre. Pour l'ADEME (Extrême Défi Mobilité)."
        },
        {
          title: "La Voie · Livre",
          category: "Recherche & Territoires",
          year: "2025",
          description: "212 pages, quatorze chapitres et quatorze entretiens. TINY LABS éditions, mai 2025."
        },
        {
          title: "La Voie · Exposition",
          category: "Espace & Recherche",
          year: "2024–2025",
          description: "Un espace itinérant dédié à l'expérience de la mobilité légère, montré à Mouans-Sartoux, Arles et Paris."
        },
        {
          title: "La Voie · Résidence et atelier",
          category: "Recherche & Territoires",
          year: "2024",
          description: "Une semaine à Mouans-Sartoux avec les habitants et les Vélis en juin 2024, puis un atelier de cartographie avec les services de la ville en septembre."
        },
        {
          title: "La Voie · Films",
          category: "Recherche & Territoires",
          year: "2024–2025",
          description: "Quatorze entretiens filmés sur le terrain, un par chapitre du livre."
        },
        {
          title: "Exposition « Ici, ça chauffe »",
          category: "Espace & Recherche",
          year: "2025",
          description: "Une exposition itinérante pour la Ville de Marseille sur la façon dont la ville va changer avec le climat d'ici 2050. Prix Fibois Île-de-France, présentée à la Paris Design Week."
        },
        {
          title: "Matériaux biorégionaux alpins : mycélium",
          category: "Recherche Matérielle",
          year: "2026–2028",
          description: "Une résidence à l'atelier de l'Epinay : des prototypes de mobilier conceptuel en mycélium cultivé sur du bois local. Recherche Relational Tectonics, avec Adrien Rigobello."
        },
        {
          title: "Le Grand Dehors, paysage marin",
          category: "Recherche Matérielle",
          year: "2025",
          description: "Une maquette d'herbier de posidonie, pour montrer comment vit ce milieu méditerranéen et ce qui en dépend."
        },
        {
          title: "Maison Modèle",
          category: "Objets & Espace",
          year: "2025",
          description: "Une maquette de maison, pour parler de la façon dont nous habiterons dans les années qui viennent."
        },
        {
          title: "La Rue",
          category: "Systèmes Spatiaux",
          year: "2025",
          description: "Une maquette de rue, pour discuter du partage de l'espace public entre ceux qui l'utilisent."
        }
      ]
    },
    about: {
      sectionLabel: "Philosophie du Studio",
      headline: "Nous croyons que le futur se conçoit, il ne se prédit pas, et que le bon design rend la durabilité tangible, inspirante et réelle.",
      research: {
        title: "Objets & Matériaux",
        text: "Nous concevons et recherchons à l'échelle de la main : objets, matériaux et prototypes qui rendent la pensée systémique visible, tangible et transmissible."
      },
      making: {
        title: "Espaces & Installations",
        text: "Nous créons des environnements que les gens peuvent habiter et expérimenter : installations spatiales, expositions et interventions qui changent la façon dont un lieu, un problème ou une possibilité est compris."
      },
      expression: {
        title: "Systèmes & Stratégies",
        text: "Nous cartographions la complexité et concevons les outils pour la naviguer : méthodologies d'innovation, cadres de transition et stratégies construits pour un usage institutionnel réel."
      },
      relationship: {
        title: "Territoires & Collectifs",
        text: "Nous travaillons à l'échelle de la ville et de la région, co-créant avec des communautés, institutions et gouvernements pour activer la transformation à travers des écosystèmes entiers."
      },
      manifesto: {
        quote: "« Hors Échelle » : au-delà de l'échelle. De nouvelles façons de naviguer l'incertitude, de tisser des connexions, et de concevoir des futurs à la fois désirables et ancrés dans la réalité.",
        attribution: "Manifeste du Studio"
      }
    },
    footer: {
      headline: "Vous avez un projet ? Écrivez-nous.",
      description: "Recherche matérielle, design d'objets, expositions et conseil, pour les entreprises, les acteurs publics et les ONG.",
      partnerLine: "Basés à Paris, nous travaillons en France et en Europe.",
      email: "Email",
      phone: "Téléphone",
      phoneValue: "+33 9 56 85 11 65",
      location: "Adresse",
      locationValue: "13 rue Godefroy Cavaignac 75011 Paris",
      follow: "Suivre",
      copyright: "© 2026 TINYLABS — Hors Échelle",
      tagline: "Studio de design, Paris"
    }
  },
  pl: {
    header: {
      location: "Paryż",
      nav: {
        work: "Prace",
        about: "O nas",
        contact: "Kontakt"
      }
    },
    hero: {
      headline: "Potrzebujemy nowych sposobów nawigowania niepewnością, budowania połączeń i projektowania przyszłości, które są zarówno pożądane, jak i zakorzenione w rzeczywistości.",
      mission: {
        title: "Misja",
        text: "TINYLABS to eksploratoryjne studio designu dedykowane pomaganiu organizacjom w rozumieniu złożoności i przechodzeniu do działania z jasnością. Pracujemy przez projektowanie systemowe, splatając razem piękno, rygor i ekologiczną inteligencję. Nasza ambicja jest prosta: uczynić zrównoważoność namacalną, inspirującą i operacyjną poprzez obiekty, przestrzenie, infrastruktury i zbiorowe narracje."
      },
      approach: {
        title: "Podejście",
        text: "Od pojedynczego obiektu po strategię na skalę miasta, czynimy złożoność widoczną i możliwą do działania, tworząc rzeczy, które można trzymać, przestrzenie, które można zamieszkać, i strategie, które można wdrożyć."
      }
    },
    work: {
      sectionLabel: "Prace",
      sectionTitle: "Projekty z ostatnich lat, od pracy w terenie po gotowe przedmioty.",
      projects: [
        {
          title: "La Voie",
          category: "Badania & Terytoria",
          year: "2024–2025",
          description: "Badania w działaniu w Mouans-Sartoux o pojazdach pośrednich, między rowerem a samochodem: rezydencja, warsztat, czternaście filmowanych wywiadów, wystawa i książka. Dla ADEME (Extrême Défi Mobilité)."
        },
        {
          title: "La Voie · Książka",
          category: "Badania & Terytoria",
          year: "2025",
          description: "212 stron, czternaście rozdziałów i czternaście wywiadów. TINY LABS éditions, maj 2025."
        },
        {
          title: "La Voie · Wystawa",
          category: "Przestrzeń & Badania",
          year: "2024–2025",
          description: "Objazdowa przestrzeń poświęcona doświadczaniu lekkiej mobilności, pokazana w Mouans-Sartoux, Arles i Paryżu."
        },
        {
          title: "La Voie · Rezydencja i warsztat",
          category: "Badania & Terytoria",
          year: "2024",
          description: "Tydzień w Mouans-Sartoux z mieszkańcami i pojazdami Vélis w czerwcu 2024, potem warsztat mapowania z lokalnymi służbami we wrześniu."
        },
        {
          title: "La Voie · Filmy",
          category: "Badania & Terytoria",
          year: "2024–2025",
          description: "Czternaście wywiadów nakręconych w terenie, po jednym na każdy rozdział książki."
        },
        {
          title: "Wystawa „Ale tu gorąco”",
          category: "Przestrzeń & Badania",
          year: "2025",
          description: "Wystawa objazdowa dla miasta Marsylia o tym, jak miasto zmieni się wraz z klimatem do 2050 roku. Nagroda Fibois Île-de-France, pokazana na Paris Design Week."
        },
        {
          title: "Alpejskie materiały bioregionalne: grzybnia",
          category: "Badania Materiałowe",
          year: "2026–2028",
          description: "Rezydencja w l’atelier de l’Epinay: prototypy koncepcyjnych mebli z grzybni wyhodowanej na lokalnym drewnie. Badania Relational Tectonics, z Adrienem Rigobello."
        },
        {
          title: "Wielki Świat, pejzaż morski",
          category: "Badania Materiałowe",
          year: "2025",
          description: "Makieta łąki posidonii, która pokazuje, jak żyje to śródziemnomorskie środowisko i co od niego zależy."
        },
        {
          title: "Dom Modelowy",
          category: "Obiekty & Przestrzeń",
          year: "2025",
          description: "Makieta domu, do rozmowy o tym, jak będziemy mieszkać w nadchodzących latach."
        },
        {
          title: "Ulica",
          category: "Systemy Przestrzenne",
          year: "2025",
          description: "Makieta ulicy, do rozmowy o tym, jak dzielimy przestrzeń publiczną."
        }
      ]
    },
    about: {
      sectionLabel: "Filozofia Studia",
      headline: "Wierzymy, że przyszłość jest projektowana, nie przewidywana, i że dobry design czyni zrównoważoność namacalną, inspirującą i rzeczywistą.",
      research: {
        title: "Obiekty & Materiały",
        text: "Projektujemy i badamy w skali dłoni: obiekty, materiały i prototypy, które czynią myślenie systemowe widocznym, namacalnym i przekazywalnym."
      },
      making: {
        title: "Przestrzenie & Instalacje",
        text: "Tworzymy środowiska, które ludzie mogą zamieszkiwać i doświadczać: instalacje przestrzenne, wystawy i interwencje zmieniające sposób rozumienia miejsca, problemu lub możliwości."
      },
      expression: {
        title: "Systemy & Strategie",
        text: "Mapujemy złożoność i projektujemy narzędzia do jej nawigowania: metodologie innowacji, ramy transformacji i strategie zbudowane do rzeczywistego użytku instytucjonalnego."
      },
      relationship: {
        title: "Terytoria & Kolektywy",
        text: "Pracujemy w skali miasta i regionu, współtworząc ze społecznościami, instytucjami i rządami, by aktywować transformację w całych ekosystemach."
      },
      manifesto: {
        quote: "\"Hors Échelle\": poza skalą. Nowe sposoby nawigowania niepewnością, budowania połączeń i projektowania przyszłości, które są zarówno pożądane, jak i zakorzenione w rzeczywistości.",
        attribution: "Manifest Studia"
      }
    },
    footer: {
      headline: "Masz projekt? Napisz do nas.",
      description: "Badania materiałowe, projektowanie przedmiotów, wystawy i doradztwo dla firm, instytucji publicznych i organizacji pozarządowych.",
      partnerLine: "Działamy z Paryża, we Francji i w Europie.",
      email: "Email",
      phone: "Telefon",
      phoneValue: "+33 9 56 85 11 65",
      location: "Adres",
      locationValue: "13 rue Godefroy Cavaignac 75011 Paris",
      follow: "Obserwuj",
      copyright: "© 2026 TINYLABS — Hors Échelle",
      tagline: "Studio projektowe, Paryż"
    }
  }
};
