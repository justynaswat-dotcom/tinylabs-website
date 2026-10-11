import { useEffect, useRef, useState } from "react";
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
     reçoivent leur src. L'extrait pèse ~5 Mo, on n'en charge qu'une partie.
   ─────────────────────────────────────────────────────────────────────────── */

export interface TextesFeuilleteur {
  precedente: string;
  suivante: string;
  aide: string;
  /** Texte alternatif d'une page ; « {n} » est remplacé par son numéro. */
  pageAlt: string;
}

/* Dimensions d'une page de l'extrait (rendu à 130 dpi du PDF 490 × 692 pt).
   Le livre ouvert est plafonné à 880 × 620 px pour tenir dans l'écran. */
const LARGEUR = 443;
const HAUTEUR = 624;

export function Feuilleteur({ pages, t }: { pages: string[]; t: TextesFeuilleteur }) {
  const hote = useRef<HTMLDivElement>(null);
  const livre = useRef<PageFlip | null>(null);
  const [actif, setActif] = useState(false);
  const [page, setPage] = useState(0);
  const [portrait, setPortrait] = useState(false);

  // Ne monter le livre qu'à l'approche de la section.
  useEffect(() => {
    const el = hote.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entrees) => { if (entrees.some((e) => e.isIntersecting)) { setActif(true); io.disconnect(); } },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
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
    charger(0);

    const flip = new PageFlip(bloc, {
      width: LARGEUR,
      height: HAUTEUR,
      size: "stretch",
      minWidth: 220,
      maxWidth: 440,
      minHeight: 310,
      maxHeight: 620,
      showCover: true,
      usePortrait: true,
      mobileScrollSupport: true,
      maxShadowOpacity: 0.35,
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
  const compteur = `${page + 1}${double ? `–${page + 2}` : ""} / ${total}`;

  const clavier = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); livre.current?.flipNext(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); livre.current?.flipPrev(); }
  };

  return (
    <div className="lv-feuilleteur">
      {/* Avant montage, l'hôte réserve la place d'une double page pour que la
          mise en page ne saute pas ; ensuite page-flip règle lui-même la
          hauteur (autoSize). */}
      {/* Livre fermé (couverture ou quatrième) : on le recentre d'un quart de
          largeur, sinon la page unique paraît décalée à côté d'un vide. */}
      <div ref={hote} tabIndex={0} onKeyDown={clavier}
           className={`lv-livre${!portrait && page === 0 ? " lv-ferme-debut" : ""}${!portrait && page >= total - 1 ? " lv-ferme-fin" : ""}`}
           style={actif ? undefined : { aspectRatio: `${LARGEUR * 2} / ${HAUTEUR}`, maxWidth: 880, margin: "0 auto" }} />
      <div className="lv-commandes">
        <button type="button" onClick={() => livre.current?.flipPrev()} disabled={page === 0}
                aria-label={t.precedente}>←</button>
        <span className="lv-compteur" aria-live="polite">{compteur}</span>
        <button type="button" onClick={() => livre.current?.flipNext()} disabled={page >= total - (double ? 2 : 1)}
                aria-label={t.suivante}>→</button>
      </div>
      <p className="lv-aide">{t.aide}</p>
    </div>
  );
}
