import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PageFlip } from "page-flip";

/* ───────────────────────────────────────────────────────────────────────────
   FEUILLETEUR · un extrait de livre que l'on tourne page à page.

   Bibliothèque page-flip (StPageFlip, MIT), en mode HTML : chaque page est
   une <img>. Deux précautions :
   - page-flip retire du DOM l'élément qu'on lui confie quand on le détruit.
     On lui donne donc un <div> créé à la main dans un hôte géré par React,
     jamais un nœud React, sinon le démontage planterait.
   - Les images ne se chargent qu'à l'approche : le livre ne démarre qu'à
     ~600 px de l'écran, puis seules les pages voisines de la page ouverte
     reçoivent leur src.

   Le texte du livre est trop fin pour se lire dans le livre animé. D'où la
   lecture en grand : une double page (une seule sur téléphone) en haute
   définition (dossier hd/, 1600 px de large), que l'on agrandit d'un geste.
   Les repères (prologue, chapitres, méthode…) ouvrent la bonne double page.
   ─────────────────────────────────────────────────────────────────────────── */

export interface TextesFeuilleteur {
  precedente: string;
  suivante: string;
  aide: string;
  /** Texte alternatif d'une page ; « {n} » est remplacé par son numéro. */
  pageAlt: string;
  agrandir: string;
  fermer: string;
  zoom: string;
}

export interface Repere {
  label: string;
  /** Index de la page dans `pages`. */
  index: number;
}

/* Dimensions d'une page (rendu du PDF 490 × 692 pt à 1000 px de large).
   Le livre ouvert est plafonné à 1200 × 847 px. */
const LARGEUR = 600;
const HAUTEUR = 847;

/** Version haute définition d'une page : même nom, dossier hd/. */
const hd = (src: string) => src.replace(/\/([^/]+)$/, "/hd/$1");

/** Pages visibles ensemble en lecture double, à partir de l'index `i`. */
function doublePage(i: number, total: number): number[] {
  if (i <= 0) return [0];
  const gauche = i % 2 === 1 ? i : i - 1;
  return gauche + 1 < total ? [gauche, gauche + 1] : [gauche];
}

