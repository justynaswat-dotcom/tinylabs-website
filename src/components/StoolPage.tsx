import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../lib/LanguageContext";
import { projectStool, FUNDING } from "../lib/project-stool";

/* ───────────────────────────────────────────────────────────────────────────
   FICHE PROJET · TABOURET VIVANT

   Même grammaire que la fiche Marseille — mêmes classes `pp-`, mêmes rythmes
   d'images — mais un récit plus court : un objet, pas une exposition. La page
   suit la fabrication, du lieu à l'objet planté.

   Une section lui est propre : `pp-recherche`, qui porte les deux liens du
   programme et la mention de financement. Elle est due dès qu'on référence la
   recherche, et une carte de grille ne pouvait pas l'accueillir.
   ─────────────────────────────────────────────────────────────────────────── */

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: [0.4, 0, 0.2, 1] as const },
};

/* La galerie montre comment l'objet se fait : le moule, le tassage, la laine,
   la bêche. Une seule vue d'étude y reste, en dernier — une galerie pleine de
   branches disait la matière première, pas le procédé.

   L'ordre suit les formats des cellules : la première est haute, les deux
   suivantes en portrait, les trois dernières en largeur. Le fonds étant
   presque tout en portrait, ces trois-là sont contraintes. */
const galerie = [
  "moule", "tassage", "laine",
  "beche", "pre", "maquette-profil",
];

