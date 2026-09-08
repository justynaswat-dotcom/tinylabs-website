import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../lib/LanguageContext";
import { projectMarseille } from "../lib/project-marseille";

/* ───────────────────────────────────────────────────────────────────────────
   FICHE PROJET · MARSEILLE 2050

   Le texte vit dans src/lib/project-marseille.ts, par langue. Ce fichier ne
   porte plus que la structure.

   Mise en page : la fiche suivait une trame trop régulière — pleine largeur,
   deux colonnes, grille de trois, et ainsi de suite jusqu'en bas. Les images
   occupent désormais des largeurs et des retraits différents selon leur rôle,
   et la galerie est une mosaïque plutôt qu'une grille uniforme.
   ─────────────────────────────────────────────────────────────────────────── */

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: [0.4, 0, 0.2, 1] as const },
};

const equipe = [
  "Justyna Swat", "Juliette Eugénie", "Julien Dossier", "Julie Vandal",
  "Stéphanie Beuf", "Mathieu Grosche", "Louise Viollet Deval", "Sonia Nazef",
];

/* Galerie tenue en registre d'architecture : le bâti seul, six lectures qui
   ne se répètent pas. L'ordre compte — la première occupe deux colonnes sur
   deux dans la mosaïque, la quatrième deux colonnes en largeur. D'où la
   structure entière en tête, et la rangée frontale, la plus panoramique de
   la série, en quatrième position. */
const galerie = [
  "gal-halle", "gal-ilot", "gal-structure",
  "gal-rangee", "gal-panneau", "gal-couverture",
];

const vues = ["maison", "rue", "ville", "posidonie"];

