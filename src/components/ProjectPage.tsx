import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

/* ───────────────────────────────────────────────────────────────────────────
   FICHE PROJET — MAQUETTE DE MISE EN PAGE

   Les corps de texte sont en lorem ipsum : l'objet de cette version est de
   valider la STRUCTURE, pas la copie. Les titres de section sont en revanche
   réels, sinon la maquette n'est pas jugeable.

   La structure est calquée sur la matière existante du dossier Marseille 2050
   (chapeau, texte long, méthode en 4 volets, intro d'exposition, scénographie,
   4 manips, catalogue), pour que le remplacement du lorem soit un simple
   report de texte, sans refonte.

   Quand les textes définitifs arriveront, ils devront migrer dans
   src/lib/translations.ts pour être disponibles en fr / en / pl.

   Les styles vivent dans src/styles/project-page.css : index.css est un
   instantané compilé, une classe utilitaire Tailwind nouvelle y serait sans
   effet (voir l'en-tête de cette feuille).
   ─────────────────────────────────────────────────────────────────────────── */

const L = {
  court: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  moyen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
};

const meta = [
  { k: "Client", v: "Lorem ipsum" },
  { k: "Lieu", v: "Marseille" },
  { k: "Année", v: "2024" },
  { k: "Rôle", v: "Lorem ipsum dolor" },
];

const stats = [
  { n: "5", l: "échelles, de soi au grand dehors" },
  { n: "8", l: "thèmes transversaux" },
  { n: "4", l: "manips à manipuler" },
  { n: "1", l: "véhicule-totem itinérant" },
];

const methode = [
  "Lecture sensible du territoire",
  "Approche systémique",
  "Co-construction",
  "Prototypage itératif",
];

const manips = [
  { t: "La Maison", img: "/images/project-2.jpg" },
  { t: "La Rue", img: "/images/project-3.jpg" },
  { t: "La Ville", img: "/images/project-6.jpg" },
  { t: "Le Grand Dehors", img: "/images/project-1.jpg" },
];

const catalogue = [
  "Panneaux pédagogiques",
  "Tablettes d'ombrage",
  "Maquettes manipulables",
  "Mobilier scénographique",
  "Identité graphique",
  "Outils pédagogiques",
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
            <p className="label">Exposition · Spatial · 2024</p>
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

            <span className="pp-placeholder-note">
              Maquette de mise en page · textes en lorem ipsum
            </span>
          </motion.div>
        </div>
      </header>

      {/* ── Image d'ouverture ─────────────────────────────────────────── */}
      <div className="pp">
        <div className="pp-inner">
          <motion.figure {...reveal} className="pp-figure pp-figure-wide">
            <img src="/images/project-6.jpg" alt="" />
          </motion.figure>
        </div>
      </div>

      {/* ── Le projet ─────────────────────────────────────────────────── */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-two-col">
            <div>
              <p className="label pp-section-head">Le projet</p>
              <p className="p-large">{L.moyen}</p>
            </div>
            <div>
              <p style={{ marginBottom: "1.5rem" }}>{L.long}</p>
              <p>{L.moyen}</p>
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
            <h2 className="max-w-4xl">{L.court}</h2>
          </motion.div>
          <motion.div {...reveal} className="pp-grid pp-grid-4">
            {methode.map((m, i) => (
              <div key={m} className="pp-item">
                <h4>{String(i + 1).padStart(2, "0")} — {m}</h4>
                <p>{L.court}</p>
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
              <img src="/images/project-2.jpg" alt="" />
            </figure>
            <figure className="pp-figure pp-figure-tall">
              <img src="/images/project-3.jpg" alt="" />
            </figure>
          </motion.div>
          <p className="pp-caption">Lorem ipsum dolor sit amet — légende de l'image.</p>
        </div>
      </div>

      {/* ── Les manips ────────────────────────────────────────────────── */}
      <section className="pp pp-section pp-section-alt">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-section-head">
            <p className="label" style={{ marginBottom: "2rem" }}>L'exposition</p>
            <h2 className="max-w-4xl">{L.court}</h2>
          </motion.div>

          {manips.map((m, i) => (
            <motion.div {...reveal} key={m.t} className="pp-manip">
              <figure className="pp-figure pp-figure-square pp-manip-media">
                <img src={m.img} alt="" />
              </figure>
              <div>
                <p className="pp-manip-index">Manip {i + 1}</p>
                <h3>{m.t}</h3>
                <p>{L.moyen}</p>
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
            <h2 className="max-w-4xl">{L.court}</h2>
          </motion.div>
          <motion.div {...reveal} className="pp-grid pp-grid-3">
            {catalogue.map((c) => (
              <div key={c} className="pp-item">
                <h4>{c}</h4>
                <p>{L.court}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Galerie ───────────────────────────────────────────────────── */}
      <div className="pp">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-grid pp-grid-3">
            {["/images/project-1.jpg", "/images/project-6.jpg", "/images/project-2.jpg"].map((src, i) => (
              <figure key={i} className="pp-figure pp-figure-square">
                <img src={src} alt="" />
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
