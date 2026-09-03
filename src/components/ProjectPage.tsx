import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

/* ───────────────────────────────────────────────────────────────────────────
   FICHE PROJET · MARSEILLE 2050, « Ici, ça chauffe »

   Textes repris du dossier de brochure Marseille 2050 (chapeau, texte long,
   méthode en quatre volets, intro d'exposition, scénographie, quatre manips,
   catalogue). Aucun contenu inventé : ce qui n'était pas documenté est
   signalé plus bas plutôt que comblé.

   ⚠️ Page monolingue (français). Le reste du site est trilingue : ces textes
   devront migrer dans src/lib/translations.ts, avec traduction anglaise et
   polonaise, pour qu'un visiteur anglophone ne tombe pas sur du français.

   Les styles vivent dans src/styles/project-page.css : index.css est un
   instantané compilé, une classe utilitaire Tailwind nouvelle y serait sans
   effet (voir l'en-tête de cette feuille).
   ─────────────────────────────────────────────────────────────────────────── */

const meta = [
  { k: "Client", v: "Ville de Marseille · Mission Marseille 2030" },
  { k: "Lieu", v: "Marseille" },
  { k: "Année", v: "2025" },
  { k: "Rôle", v: "Conception et scénographie" },
];

const stats = [
  { n: "5", l: "escales, de Soi au Grand Dehors" },
  { n: "8", l: "thèmes, de la chaleur à la santé" },
  { n: "4", l: "manips à manipuler" },
  { n: "1", l: "véhicule qui déplace l'exposition" },
];

const methode = [
  {
    t: "Lecture sensible du territoire",
    d: "Écouter, observer, marcher, comprendre Marseille avant de la transformer.",
  },
  {
    t: "Approche systémique",
    d: "Relier climat, eau, énergie, biodiversité, mobilité, alimentation, santé et culture comme les fils d'une même trame.",
  },
  {
    t: "Co-construction",
    d: "Travailler avec les scientifiques, les associations, les habitant·es et les acteurs publics du territoire marseillais.",
  },
  {
    t: "Prototypage itératif",
    d: "Tester les contenus, maquettes et dispositifs sur place, ajuster, transmettre sans moraliser.",
  },
];

const manips = [
  {
    t: "La Maison",
    img: "/images/m2050/maison.jpg",
    d: "Une maquette du fameux « trois-fenêtres » marseillais, l'immeuble qui fait l'identité de la ville. Façade après façade, on l'adapte au climat de 2050 : volets et persiennes, enduit à la chaux clair, isolation biosourcée, toiture-terrasse végétalisée, cour intérieure fraîche, récupération d'eau et soleil sur les toits.",
  },
  {
    t: "La Rue",
    img: "/images/m2050/rue.jpg",
    d: "« À MARS-eille, on sait jouer collectif, comme sur un terrain de foot. » La rue devient terrain de jeu et de transition : trottoirs qui boivent la pluie, arbres qui montent vers le ciel, voitures ralenties, marchés ouverts, bancs partagés, murs qui parlent. Une maquette à manipuler pour comparer la rue d'hier et celle de demain.",
  },
  {
    t: "La Ville",
    img: "/images/m2050/ville.jpg",
    d: "Un jeu pour les moins de 10 ans, pour comprendre en jouant comment les choix d'aménagement transforment le cadre de vie. Un plateau, des modules à poser, huit missions à mener avec un·e médiateur·ice : trente minutes à une heure d'urbanisme joyeux, à hauteur d'enfant.",
  },
  {
    t: "Le Grand Dehors",
    img: "/images/m2050/posidonie.jpg",
    d: "Sous la mer, une plante endémique de la Méditerranée tisse de vastes prairies : la posidonie, joyau du littoral. Une maquette en bois ouvre une fenêtre sous l'eau, où l'on découvre l'herbier, ses habitants, ses racines millénaires et son rôle climatique pour Marseille et les calanques.",
  },
];

