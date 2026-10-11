/**
 * Écrit une page HTML par fiche projet, pour le partage et le référencement.
 *
 * LE PROBLÈME. Le site est une application d'une seule page : le serveur ne
 * connaît que index.html, et c'est React qui décide ensuite quoi afficher.
 * WhatsApp, Signal, LinkedIn et les robots d'indexation, eux, n'exécutent pas
 * de JavaScript. Ils lisent le HTML servi et s'arrêtent là. Partager
 * /work/tabouret-vivant affichait donc le titre et l'image de l'accueil.
 *
 * Sur GitHub Pages, ces adresses étaient de surcroît servies en 404 : le
 * workflow copie index.html en 404.html, ce qui suffit à afficher la page à
 * un humain, mais annonce aux robots que l'adresse n'existe pas.
 *
 * LA SOLUTION. Après le build, on écrit build/work/<slug>/index.html : une
 * copie d'index.html dont les seules métadonnées de partage changent. Le
 * bundle est le même, React lit l'URL et affiche la bonne fiche. Les liens
 * profonds passent en 200, et chaque fiche a son image.
 *
 * À FAIRE À CHAQUE NOUVELLE FICHE : ajouter son entrée dans PAGES ci-dessous,
 * en plus de la route dans App.tsx. Sans quoi elle repart avec l'image de
 * l'accueil.
 *
 * Lancé automatiquement par « npm run build ».
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const RACINE = 'https://tinylabs.one';
const BUILD = 'build';

const PAGES = [
  {
    slug: 'work/marseille-2050',
    titre: "Ici, ça chauffe (Marseille 2050) | TINYLABS",
    description:
      "Exposition itinérante pour la Ville de Marseille, qui rend tangibles les transformations climatiques de la ville. Prix Fibois Île-de-France, présentée à la Paris Design Week.",
    image: `${RACINE}/images/share/marseille.jpg`,
  },
  {
    slug: 'work/tabouret-vivant',
    titre: "Matériaux biorégionaux alpins : mycélium (l'atelier de l'Epinay) | TINYLABS",
    description:
      "Un objet en matériaux biorégionaux : une assise poussée de mycélium sur substrat de bois, des pieds taillés dans les branches du lieu même. Recherche Relational Tectonics.",
    image: `${RACINE}/images/share/tabouret.jpg`,
  },
  {
    slug: 'work/la-voie',
    titre: "La Voie, concevoir le mouvement pour un futur commun | TINYLABS",
    description:
      "Ateliers, quatorze courts films, une exposition et un livre sur des mobilités qui régénèrent les territoires, construits avec les habitants. Avec le soutien de l'ADEME (Extrême Défi Mobilité).",
    image: `${RACINE}/images/share/la-voie.jpg`,
  },
  // Les quatre volets de La Voie, chacun sur sa page.
  {
    slug: 'work/la-voie/residence',
    titre: "La Voie · Résidence et atelier | TINYLABS",
    description:
      "Une semaine de résidence à Mouans-Sartoux en juin 2024 pour tester les Vélis avec les habitants, puis un atelier de co-conception autour d'une cartographie sensible.",
    image: `${RACINE}/images/share/la-voie-residence.jpg`,
  },
  {
    slug: 'work/la-voie/films',
    titre: "La Voie · Films | TINYLABS",
    description:
      "Quatorze entretiens filmés sur le terrain, un par chapitre du livre La Voie : de l'eau à la santé, de la biodiversité à la liberté.",
    image: `${RACINE}/images/share/la-voie.jpg`,
  },
  {
    slug: 'work/la-voie/exposition',
    titre: "La Voie · Exposition | TINYLABS",
    description:
      "Un container maritime réaménagé, présenté au Festival du Livre de Mouans-Sartoux : vidéos, cartes sensibles et Vélis à essayer.",
    image: `${RACINE}/images/share/la-voie-exposition.jpg`,
  },
  {
    slug: 'work/la-voie/livre',
    titre: "La Voie · Livre | TINYLABS",
    description:
      "Un journal de bord en quatorze chapitres et quatorze entretiens, 212 pages (TINY LABS éditions, mai 2025). Feuilleter un extrait.",
    image: `${RACINE}/images/share/la-voie-livre.jpg`,
  },
];

const gabarit = readFileSync(join(BUILD, 'index.html'), 'utf8');

/* On remplace la valeur d'une balise repérée par son attribut, sans toucher au
   reste du document. Une expression régulière suffit ici : le gabarit est
   écrit à la main et ces balises y sont uniques. */
function remplaceMeta(html, attribut, valeur, contenu) {
  const re = new RegExp(
    `(<meta\\s+${attribut}="${valeur}"\\s+content=")[^"]*(")`,
    'i'
  );
  if (!re.test(html)) {
    throw new Error(`balise introuvable : ${attribut}="${valeur}"`);
  }
  return html.replace(re, `$1${contenu}$2`);
}

for (const page of PAGES) {
  let html = gabarit;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.titre}</title>`);
  html = remplaceMeta(html, 'name', 'description', page.description);
  html = remplaceMeta(html, 'property', 'og:url', `${RACINE}/${page.slug}`);
  html = remplaceMeta(html, 'property', 'og:title', page.titre);
  html = remplaceMeta(html, 'property', 'og:description', page.description);
  html = remplaceMeta(html, 'property', 'og:image', page.image);
  html = remplaceMeta(html, 'name', 'twitter:title', page.titre);
  html = remplaceMeta(html, 'name', 'twitter:description', page.description);
  html = remplaceMeta(html, 'name', 'twitter:image', page.image);
  html = html.replace(
    /<meta property="og:type" content="[^"]*"/,
    '<meta property="og:type" content="article"'
  );

  const dossier = join(BUILD, page.slug);
  mkdirSync(dossier, { recursive: true });
  writeFileSync(join(dossier, 'index.html'), html);
  console.log(`  ${page.slug}/index.html`);
}

console.log(`${PAGES.length} pages de partage écrites`);