export function ProjectPage() {
  const { language } = useLanguage();
  const t = projectMarseille[language] ?? projectMarseille.en;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <article>
      {/* ── En-tête ───────────────────────────────────────────────────── */}
      <header className="pp pp-top">
        <div className="pp-inner">
          <Link to="/#work" className="pp-back">← {t.back}</Link>
          <motion.div {...reveal} className="pp-header">
            <h1 className="pp-title">{t.title}</h1>
            <p className="pp-subtitle">{t.subtitle}</p>
          </motion.div>
        </div>
      </header>

      {/* ── Ouverture, pleine page ────────────────────────────────────────
          Sans marge : l'image touche les bords de l'écran. C'est la seule de
          la fiche à le faire, ce qui lui donne son statut d'ouverture.      */}
      <motion.figure {...reveal} className="pp-bleed">
        <img src="/images/m2050/vue-ensemble.jpg" fetchPriority="high"
             decoding="async" alt={t.openingAlt} />
      </motion.figure>

      {/* ── Métadonnées ───────────────────────────────────────────────── */}
      <div className="pp">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-meta">
            {t.meta.map((m) => (
              <div key={m.k}>
                <p className="label">{m.k}</p>
                <p className="pp-meta-value">{m.v}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Le projet ─────────────────────────────────────────────────── */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-two-col">
            <div>
              <p className="label pp-section-head">{t.intro.label}</p>
              <p className="p-large">{t.intro.lead}</p>
            </div>
            <div>
              {t.intro.body.map((p, i) => (
                <p key={i} style={{ marginBottom: i < t.intro.body.length - 1 ? "1.5rem" : 0 }}>
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Implantation : image en retrait, non centrée ────────────────── */}
      <div className="pp">
        <div className="pp-inner">
          <motion.figure {...reveal} className="pp-figure pp-figure-wide pp-offset">
            <img loading="lazy" decoding="async"
                 src="/images/m2050/scenographie-rendu.jpg" alt={t.planAlt} />
          </motion.figure>
          <p className="pp-caption pp-offset-caption">{t.plan.caption}</p>
        </div>
      </div>

      {/* ── Principe constructif ────────────────────────────────────────
          Le dessin est une bande de 4,4 pour 1 : dans une colonne il ne
          mesurerait que deux cents pixels de haut. Il passe donc sous le
          texte, sur toute la largeur, où il tient sa place.              */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-section-head">
            <p className="label" style={{ marginBottom: "2rem" }}>{t.structure.label}</p>
            <p className="p-large pp-lead">{t.structure.lead}</p>
          </motion.div>
          <motion.figure {...reveal} className="pp-plan">
            <img loading="lazy" decoding="async"
                 src="/images/m2050/axonometrie.svg" alt={t.structure.alt} />
          </motion.figure>
        </div>
      </section>

      {/* ── Méthode ───────────────────────────────────────────────────── */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-section-head">
            <p className="label" style={{ marginBottom: "2rem" }}>{t.method.label}</p>
            <h2>{t.method.heading}</h2>
          </motion.div>
          <motion.div {...reveal} className="pp-grid pp-grid-4">
            {t.method.items.map((m, i) => (
              <div key={m.t} className="pp-item">
                <h4>{String(i + 1).padStart(2, "0")} · {m.t}</h4>
                <p>{m.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Diptyque asymétrique ─────────────────────────────────────────
          Deux images de tailles inégales, décalées verticalement : le regard
          entre par la grande et se pose sur la petite, au lieu de peser
          également sur deux blocs jumeaux.                                 */}
      <div className="pp">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-duo">
            <figure className="pp-figure pp-figure-tall pp-duo-a">
              <img loading="lazy" decoding="async"
                   src="/images/m2050/chevalet.jpg" alt={t.duo[0]} />
            </figure>
            <figure className="pp-figure pp-figure-square pp-duo-b">
              <img loading="lazy" decoding="async"
                   src="/images/m2050/poissons.jpg" alt={t.duo[1]} />
            </figure>
          </motion.div>
        </div>
      </div>

      {/* ── Les interactions ──────────────────────────────────────────── */}
      <section className="pp pp-section pp-section-alt">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-section-head">
            <p className="label" style={{ marginBottom: "2rem" }}>{t.exhibition.label}</p>
            <h2>{t.exhibition.heading}</h2>
            <p className="pp-parcours">
              {t.exhibition.route} — <span>{t.exhibition.routeNote}</span>
            </p>
          </motion.div>

          {t.exhibition.items.map((m, i) => (
            <motion.div {...reveal} key={m.t} className="pp-inter">
              <figure className="pp-figure pp-figure-square pp-inter-media">
                <img loading="lazy" decoding="async"
                     src={`/images/m2050/${vues[i]}.jpg`} alt={m.vue} />
              </figure>
              <div>
                <p className="pp-inter-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
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
            <p className="label" style={{ marginBottom: "2rem" }}>{t.catalogue.label}</p>
            <h2>{t.catalogue.heading}</h2>
          </motion.div>
          <motion.div {...reveal} className="pp-grid pp-grid-3">
            {t.catalogue.items.map((c) => (
              <div key={c.t} className="pp-item">
                <h4>{c.t}</h4>
                <p>{c.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Galerie en mosaïque ──────────────────────────────────────────
          Six vues de tailles inégales plutôt qu'une grille de trois par deux :
          la première tient deux colonnes, les autres se répartissent autour. */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-mosaic">
            {galerie.map((g, i) => (
              <figure key={g} className={`pp-figure pp-mosaic-${i + 1}`}>
                <img loading="lazy" decoding="async"
                     src={`/images/m2050/${g}.jpg`} alt={t.gallery.alts[i]} />
              </figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Distinction ───────────────────────────────────────────────── */}
      <section className="pp pp-section pp-section-alt">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-two-col pp-prix">
            <div>
              <p className="label pp-section-head">{t.award.label}</p>
              <p className="p-large">{t.award.lead}</p>
              <p style={{ marginTop: "1.5rem" }}>{t.award.body}</p>
            </div>
            <figure className="pp-logo">
              <img loading="lazy" decoding="async"
                   src="/images/m2050/prix-pdw.png" alt={t.award.logoAlt} />
            </figure>
          </motion.div>
        </div>
      </section>

      {/* ── Crédits ───────────────────────────────────────────────────── */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal}>
            <p className="label pp-section-head">{t.credits.label}</p>
            <dl className="pp-credits">
              <dt className="label">{t.credits.team}</dt>
              <dd>
                {/* Chaque nom est rendu insécable : un prénom ne doit pas se
                    détacher de son nom en fin de ligne. L'espace insécable
                    devant la puce l'empêche par ailleurs d'ouvrir une ligne. */}
                {equipe.map((n) => n.replace(/ /g, " ")).join(" · ")}
              </dd>

              <dt className="label">{t.credits.engineering}</dt>
              <dd>Artemis Ingénieur</dd>

              <dt className="label">{t.credits.vehicle}</dt>
              <dd>Kilow</dd>

              <dt className="label">{t.credits.printing}</dt>
              <dd>
                <a href="https://prestimage.fr" target="_blank" rel="noreferrer noopener">
                  Prestimage
                </a>
              </dd>

              <dt className="label">{t.credits.contact}</dt>
              <dd>
                <a href="mailto:hello@tinylabs.one">hello@tinylabs.one</a>
                <br />
                {/* wa.me exige le format international sans le zéro initial. */}
                <a href="https://wa.me/33651360555" target="_blank" rel="noreferrer noopener">
                  WhatsApp&nbsp;06&nbsp;51&nbsp;36&nbsp;05&nbsp;55
                </a>
              </dd>
            </dl>
          </motion.div>
        </div>
      </section>

      {/* ── Pied de fiche ─────────────────────────────────────────────── */}
      <div className="pp" style={{ marginTop: "3.5rem" }}>
        <div className="pp-inner">
          <div className="pp-footer">
            <Link to="/#work" className="pp-back" style={{ padding: 0 }}>
              ← {t.allWork}
            </Link>
            <p className="pp-caption" style={{ margin: 0 }}>
              {t.title} · {t.subtitle}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
