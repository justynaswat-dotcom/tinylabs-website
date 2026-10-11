import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../lib/LanguageContext";
import { projectLaVoie, PLAYLIST } from "../lib/project-lavoie";
import { reveal, IMG, num, VOLETS } from "./LaVoieVolets";

/* ───────────────────────────────────────────────────────────────────────────
   FICHE PROJET · LA VOIE

   Reprise du site la-voie.info, qui n'est plus en ligne, et du livre
   (mai 2025), dans la grammaire des fiches : mêmes classes `pp-`.

   Cette page ne porte que l'essentiel du projet. Les quatre volets
   (résidence et atelier, films, exposition, livre) ont chacun leur page,
   /work/la-voie/<volet> (voir LaVoieVolets.tsx), ouverte depuis les cartes.

   LE FIL. Le projet et ses objectifs → les quatre volets (cartes) → les
   valeurs → la phrase qui résume le livre → partenaires et
   contact.
   ─────────────────────────────────────────────────────────────────────────── */

export function LaVoiePage() {
  const { language } = useLanguage();
  const t = projectLaVoie[language] ?? projectLaVoie.en;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <article className="lv-fiche">
      {/* ── Ouverture, pleine page : la route vue du ciel, sans titre
          incrusté (le titre est celui de la page, juste dessous). ─────── */}
      <figure className="pp-bleed">
        <img src={`${IMG}/ouverture-route.jpg`} fetchPriority="high"
             decoding="async" alt={t.openingAlt} />
      </figure>

      {/* ── En-tête ───────────────────────────────────────────────────── */}
      <header className="pp pp-top">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-header">
            <h1 className="pp-title">{t.title}</h1>
            <p className="pp-subtitle">{t.subtitle}</p>
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

      {/* ── Le projet : pourquoi ──────────────────────────────────────── */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-two-col">
            <div>
              <p className="label pp-section-head">{t.intro.label}</p>
              <p className="p-large">{t.intro.lead}</p>
            </div>
            <div>
              <p>{t.intro.body}</p>
              <ul className="pp-liste">
                {t.intro.aims.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Les quatre volets : une carte par page ─────────────────────── */}
      <section className="pp pp-section pp-section-alt">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-section-head">
            <p className="label" style={{ marginBottom: "2rem" }}>{t.demarche.label}</p>
            <h2>{t.demarche.heading}</h2>
          </motion.div>
          <motion.nav {...reveal} className="lv-cartes" aria-label={t.nav.volets}>
            {VOLETS.map((v, i) => (
              <Link key={v.slug} to={`/work/la-voie/${v.slug}`} className="lv-carte">
                <div className="pp-figure lv-ratio-45">
                  <img loading="lazy" decoding="async" src={`${IMG}/${v.carte}.jpg`} alt="" />
                </div>
                <span className="lv-carte-num">{num(i)}</span>
                <span className="lv-carte-titre">{t.demarche.items[i].t}</span>
                <span className="lv-carte-texte">{t.demarche.items[i].d}</span>
                <span className="lv-carte-voir">{t.nav.voir} →</span>
              </Link>
            ))}
          </motion.nav>
        </div>
      </section>

      {/* ── Les valeurs ───────────────────────────────────────────────── */}
      <section className="pp pp-section">
        <div className="pp-inner">
          <motion.p {...reveal} className="label" style={{ marginBottom: "2rem" }}>{t.valeurs.label}</motion.p>
          <motion.div {...reveal} className="pp-grid pp-grid-4">
            {t.valeurs.items.map((v) => (
              <div key={v.t} className="pp-item">
                <h4>{v.t}</h4>
                <p>{v.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Clôture : la phrase qui résume le livre. Pas d'image : la page
          s'ouvre déjà sur la même route vue du ciel. ─────────────────── */}
      <section className="pp lv-citation">
        <div className="pp-inner">
          <motion.blockquote {...reveal}>
            <p>{t.citation.texte}</p>
            <footer className="label">{t.citation.source}</footer>
          </motion.blockquote>
        </div>
      </section>

      {/* ── Partenaires et contact ─────────────────────────────────────── */}
      <section className="pp pp-section pp-section-alt">
        <div className="pp-inner">
          <motion.div {...reveal} className="pp-two-col">
            <div>
              <p className="label pp-section-head">{t.credits.label}</p>
              <dl className="pp-credits">
                <dt className="label">{t.credits.projet}</dt>
                <dd>TINYLABS</dd>

                <dt className="label">{t.credits.soutien}</dt>
                <dd>ADEME, Agence de la transition écologique · Extrême Défi Mobilité · France 2030</dd>

                <dt className="label">{t.credits.films}</dt>
                <dd>
                  <a href={PLAYLIST} target="_blank" rel="noreferrer noopener">YouTube</a>
                </dd>

                <dt className="label">{t.credits.contact}</dt>
                <dd>
                  <a href="mailto:hello@tinylabs.one">hello@tinylabs.one</a>
                </dd>
              </dl>
              <div className="pp-logos">
                <img loading="lazy" decoding="async" src={`${IMG}/logo-ademe.png`}
                     alt="République française · ADEME, Agence de la transition écologique" />
                <img loading="lazy" decoding="async" src={`${IMG}/logo-extreme-defi.png`}
                     alt="Extrême Défi · ADEME Mobilité" />
              </div>
            </div>
            <motion.p {...reveal} className="pp-cta" style={{ margin: 0 }}>
              {t.cta}{" "}
              <a href="mailto:hello@tinylabs.one">hello@tinylabs.one</a>
            </motion.p>
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