export function Feuilleteur({ pages, t, reperes = [], reperesLabel }:
  { pages: string[]; t: TextesFeuilleteur; reperes?: Repere[]; reperesLabel?: string }) {
  const hote = useRef<HTMLDivElement>(null);
  const zone = useRef<HTMLDivElement>(null);
  const livre = useRef<PageFlip | null>(null);
  const chargerRef = useRef<(n: number) => void>(() => {});
  const [actif, setActif] = useState(false);
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [portrait, setPortrait] = useState(false);
  const [lecture, setLecture] = useState<number | null>(null);

  // Ne monter le livre qu'à l'approche ; savoir s'il est à l'écran (clavier).
  useEffect(() => {
    const el = zone.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entrees) => { if (entrees.some((e) => e.isIntersecting)) { setActif(true); io.disconnect(); } },
      { rootMargin: "600px 0px" },
    );
    const vu = new IntersectionObserver(
      (entrees) => setVisible(entrees.some((e) => e.intersectionRatio > 0.35)),
      { threshold: [0, 0.35, 0.6] },
    );
    io.observe(el);
    vu.observe(el);
    return () => { io.disconnect(); vu.disconnect(); };
  }, []);

  useEffect(() => {
    if (!actif || !hote.current) return;

    const bloc = document.createElement("div");
    hote.current.appendChild(bloc);

    const items = pages.map((src, i) => {
      const feuille = document.createElement("div");
      feuille.className = "lv-page";
      // Couvertures rigides, pages souples.
      if (i === 0 || i === pages.length - 1) feuille.dataset.density = "hard";
      const img = document.createElement("img");
      img.alt = t.pageAlt.replace("{n}", String(i + 1));
      img.decoding = "async";
      img.draggable = false;
      img.dataset.src = src;
      feuille.appendChild(img);
      return feuille;
    });

    // Donne leur src aux pages autour de la page ouverte.
    const charger = (autour: number) => {
      for (let i = Math.max(0, autour - 2); i < Math.min(items.length, autour + 6); i++) {
        const img = items[i].firstChild as HTMLImageElement;
        if (!img.getAttribute("src")) img.src = img.dataset.src!;
      }
    };
    chargerRef.current = charger;
    charger(0);

    const flip = new PageFlip(bloc, {
      width: LARGEUR,
      height: HAUTEUR,
      size: "stretch",
      minWidth: 220,
      maxWidth: LARGEUR,
      minHeight: 310,
      maxHeight: HAUTEUR,
      showCover: true,
      usePortrait: true,
      mobileScrollSupport: true,
      maxShadowOpacity: 0.3,
      flippingTime: 800,
    });
    flip.loadFromHTML(items);
    flip.on("flip", (e) => { const n = e.data as number; setPage(n); charger(n); });
    flip.on("changeOrientation", (e) => setPortrait(e.data === "portrait"));
    setPortrait(flip.getOrientation() === "portrait");
    setPage(0);
    livre.current = flip;

    return () => { flip.destroy(); livre.current = null; };
  }, [actif, pages, t.pageAlt]);

  const total = pages.length;
  // En vis-à-vis, deux pages sont ouvertes sauf sur les couvertures.
  const double = !portrait && page > 0 && page < total - 1;
  const compteur = `${page + 1}${double ? `–${Math.min(page + 2, total)}` : ""} / ${total}`;

  const allerA = useCallback((i: number) => {
    const flip = livre.current;
    if (!flip) return;
    // Une page à la fois (téléphone) : ouvrir la page de droite, celle qui
    // porte le titre, plutôt que l'image qui la précède.
    const cible = flip.getOrientation() === "portrait" && i % 2 === 1 && i + 1 < pages.length ? i + 1 : i;
    chargerRef.current(cible);
    flip.turnToPage(cible);
    setPage(flip.getCurrentPageIndex());
  }, [pages.length]);

  // Flèches du clavier dès que le livre est à l'écran (sauf en lecture).
  useEffect(() => {
    if (!visible || lecture !== null) return;
    const touche = (e: KeyboardEvent) => {
      const cible = e.target as HTMLElement;
      if (cible.closest("input, textarea, select, [contenteditable]")) return;
      if (e.key === "ArrowRight") { e.preventDefault(); livre.current?.flipNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); livre.current?.flipPrev(); }
    };
    window.addEventListener("keydown", touche);
    return () => window.removeEventListener("keydown", touche);
  }, [visible, lecture]);

  // En lecture, le livre suit : on le laisse là où l'on a lu.
  const fermerLecture = useCallback((i: number) => {
    setLecture(null);
    allerA(i);
  }, [allerA]);

  return (
    <div className="lv-feuilleteur" ref={zone}>
      {/* Avant montage, l'hôte réserve la place d'une double page pour que la
          mise en page ne saute pas ; ensuite page-flip règle lui-même la
          hauteur. Livre fermé (couverture ou quatrième) : on le recentre d'un
          quart de largeur, sinon la page unique paraît décalée. */}
      <div ref={hote}
           className={`lv-livre${!portrait && page === 0 ? " lv-ferme-debut" : ""}${!portrait && page >= total - 1 ? " lv-ferme-fin" : ""}`}
           style={actif ? undefined : { aspectRatio: `${LARGEUR * 2} / ${HAUTEUR}` }} />
      <div className="lv-commandes">
        <button type="button" onClick={() => livre.current?.flipPrev()} disabled={page === 0}
                aria-label={t.precedente}>←</button>
        <span className="lv-compteur" aria-live="polite">{compteur}</span>
        <button type="button" onClick={() => livre.current?.flipNext()} disabled={page >= total - (double ? 2 : 1)}
                aria-label={t.suivante}>→</button>
        <button type="button" className="lv-agrandir" onClick={() => setLecture(page)}>
          <span aria-hidden="true">⤢</span> {t.agrandir}
        </button>
      </div>
      <p className="lv-aide">{t.aide}</p>

      {reperes.length > 0 && (
        <nav className="lv-reperes" aria-label={reperesLabel}>
          {reperesLabel && <span className="label">{reperesLabel}</span>}
          {reperes.map((r) => {
            const ouvert = doublePage(page, total).includes(r.index) || (portrait && page === r.index);
            return (
              <button key={r.label} type="button" onClick={() => allerA(r.index)}
                      className={ouvert ? "lv-repere-actif" : undefined}>
                {r.label}
              </button>
            );
          })}
        </nav>
      )}

      {lecture !== null && createPortal(
        <Lecture pages={pages} depart={lecture} t={t} onFermer={fermerLecture} />,
        document.body,
      )}
    </div>
  );
}