export function StoolPage() {
  const { language } = useLanguage();
  const t = projectStool[language] ?? projectStool.en;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <article>
      {/* ── Ouverture, pleine page ───────────────────────────────────────
          Elle occupe ce que l'écran laisse sous la barre, comme sur la fiche
          Marseille : l'ossature et son moule dans le pré, avant l'objet.   */}
      <figure className="pp-bleed">
        <img src="/images/tabouret/ouverture.jpg" fetchPriority="high"
             decoding="async" alt={t.openingAlt} />
      </figure>

      {/* ── En-tête ───────────────────────────────────────────────────── */}
      <header className="pp pp-top">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-header">
            <h1 className="pp-title">{t.title}</h1>
            <p className="pp-subtitle">{t.subtitle}</p>
            <p className="pp-note">{t.note}</p>
          </motion.div>
        </div>
      </header>

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

      {/* ── Le lieu : diptyque asymétrique ─────────────────────────────── */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-two-col">
            <div>
              <p className="label pp-section-head">{t.site.label}</p>
              <p className="p-large">{t.site.lead}</p>
            </div>
            <div />
          </motion.div>
          <motion.div {...reveal} className="pp-duo" style={{ marginTop: "2.5rem" }}>
            <figure className="pp-figure pp-figure-wide pp-duo-a">
              <img loading="lazy" decoding="async"
                   src="/images/tabouret/ferme.jpg" alt={t.site.caption} />
            </figure>
            <figure className="pp-figure pp-figure-square pp-duo-b">
              <img loading="lazy" decoding="async"
                   src="/images/tabouret/toit.jpg" alt={t.site.caption} />
            </figure>
          </motion.div>
          <p className="pp-caption">{t.site.caption}</p>
        </div>
      </section>

      {/* ── Assemblages : le plan large en retrait ──────────────────────── */}
      <section className="pp pp-section pp-section-alt">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-section-head">
            <p className="label" style={{ marginBottom: "2rem" }}>{t.liaison.label}</p>
            <h2>{t.liaison.heading}</h2>
            <p className="pp-lead" style={{ marginTop: "1.5rem" }}>{t.liaison.body}</p>
          </motion.div>
          <motion.figure {...reveal} className="pp-figure pp-figure-wide pp-offset">
            <img loading="lazy" decoding="async"
                 src="/images/tabouret/assemblage.jpg" alt={t.galerie.alts[2]} />
          </motion.figure>
        </div>
      </section>

      {/* ── La matière ────────────────────────────────────────────────── */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-section-head">
            <p className="label" style={{ marginBottom: "2rem" }}>{t.matiere.label}</p>
            <h2>{t.matiere.heading}</h2>
          </motion.div>
          <motion.div {...reveal} className="pp-grid pp-grid-4">
            {t.matiere.items.map((m, i) => (
              <div key={m.t} className="pp-item">
                <h4>{String(i + 1).padStart(2, "0")} · {m.t}</h4>
                <p>{m.d}</p>
              </div>
            ))}
          </motion.div>
          <motion.figure {...reveal} className="pp-figure pp-figure-wide"
                         style={{ marginTop: "3.5rem" }}>
            <img loading="lazy" decoding="async"
                 src="/images/tabouret/substrat.jpg" alt={t.matiere.items[0].d} />
          </motion.figure>
        </div>
      </section>

      {/* ── La prise, pleine page ────────────────────────────────────────
          Hors du conteneur : l'image touche les bords de l'écran, comme
          l'ouverture. C'est le moment où l'objet n'est plus un montage et
          pas encore un tabouret — il méritait la pleine largeur.        */}
      <motion.figure {...reveal} className="pp-bleed-mid">
        <img loading="lazy" decoding="async"
             src="/images/tabouret/culture.jpg" alt={t.matiere.cultureAlt} />
      </motion.figure>
      <div className="pp">
        <div className="pp-inner">
          <p className="pp-bleed-caption">{t.matiere.cultureAlt}</p>
        </div>
      </div>

      {/* ── Fabrication ───────────────────────────────────────────────── */}
      <section className="pp pp-section pp-section-alt">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-section-head">
            <p className="label" style={{ marginBottom: "2rem" }}>{t.fabrication.label}</p>
            <h2>{t.fabrication.heading}</h2>
          </motion.div>
          <motion.div {...reveal} className="pp-grid pp-grid-4">
            {t.fabrication.items.map((m, i) => (
              <div key={m.t} className="pp-item">
                <h4>{String(i + 1).padStart(2, "0")} · {m.t}</h4>
                <p>{m.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Galerie en mosaïque ───────────────────────────────────────── */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-section-head">
            <p className="label">{t.galerie.label}</p>
          </motion.div>
          <motion.div {...reveal} className="pp-mosaic">
            {galerie.map((g, i) => (
              <figure key={g} className={`pp-figure pp-mosaic-${i + 1}`}>
                <img loading="lazy" decoding="async"
                     src={`/images/tabouret/${g}.jpg`} alt={t.galerie.alts[i]} />
              </figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── L'objet ───────────────────────────────────────────────────── */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-two-col">
            <div>
              <p className="label pp-section-head">{t.final.label}</p>
              <p className="p-large">{t.final.caption}</p>
            </div>
            <figure className="pp-figure pp-figure-tall">
              <img loading="lazy" decoding="async"
                   src="/images/tabouret/tabouret.jpg" alt={t.finalAlt} />
            </figure>
          </motion.div>
        </div>
      </section>

      {/* ── Recherche, liens et financement ──────────────────────────────
          La mention de financement est une citation : elle reste en anglais
          dans les trois langues, numéros de subvention compris.            */}
      <section className="pp pp-section pp-section-alt">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-two-col">
            <div>
              <p className="label pp-section-head">{t.recherche.label}</p>
              <p className="p-large">{t.recherche.lead}</p>
              <ul className="pp-liens">
                {t.recherche.liens.map((l) => (
                  <li key={l.u}>
                    <a href={l.u} target="_blank" rel="noreferrer noopener">
                      {l.t}<span aria-hidden="true"> ↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label" style={{ marginBottom: "1rem" }}>
                {t.recherche.fundingLabel}
              </p>
              <p className="pp-funding" lang="en">{FUNDING}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Crédits ───────────────────────────────────────────────────── */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal}>
            <p className="label pp-section-head">{t.credits.label}</p>
            <dl className="pp-credits">
              <dt className="label">{t.credits.atelier}</dt>
              <dd>
                <a href="https://adrienrigobello.com/latelierdelepinay"
                   target="_blank" rel="noreferrer noopener">
                  Adrien Rigobello
                </a>
              </dd>

              <dt className="label">{t.credits.studio}</dt>
              {/* Noms insécables : un prénom ne doit pas se détacher de son
                  nom en fin de ligne. */}
              <dd>
                {t.credits.equipe} : Justyna&nbsp;Swat&nbsp;· Brieuc&nbsp;Tual
              </dd>

              <dt className="label">{t.credits.contact}</dt>
              <dd>
                <a href="mailto:hello@tinylabs.one">hello@tinylabs.one</a>
              </dd>
            </dl>
          </motion.div>
        </div>
      </section>

      {/* ── Appel de contact ──────────────────────────────────────────── */}
      <section className="pp pp-section pp-section-alt">
        <div className="pp-inner">
          <motion.p {...reveal} className="pp-cta">
            {t.cta}{" "}
            <a href="mailto:hello@tinylabs.one">hello@tinylabs.one</a>
          </motion.p>
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
              {t.title} {t.subtitle}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
