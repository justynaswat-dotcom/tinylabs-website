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
      headline: "A design studio in Paris working on the ecological transition, from a single object to a whole territory.",
      mission: {
        title: "What we do",
        text: "TINYLABS designs objects, exhibitions, films and books, and advises public programmes. Every project starts in the field: we meet the people involved, test ideas on site and leave behind tools that others can use."
      },
      approach: {
        title: "Who with",
        text: "ADEME, the City of Marseille, local authorities, associations and research programmes such as Relational Tectonics."
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
          year: "2024",
          description: "A converted shipping container shown at the Festival du Livre in Mouans-Sartoux, with the Vélis parked beside it."
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
          title: "Living stool",
          category: "Material Research",
          year: "2026–2028",
          description: "A seat grown from mycelium on a wood substrate, with legs cut from branches found on site. Developed at l’atelier de l’Epinay with Adrien Rigobello, within the Relational Tectonics research, for the final exhibition in Copenhagen in 2028. Supported by the Carlsberg Foundation and the Designae COST Action."
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
      sectionLabel: "The studio",
      headline: "Hors Échelle means working at every scale: an object you can hold can explain a whole territory.",
      research: {
        title: "Objects & Materials",
        text: "Prototypes, scale models and furniture, often in bio-based or reused materials."
      },
      making: {
        title: "Spaces & Installations",
        text: "Exhibitions and installations, such as the La Voie container or the Marseille 2050 exhibition."
      },
      expression: {
        title: "Systems & Strategies",
        text: "Support for public programmes: calls for projects, juries, and following the projects that get funded."
      },
      relationship: {
        title: "Territories & Collectives",
        text: "Residencies and workshops with residents, elected officials and local organisations."
      },
      manifesto: {
        quote: "Hors Échelle: our way of working on the object, the building and the territory at the same time.",
        attribution: "The studio"
      }
    },
    footer: {
      headline: "Have a project in mind? Write to us.",
      description: "Material research, object design, exhibitions and consulting, for public bodies, companies and associations.",
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
      headline: "Un studio de design à Paris qui travaille sur la transition écologique, de l'objet au territoire.",
      mission: {
        title: "Ce que nous faisons",
        text: "TINYLABS conçoit des objets, des expositions, des films et des livres, et accompagne des programmes publics. Chaque projet commence sur le terrain : nous rencontrons les personnes concernées, nous testons sur place et nous laissons des outils que d'autres peuvent reprendre."
      },
      approach: {
        title: "Avec qui",
        text: "L'ADEME, la Ville de Marseille, des collectivités, des associations et des programmes de recherche comme Relational Tectonics."
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
          year: "2024",
          description: "Un container maritime réaménagé, présenté au Festival du Livre de Mouans-Sartoux, avec les Vélis garés à côté."
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
          title: "Tabouret vivant",
          category: "Recherche Matérielle",
          year: "2026–2028",
          description: "Une assise poussée de mycélium sur un substrat de bois, des pieds taillés dans les branches trouvées sur place. Développé à l'atelier de l'Epinay avec Adrien Rigobello, dans le cadre de la recherche Relational Tectonics, pour l'exposition finale à Copenhague en 2028. Avec le soutien de la Carlsberg Foundation et du réseau COST Designae."
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
      sectionLabel: "Le studio",
      headline: "Hors Échelle, c'est travailler à toutes les échelles : un objet que l'on tient en main peut faire comprendre un territoire entier.",
      research: {
        title: "Objets & Matériaux",
        text: "Prototypes, maquettes et mobilier, souvent en matériaux biosourcés ou de réemploi."
      },
      making: {
        title: "Espaces & Installations",
        text: "Expositions et installations, comme le container de La Voie ou l'exposition Marseille 2050."
      },
      expression: {
        title: "Systèmes & Stratégies",
        text: "Accompagnement de programmes publics : appels à projets, jurys et suivi des projets financés."
      },
      relationship: {
        title: "Territoires & Collectifs",
        text: "Résidences et ateliers avec les habitants, les élus et les associations du territoire."
      },
      manifesto: {
        quote: "Hors Échelle : notre façon de travailler en même temps sur l'objet, le bâtiment et le territoire.",
        attribution: "Le studio"
      }
    },
    footer: {
      headline: "Vous avez un projet ? Écrivez-nous.",
      description: "Recherche matérielle, design d'objets, expositions et conseil, pour des acteurs publics, des entreprises et des associations.",
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
      headline: "Studio projektowe w Paryżu, które zajmuje się transformacją ekologiczną, od przedmiotu po całe terytorium.",
      mission: {
        title: "Co robimy",
        text: "TINYLABS projektuje przedmioty, wystawy, filmy i książki, a także wspiera programy publiczne. Każdy projekt zaczyna się w terenie: spotykamy się z ludźmi, których dotyczy, testujemy na miejscu i zostawiamy narzędzia, z których inni mogą korzystać."
      },
      approach: {
        title: "Z kim",
        text: "ADEME, miasto Marsylia, samorządy, stowarzyszenia i programy badawcze, takie jak Relational Tectonics."
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
          year: "2024",
          description: "Przebudowany kontener morski pokazany na Festival du Livre w Mouans-Sartoux, z zaparkowanymi obok pojazdami Vélis."
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
          title: "Żywy taboret",
          category: "Badania Materiałowe",
          year: "2026–2028",
          description: "Siedzisko wyhodowane z grzybni na podłożu z drewna, nogi z gałęzi znalezionych na miejscu. Rozwijany w l’atelier de l’Epinay z Adrienem Rigobello, w ramach badań Relational Tectonics, na wystawę finałową w Kopenhadze w 2028 roku. Przy wsparciu Carlsberg Foundation i sieci Designae COST Action."
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
      sectionLabel: "Studio",
      headline: "Hors Échelle to praca w każdej skali: przedmiot, który trzymasz w dłoni, może wyjaśnić całe terytorium.",
      research: {
        title: "Obiekty & Materiały",
        text: "Prototypy, makiety i meble, często z materiałów biologicznych lub z odzysku."
      },
      making: {
        title: "Przestrzenie & Instalacje",
        text: "Wystawy i instalacje, takie jak kontener La Voie czy wystawa Marsylia 2050."
      },
      expression: {
        title: "Systemy & Strategie",
        text: "Wsparcie programów publicznych: konkursy na projekty, jury i towarzyszenie finansowanym projektom."
      },
      relationship: {
        title: "Terytoria & Kolektywy",
        text: "Rezydencje i warsztaty z mieszkańcami, samorządowcami i lokalnymi organizacjami."
      },
      manifesto: {
        quote: "Hors Échelle: nasz sposób pracy jednocześnie nad przedmiotem, budynkiem i terytorium.",
        attribution: "Studio"
      }
    },
    footer: {
      headline: "Masz projekt? Napisz do nas.",
      description: "Badania materiałowe, projektowanie przedmiotów, wystawy i doradztwo dla instytucji publicznych, firm i stowarzyszeń.",
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
