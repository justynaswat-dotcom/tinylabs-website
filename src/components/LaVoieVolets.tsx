import { useEffect, useState, type CSSProperties } from "react";
import { motion } from "motion/react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useLanguage } from "../lib/LanguageContext";
import { projectLaVoie, PLAYLIST, FILM_ID, type LaVoieContent } from "../lib/project-lavoie";
import { Feuilleteur } from "./Feuilleteur";

/* ───────────────────────────────────────────────────────────────────────────
   LA VOIE · LES QUATRE VOLETS, CHACUN SUR SA PAGE

   La fiche /work/la-voie ne garde que l'essentiel du projet ; chaque volet a
   sa propre adresse, /work/la-voie/<volet>, ouverte depuis les cartes de la
   fiche. Même principe que l'exposition « Ici, ça chauffe », présentée seule
   alors qu'elle n'est qu'une partie de Marseille 2050.

   Chaque page : retour à La Voie, numéro et titre du volet, chapeau, le
   contenu, puis volet précédent / suivant.

   Le lecteur vidéo ne charge YouTube qu'au clic (affiche cliquable, puis
   youtube-nocookie) : le site ne transmet aucune IP à Google au chargement.
   ─────────────────────────────────────────────────────────────────────────── */

export const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: [0.4, 0, 0.2, 1] as const },
};

export const IMG = "/images/lavoie";

export const num = (i: number) => String(i + 1).padStart(2, "0");

/* Les quatre volets, dans l'ordre du récit. `carte` : image de la carte sur
   la fiche principale (choisie par Justyna le 10 octobre 2026) ;
   `ouverture` : image pleine largeur en tête de page. */
export const VOLETS = [
  { slug: "residence", carte: "carte-residence", ouverture: "dessin" },
  { slug: "films", carte: "carte-films", ouverture: null },
  { slug: "exposition", carte: "carte-expo", ouverture: "ouverture" },
  // Livre : pas de photo d'ouverture, la page s'ouvre sur le livre lui-même.
  { slug: "livre", carte: "carte-livre", ouverture: null },
] as const;
export type Volet = (typeof VOLETS)[number]["slug"];

/* Titre et chapeau de chaque volet, pris dans les textes existants. */
export function enTeteVolet(t: LaVoieContent, slug: Volet) {
  switch (slug) {
    case "residence": return { titre: t.ateliers.label, chapeau: t.ateliers.heading };
    case "films": return { titre: t.films.label, chapeau: t.films.heading };
    case "exposition": return { titre: t.exposition.label, chapeau: t.exposition.heading };
    case "livre": return { titre: t.livre.label, chapeau: t.livre.heading };
  }
}

/* Extrait feuilletable du livre : 48 des 212 pages du PDF final (mai 2025),
   choisies le 7 novembre 2026 pour montrer la méthode sans donner les
   entretiens : couverture, prologue, sommaire, la double page d'ouverture
   de chaque chapitre (dessin + introduction), la méthodologie (chronologie,
   résidence, atelier, exposition), la conclusion et la quatrième.
   Les paires se suivent (page paire à gauche, impaire à droite) pour que les
   doubles pages restent des doubles pages. Images en deux tailles :
   livre/pNNN.jpg (1000 px, livre animé) et livre/hd/pNNN.jpg (1600 px, lecture). */
const EXTRAIT_PAGES = [1, 6, 7, 10, 11, 14, 15, 24, 25, 30, 31, 36, 37, 46, 47,
  62, 63, 76, 77, 84, 85, 90, 91, 92, 93, 100, 101, 114, 115, 122, 123,
  134, 135, 142, 143, 148, 149, 158, 159, 166, 167, 178, 179, 188, 189, 200, 201, 212];
const EXTRAIT = EXTRAIT_PAGES.map((n) => `${IMG}/livre/p${String(n).padStart(3, "0")}.jpg`);

/* Première page de chaque chapitre dans le PDF (sommaire + 2), dans l'ordre
   de t.livre.chapitres ; la méthodologie s'ouvre p. 85, la conclusion p. 201. */
const DEBUT_CHAPITRES = [15, 25, 31, 37, 47, 63, 77, 135, 143, 149, 159, 167, 179, 189];
/* Index de la page de gauche de la double page qui contient la page n :
   page-flip ouvre la double page dont on lui donne la page de gauche. */