/* ── Lecture en grand ────────────────────────────────────────────────── */

function Lecture({ pages, depart, t, onFermer }:
  { pages: string[]; depart: number; t: TextesFeuilleteur; onFermer: (i: number) => void }) {
  const total = pages.length;
  const etroit = () => window.matchMedia("(max-width: 899px)").matches;
  const [simple, setSimple] = useState(etroit);
  const [i, setI] = useState(depart);
  const [zoom, setZoom] = useState(false);
  const fermer = useRef<HTMLButtonElement>(null);
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 899px)");
    const maj = () => setSimple(mq.matches);
    mq.addEventListener("change", maj);
    return () => mq.removeEventListener("change", maj);
  }, []);

  const visibles = simple ? [i] : doublePage(i, total);
  const premier = visibles[0];
  const dernier = visibles[visibles.length - 1];
  const precedent = () => { setZoom(false); setI(simple ? Math.max(0, i - 1) : Math.max(0, premier - 1)); };
  const suivant = () => { setZoom(false); setI(simple ? Math.min(total - 1, i + 1) : Math.min(total - 1, dernier + 1)); };

  // Focus sur « Fermer », page figée derrière, Échap et flèches.
  useEffect(() => {
    const avant = document.activeElement as HTMLElement | null;
    fermer.current?.focus();
    const corps = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = corps; avant?.focus(); };
  }, []);

  useEffect(() => {
    const touche = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); onFermer(premier); }
      if (e.key === "ArrowRight") { e.preventDefault(); suivant(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); precedent(); }
    };
    window.addEventListener("keydown", touche);
    return () => window.removeEventListener("keydown", touche);
  });

  // Zoom vers l'endroit cliqué ; sinon (changement de page), retour en haut.
  const point = useRef<{ x: number; y: number } | null>(null);
  useEffect(() => {
    const el = scene.current;
    if (!el) return;
    const p = point.current;
    if (zoom && p) {
      el.scrollTo(p.x * el.scrollWidth - el.clientWidth / 2, p.y * el.scrollHeight - el.clientHeight / 2);
    } else {
      el.scrollTo(0, 0);
    }
    point.current = null;
  }, [i, zoom]);
  const basculerZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    point.current = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height };
    setZoom((z) => !z);
  };

  const compteur = `${premier + 1}${visibles.length > 1 ? `–${dernier + 1}` : ""} / ${total}`;

  return (
    <div className="lv-lecture" role="dialog" aria-modal="true" aria-label={t.agrandir}>
      <div className="lv-lecture-barre">
        <span className="lv-compteur">{compteur}</span>
        <span className="lv-lecture-aide">{t.zoom}</span>
        <button ref={fermer} type="button" className="lv-lecture-fermer" onClick={() => onFermer(premier)}>
          {t.fermer} <span aria-hidden="true">✕</span>
        </button>
      </div>
      <div ref={scene} className={`lv-lecture-scene${zoom ? " lv-zoom" : ""}`}>
        <div className={`lv-lecture-pages${visibles.length > 1 ? " lv-lecture-double" : ""}`}
             onClick={basculerZoom}>
          {visibles.map((n) => (
            <img key={n} src={hd(pages[n])} alt={t.pageAlt.replace("{n}", String(n + 1))}
                 decoding="async" draggable={false} />
          ))}
        </div>
      </div>
      <div className="lv-commandes lv-lecture-commandes">
        <button type="button" onClick={precedent} disabled={premier === 0} aria-label={t.precedente}>←</button>
        <button type="button" onClick={suivant} disabled={dernier >= total - 1} aria-label={t.suivante}>→</button>
      </div>
      {/* Précharger les pages voisines. */}
      <div hidden>
        {[premier - 2, premier - 1, dernier + 1, dernier + 2].filter((n) => n >= 0 && n < total)
          .map((n) => <img key={n} src={hd(pages[n])} alt="" loading="eager" />)}
      </div>
    </div>
  );
}