const catalogue = [
  {
    t: "Panneaux pédagogiques",
    d: "Format 90 × 180 cm assemblé en triptyque, imprimé sur supports recyclables et fixé sur des portants modulaires en bois et acier. Trois à quatre panneaux par îlot selon les thèmes.",
  },
  {
    t: "Tablettes d'ombrage",
    d: "Tablettes textiles de 60 × 180 cm fixées au-dessus des panneaux. Elles abritent les visiteurs du soleil, animent les volumes et portent la signalétique du parcours.",
  },
  {
    t: "Maquettes manipulables",
    d: "Maison résiliente, rue désimperméabilisée, ville aux flux, territoire vivant. Bois clair, matériaux biosourcés et pièces aimantées, pour comprendre par le geste et à plusieurs.",
  },
  {
    t: "Mobilier scénographique",
    d: "Portants démontables, assises basses, tables d'atelier, et caisses de transport qui deviennent socles. Une gamme frugale pensée pour le montage rapide et l'usage intensif en extérieur.",
  },
  {
    t: "Identité graphique",
    d: "Titres manuscrits, pictogrammes filaires, illustrations dessinées à la main, palette empruntée aux terres et aux mers. Une signalétique chaleureuse qui dialogue avec la ville.",
  },
  {
    t: "Outils pédagogiques",
    d: "Carnet de visite, cartels « Et moi ? », fiches gestes et livret pour les enseignant·es. Des supports à emporter pour prolonger l'expérience en classe ou en famille.",
  },
];

// Mêmes réglages que les sections de la page d'accueil (About, Work), pour que
// la fiche entre dans le champ exactement comme le reste du site.
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: [0.4, 0, 0.2, 1] as const },
};