const idx = (n: number) => EXTRAIT_PAGES.indexOf(n % 2 === 1 && n > 1 ? n - 1 : n);

/* CARNET de la résidence : photos et notes posées comme sur une page de
   journal de bord (référence donnée : Alicia Carvalho, « Jackie, Korea »).
   Beaucoup de blanc, des tailles différentes, une grande image, un bord qui
   déborde, de courtes notes tapées à la machine tirées du livre.
   Sur grand écran, chaque élément est placé sur une grille de 12 colonnes
   (--c : colonnes, --r : rangée) ; en dessous, il suit simplement le flux. */
/* --m : décalage vertical propre à l'élément, pour que rien ne s'aligne
   trop sagement. La note 3 est la phrase de clôture (t.ateliers.closing). */
type ElementCarnet =
  | { img: string; alt: keyof LaVoieContent["ateliers"]["galerie"]; c: string; r: string; m?: string; cls?: string }
  | { note: number; c: string; r: string; m?: string };

const CARNET: ElementCarnet[] = [
  { note: 0, c: "1 / span 3", r: "1" },
  { img: "velis-brouillard", alt: "brouillard", c: "6 / span 2", r: "1", m: "3rem" },
  { img: "velis-chemin", alt: "chemin", c: "10 / span 3", r: "1", cls: "lv-c-bord" },
  { img: "velis-groupe", alt: "groupe", c: "2 / span 3", r: "2", m: "1.5rem" },
  { img: "atelier-table", alt: "table", c: "7 / span 2", r: "2", m: "4rem", cls: "lv-c-vertical" },
  { note: 1, c: "10 / span 3", r: "2", m: "6rem" },
  { img: "atelier-mains", alt: "mains", c: "4 / span 2", r: "3", m: "1.5rem" },
  { img: "atelier", alt: "atelier", c: "1 / span 6", r: "4 / span 2", m: "2rem", cls: "lv-c-grand" },
  { img: "velis-soir", alt: "soir", c: "8 / span 2", r: "4", m: "2rem" },
  { img: "atelier-debout", alt: "debout", c: "11 / span 2", r: "4 / span 2", m: "6rem", cls: "lv-c-portrait lv-c-bord" },
  { img: "recits-soiree", alt: "soiree", c: "7 / span 3", r: "5", m: "1.5rem" },
  { img: "velis-vert", alt: "vert", c: "3 / span 2", r: "6", m: "2rem" },
  { note: 2, c: "8 / span 3", r: "6", m: "4rem" },
  { note: 3, c: "5 / span 3", r: "7", m: "1rem" },
];

/* Quatre des quatorze entretiens filmés : fichier et index du chapitre
   (t.livre.chapitres) pour la légende. Aucun ne double un court métrage
   publié (biodiversité, plaisir). */
const VOIX = [
  { img: "voix-tholence", chap: 1 },
  { img: "voix-spielmann", chap: 10 },
  { img: "voix-bailly", chap: 5 },
  { img: "voix-landes-guido", chap: 6 },
];

/* Les films publiés sur YouTube (vérifié le 10 octobre 2026 : trois vidéos
   publiques sur la chaîne). Affiches téléchargées et servies par le site :
   rien n'est demandé à YouTube avant le clic. `chap` : index du chapitre du
   livre (t.livre.chapitres) ; null pour le film du projet. */
const FILMS = [
  { id: FILM_ID, affiche: "film", chap: null, duree: "2:18" },
  { id: "FZFO35BPTyc", affiche: "films/biodiversite", chap: 3, duree: "2:56" },
  { id: "rmbzbhDlTOU", affiche: "films/plaisir", chap: 12, duree: "3:10" },
] as const;

function Film({ id, affiche, titre, label, alt }:
  { id: string; affiche: string; titre: string; label: string; alt: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="pp-film">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titre}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" className="pp-film-poster" onClick={() => setPlaying(true)}>
          <img loading="lazy" decoding="async" src={`${IMG}/${affiche}.jpg`} alt={alt} />
          <span className="pp-film-play" aria-hidden="true">▶</span>
          <span className="pp-film-label">{label}</span>
        </button>
      )}
    </div>
  );
}