export function ProjectPage() {
  // Arriver en haut de la fiche : sans cela on conserve le défilement de la
  // page d'accueil et l'on atterrit au milieu du contenu.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article>
      {/* ── En-tête ───────────────────────────────────────────────────── */}
      <header className="pp">
        <div className="pp-inner">
          <Link to="/#work" className="pp-back">← Travaux</Link>

          <motion.div {...reveal} className="pp-header">
            <h1 className="pp-title">Marseille 2050</h1>
            <p className="pp-subtitle">Ici, ça chauffe</p>

            <div className="pp-meta">
              {meta.map((m) => (
                <div key={m.k}>
                  <p className="label">{m.k}</p>
                  <p className="pp-meta-value">{m.v}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* ── Image d'ouverture ─────────────────────────────────────────── */}
      <div className="pp">
        <div className="pp-inner">
          <motion.figure {...reveal} className="pp-figure pp-figure-wide">
            <img src="/images/m2050/vue-ensemble.jpg" fetchPriority="high" decoding="async" alt="Vue d'ensemble de l'exposition, les îlots et leurs panneaux" />
          </motion.figure>
        </div>
      </div>

      {/* ── Le projet ─────────────────────────────────────────────────── */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-two-col">
            <div>
              <p className="label pp-section-head">Le projet</p>
              <p className="p-large">
                Marseille 2050 est une exposition itinérante, immersive et pédagogique
                qui rend tangibles les transformations climatiques de la ville.
                À travers cinq échelles, de la maison au grand territoire, elle invite
                chacun·e à comprendre, ressentir et imaginer ensemble un Marseille
                habitable, désirable et résilient face au climat de demain.
              </p>
            </div>
            <div>
              <p style={{ marginBottom: "1.5rem" }}>
                L'exposition s'adresse à toutes et tous : familles, écoles, curieux·ses,
                habitant·es. Elle voyage dans la ville, s'installe sur les places, dans
                les cours d'école et sur des sites emblématiques, et déploie un parcours
                fait de panneaux, de maquettes et d'objets manipulables.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                Marseille y apparaît comme un point chaud du climat méditerranéen :
                canicules plus longues, eau plus rare, mer qui monte, biodiversité
                fragilisée, incendies plus fréquents. D'ici 2050, le climat de la ville
                pourrait ressembler à celui de Séville aujourd'hui.
              </p>
              <p>
                Plutôt que d'alarmer, l'exposition donne à voir les transitions déjà
                à l'œuvre : végétaliser les rues, ouvrir les sols, réinventer la
                mobilité, manger local, prendre soin du vivant marin et terrestre.
                Elle célèbre l'énergie collective marseillaise pour donner envie
                d'agir, ensemble.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Chiffres clés ─────────────────────────────────────────────── */}
      <section className="pp">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-grid pp-grid-4">
            {stats.map((s) => (
              <div key={s.l} className="pp-stat">
                <p className="pp-stat-number">{s.n}</p>
                <p className="pp-stat-label">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Méthode ───────────────────────────────────────────────────── */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-section-head">
            <p className="label" style={{ marginBottom: "2rem" }}>Méthode</p>
            <h2 className="max-w-4xl">
              Transmettre sans leçon, à hauteur d'yeux, avec humour, clarté et une
              envie partagée d'agir, chacun·e à son échelle.
            </h2>
          </motion.div>
          <motion.div {...reveal} className="pp-grid pp-grid-4">
            {methode.map((m, i) => (
              <div key={m.t} className="pp-item">
                <h4>{String(i + 1).padStart(2, "0")} · {m.t}</h4>
                <p>{m.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Deux images ───────────────────────────────────────────────── */}
      <div className="pp">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-grid pp-grid-2">
            <figure className="pp-figure pp-figure-tall">
              <img loading="lazy" decoding="async" src="/images/m2050/maison-detail.jpg" alt="Détail d'une fenêtre illustrée de la maquette de la maison" />
            </figure>
            <figure className="pp-figure pp-figure-tall">
              <img loading="lazy" decoding="async" src="/images/m2050/posidonie-detail.jpg" alt="Poissons de bois dans l'herbier de posidonie" />
            </figure>
          </motion.div>
        </div>
      </div>

      {/* ── Les manips ────────────────────────────────────────────────── */}
      <section className="pp pp-section pp-section-alt">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-section-head">
            <p className="label" style={{ marginBottom: "2rem" }}>L'exposition</p>
            <h2 className="max-w-4xl">
              Cinq escales, Soi, la Maison, la Rue, la Ville et le Grand Dehors, où
              chaque panneau pose une question simple pour éveiller la pensée et
              l'envie d'agir.
            </h2>
          </motion.div>

          {manips.map((m, i) => (
            <motion.div {...reveal} key={m.t} className="pp-manip">
              <figure className="pp-figure pp-figure-square pp-manip-media">
                <img loading="lazy" decoding="async" src={m.img} alt={`Manip ${i + 1} : ${m.t}`} />
              </figure>
              <div>
                <p className="pp-manip-index">Manip {i + 1}</p>
                <h3>{m.t}</h3>
                <p>{m.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Scénographie et catalogue ─────────────────────────────────── */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-section-head">
            <p className="label" style={{ marginBottom: "2rem" }}>Scénographie et catalogue</p>
            <h2 className="max-w-4xl">
              Un parcours modulaire, mobile et frugal : quatre îlots et une agora,
              autour d'un véhicule-totem qui transporte l'exposition de quartier
              en quartier.
            </h2>
          </motion.div>
          <motion.div {...reveal} className="pp-grid pp-grid-3">
            {catalogue.map((c) => (
              <div key={c.t} className="pp-item">
                <h4>{c.t}</h4>
                <p>{c.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Galerie ───────────────────────────────────────────────────── */}
      <div className="pp">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-grid pp-grid-3">
            {[
              { src: "/images/m2050/ilot-panneaux.jpg", alt: "Un îlot de l'exposition et ses panneaux pédagogiques" },
              { src: "/images/m2050/carte.jpg", alt: "Carte peinte du littoral marseillais" },
              { src: "/images/m2050/atelier.jpg", alt: "Fabrication des maquettes en atelier" },
            ].map((g, i) => (
              <figure key={i} className="pp-figure pp-figure-square">
                <img loading="lazy" decoding="async" src={g.src} alt={g.alt} />
              </figure>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Pied de fiche ─────────────────────────────────────────────── */}
      <div className="pp" style={{ marginTop: "6rem" }}>
        <div className="pp-inner">
          <div className="pp-footer">
            <Link to="/#work" className="pp-back" style={{ padding: 0 }}>← Tous les travaux</Link>
            <p className="pp-caption" style={{ margin: 0 }}>Marseille 2050 · Ici, ça chauffe</p>
          </div>
        </div>
      </div>
    </article>
  );
}