/* Une figure légendée : la légende sert aussi de texte alternatif. */
function Fig({ src, texte, ratio, cls = "" }: { src: string; texte: string; ratio?: string; cls?: string }) {
  return (
    <figure className={`lv-fig ${cls}`}>
      <div className={`pp-figure ${ratio ?? ""}`}>
        <img loading="lazy" decoding="async" src={`${IMG}/${src}.jpg`} alt={texte} />
      </div>
      <figcaption>{texte}</figcaption>
    </figure>
  );
}

/* ── Contenu de chaque volet ───────────────────────────────────────────── */

function Residence({ t }: { t: LaVoieContent }) {
  return (
    <>
      <motion.div {...reveal} className="pp-two-col">
        <div><p className="p-large">{t.ateliers.body}</p></div>
        <div />
      </motion.div>
      <motion.div {...reveal} className="pp-grid pp-grid-4" style={{ marginTop: "3.5rem" }}>
        {t.ateliers.steps.map((s, i) => (
          <div key={s.t} className="pp-item">
            <h4>{String.fromCharCode(97 + i)}. {s.t}</h4>
            <p>{s.d}</p>
          </div>
        ))}
      </motion.div>
      <motion.div {...reveal} className="lv-carnet" style={{ marginTop: "3.5rem" }}>
        {CARNET.map((el, i) => {
          const pos = { "--c": el.c, "--r": el.r, "--m": el.m ?? "0" } as CSSProperties;
          const notes = [...t.ateliers.carnet, t.ateliers.closing];
          return "img" in el ? (
            <figure key={i} className={`lv-c-photo ${el.cls ?? ""}`} style={pos}>
              <img loading="lazy" decoding="async" src={`${IMG}/${el.img}.jpg`} alt={t.ateliers.galerie[el.alt]} />
            </figure>
          ) : (
            <p key={i} className="lv-c-note" style={pos}>{notes[el.note]}</p>
          );
        })}
      </motion.div>
    </>
  );
}

function Films({ t }: { t: LaVoieContent }) {
  return (
    <>
      <motion.div {...reveal} className="lv-film-principal">
        <Film id={FILMS[0].id} affiche={FILMS[0].affiche} titre={t.title}
              label={t.films.play} alt={t.films.posterAlt} />
        <div className="lv-film-cote">
          <p className="label">{t.films.principal}</p>
          <p className="lv-film-duree">{t.title} · {FILMS[0].duree}</p>
          <a href={PLAYLIST} target="_blank" rel="noreferrer noopener" className="lv-film-lien">
            {t.films.playlist}<span aria-hidden="true"> ↗</span>
          </a>
          <p className="pp-caption">{t.films.consent}</p>
        </div>
      </motion.div>
      {/* Les courts métrages publiés, chacun lié à son chapitre du livre. */}
      <motion.div {...reveal} className="lv-courts">
        <p className="label">{t.films.courtsLabel}</p>
        <div className="lv-courts-grille">
          {FILMS.slice(1).map((f) => {
            const c = t.livre.chapitres[f.chap!];
            return (
              <figure key={f.id} className="lv-fig">
                <Film id={f.id} affiche={f.affiche} titre={c.t}
                      label={t.films.play} alt={`${c.t} · ${c.d}`} />
                <figcaption><span>{num(f.chap!)} · {c.t} · {f.duree}</span>{c.d}</figcaption>
              </figure>
            );
          })}
        </div>
      </motion.div>
      <motion.div {...reveal} className="lv-voix">
        <p className="label">{t.films.voixLabel}</p>
        <div className="lv-voix-grille">
          {VOIX.map((v) => {
            const c = t.livre.chapitres[v.chap];
            return (
              <figure key={v.img} className="lv-fig">
                <div className="pp-figure lv-ratio-169">
                  <img loading="lazy" decoding="async" src={`${IMG}/${v.img}.jpg`} alt={c.d} />
                </div>
                <figcaption><span>{num(v.chap)} · {c.t}</span>{c.d}</figcaption>
              </figure>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

function Exposition({ t }: { t: LaVoieContent }) {
  const g = t.exposition.galerie;
  return (
    <>
      <motion.div {...reveal} className="pp-two-col">
        <div><p className="p-large">{t.exposition.body}</p></div>
        <div />
      </motion.div>
      {/* Les lieux où le container a été installé, du plus ancien au plus récent. */}
      <motion.div {...reveal} className="lv-lieux">
        <p className="label">{t.exposition.lieuxLabel}</p>
        <ol>
          {t.exposition.lieux.map((l) => (
            <li key={l.quand}><span className="lv-lieu-quand">{l.quand}</span><span>{l.ou}</span></li>
          ))}
        </ol>
      </motion.div>
      <motion.div {...reveal} className="pp-two-col" style={{ marginTop: "3.5rem" }}>
        <div>
          <p className="label" style={{ marginBottom: "1rem" }}>{t.exposition.contenuLabel}</p>
          <ul className="pp-liste">{t.exposition.contenu.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
        <div>
          <p className="label" style={{ marginBottom: "1rem" }}>{t.exposition.objectifsLabel}</p>
          <ul className="pp-liste">{t.exposition.objectifs.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      </motion.div>
      {/* Le container tel qu'il a été vécu au Festival du Livre : grandes
          images sur deux colonnes, portraits sur une, en alternance. */}
      <motion.div {...reveal} className="lv-mosaique" style={{ marginTop: "3.5rem" }}>
        <Fig src="expo-ecran" texte={g.ecran} ratio="lv-ratio-32" cls="lv-large" />
        <Fig src="expo-interieur" texte={g.interieur} cls="lv-haute" />
        <Fig src="expo-visiteurs" texte={g.visiteurs} cls="lv-haute" />
        <Fig src="panneaux" texte={t.exposition.panneauxAlt} ratio="lv-ratio-32" cls="lv-large" />
      </motion.div>
      <motion.div {...reveal} className="lv-galerie" style={{ marginTop: "1.75rem" }}>
        <Fig src="expo-dialogue" texte={g.dialogue} ratio="lv-ratio-32" />
        <Fig src="photos" texte={t.exposition.photosAlt} ratio="lv-ratio-32" />
        <Fig src="carte" texte={g.carte} ratio="lv-ratio-32" />
      </motion.div>
    </>
  );
}

/* Repères sous le livre, dans l'ordre des pages. */
function reperesLivre(t: LaVoieContent) {
  const r = t.livre.reperes;
  const chap = (k: number) => ({ label: `${num(k)} ${t.livre.chapitres[k].t}`, index: idx(DEBUT_CHAPITRES[k]) });
  return [
    { label: r.prologue, index: idx(7) },
    { label: r.sommaire, index: idx(11) },
    ...[0, 1, 2, 3, 4, 5, 6].map(chap),
    { label: r.methode, index: idx(85) },
    ...[7, 8, 9, 10, 11, 12, 13].map(chap),
    { label: r.conclusion, index: idx(201) },
  ];
}

function Livre({ t }: { t: LaVoieContent }) {
  return (
    <>
      {/* Le livre d'abord, et pourquoi le lire : ce qu'il contient, pour qui,
          puis les deux gestes possibles (feuilleter, commander). */}
      <motion.div {...reveal} className="lv-livre-intro">
        <figure className="lv-livre-objet">
          <img src={`${IMG}/carte-livre.jpg`} alt={t.livre.couvertureAlt} decoding="async" fetchpriority="high" />
        </figure>
        <div className="lv-livre-texte">
          <h1 className="pp-title lv-livre-titre">{t.livre.label}</h1>
          <p className="pp-subtitle lv-livre-chapeau">{t.livre.heading}</p>
          <p className="p-large">{t.livre.pourquoi}</p>
          <p className="label">{t.livre.trouverLabel}</p>
          <ul className="pp-liste">{t.livre.trouver.map((x) => <li key={x}>{x}</li>)}</ul>
          <p className="label">{t.livre.pourQuiLabel}</p>
          <p>{t.livre.pourQui}</p>
          {/* La dernière phrase du prologue, signée. */}
          <p className="lv-livre-signature">{t.livre.signature}<span>{t.livre.signatureAuteur}</span></p>
          <p className="lv-livre-faits">{t.livre.faits}</p>
          <div className="lv-livre-actions">
            <a href="#extrait" className="lv-bouton lv-bouton-plein">{t.livre.feuilleter} <span aria-hidden="true">↓</span></a>
            <a href="mailto:hello@tinylabs.one?subject=La%20Voie%20%C2%B7%20commande%20du%20livre" className="lv-bouton">
              {t.livre.commanderBouton}
            </a>
          </div>
        </div>
      </motion.div>
      <div className="lv-extrait" id="extrait">
        <p className="label">{t.livre.extrait} · {t.livre.extraitNote}</p>
        <Feuilleteur pages={EXTRAIT} t={t.livre.feuilleteur} reperes={reperesLivre(t)}
                     reperesLabel={t.livre.reperesLabel} />
        <p className="lv-commander">
          {t.livre.commander}{" "}
          <a href="mailto:hello@tinylabs.one?subject=La%20Voie%20%C2%B7%20livre">hello@tinylabs.one</a>
        </p>
      </div>
      {/* Les quatorze chapitres et leurs entretiens, d'après le sommaire. */}
      <motion.div {...reveal} className="lv-chapitres">
        <p className="label">{t.livre.chapitresLabel}</p>
        <ol>
          {t.livre.chapitres.map((c, i) => (
            <li key={c.t}>
              <span className="lv-chap-num">{num(i)}</span>
              <span className="lv-chap-titre">{c.t}</span>
              <span className="lv-chap-qui">{c.d}</span>
            </li>
          ))}
        </ol>
      </motion.div>
    </>
  );
}

const CONTENU: Record<Volet, (p: { t: LaVoieContent }) => JSX.Element> = {
  residence: Residence,
  films: Films,
  exposition: Exposition,
  livre: Livre,
};

/* ── La page d'un volet ────────────────────────────────────────────────── */

export function LaVoieVoletPage() {
  const { volet } = useParams();
  const { language } = useLanguage();
  const t = projectLaVoie[language] ?? projectLaVoie.en;

  const i = VOLETS.findIndex((v) => v.slug === volet);
  useEffect(() => { window.scrollTo(0, 0); }, [volet]);

  if (i < 0) return <Navigate to="/work/la-voie" replace />;

  const v = VOLETS[i];
  const { titre, chapeau } = enTeteVolet(t, v.slug);
  const Contenu = CONTENU[v.slug];
  // Aux extrémités, on revient à la fiche du projet plutôt que de boucler.
  const prec = i > 0 ? VOLETS[i - 1] : null;
  const suiv = i < VOLETS.length - 1 ? VOLETS[i + 1] : null;

  return (
    <article className={`lv-fiche lv-volet lv-volet-${v.slug}`}>
      {/* En-tête : retour au projet, numéro, titre, chapeau. Placé avant
          l'image pour que l'on sache tout de suite où l'on est. */}
      <header className="pp lv-volet-tete">
        <div className="pp-inner">
          <Link to="/work/la-voie" className="lv-retour">← {t.nav.retour}</Link>
          <p className="label lv-volet-num">{num(i)} / {num(VOLETS.length - 1)}</p>
          {/* Livre : le titre passe dans la colonne de droite, à côté du livre. */}
          {v.slug !== "livre" && <>
            <h1 className="pp-title">{titre}</h1>
            <p className="pp-subtitle lv-volet-chapeau">{chapeau}</p>
          </>}
        </div>
      </header>

      {v.ouverture && (
        <figure className="pp-bleed-mid lv-volet-ouverture">
          <img src={`${IMG}/${v.ouverture}.jpg`} fetchPriority="high" decoding="async"
               alt={v.slug === "residence" ? t.dessinAlt : v.slug === "livre" ? t.livre.herbesAlt : t.exposition.galerie.place} />
        </figure>
      )}

      <section className="pp pp-section">
        <div className="pp-inner">
          <Contenu t={t} />
        </div>
      </section>

      {/* Volet précédent / suivant ; aux extrémités, retour à La Voie. */}
      <nav className="pp lv-suite" aria-label={t.nav.volets}>
        <div className="pp-inner lv-suite-grille">
          <Link to={prec ? `/work/la-voie/${prec.slug}` : "/work/la-voie"} className="lv-suite-lien">
            <span className="label">← {prec ? `${t.nav.precedent} · ${num(i - 1)}` : t.nav.volets}</span>
            <span className="lv-suite-titre">{prec ? enTeteVolet(t, prec.slug).titre : t.title}</span>
          </Link>
          <Link to={suiv ? `/work/la-voie/${suiv.slug}` : "/work/la-voie"} className="lv-suite-lien lv-suite-droite">
            <span className="label">{suiv ? `${t.nav.suivant} · ${num(i + 1)}` : t.nav.volets} →</span>
            <span className="lv-suite-titre">{suiv ? enTeteVolet(t, suiv.slug).titre : t.title}</span>
          </Link>
        </div>
      </nav>
    </article>
  );
}
