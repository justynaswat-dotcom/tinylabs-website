import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../lib/LanguageContext";
import { Language } from "../lib/translations";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Au défilement la barre se resserre : moins de hauteur, menu et logotype
  // plus petits. Le nom reste entier, seul le corps baisse.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sur l'accueil, cliquer le logotype ne change pas de route : le routeur
  // n'a donc rien à faire et la page resterait où elle est. On remonte à la
  // main. Ailleurs, on laisse le lien naviguer normalement.
  const retourAccueil = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);
    if (pathname !== "/") return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const languages: Language[] = ['en', 'fr', 'pl'];
  const navStyle = { fontFamily: "var(--font-nav)", fontWeight: 400 };

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-12 py-10 md:px-16 md:py-11 bg-[var(--color-background)]/80 backdrop-blur-sm tl-header${scrolled ? " tl-shrunk" : ""}`}
      >
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">

          {/* Logotype. Le nom reste entier au défilement — il se réduisait
              auparavant en « T—HE », ce qui faisait perdre la marque dès les
              premiers pixels de scroll. Il mène à l'accueil : depuis la fiche
              projet le routeur s'en charge, depuis l'accueil il ne reste qu'à
              remonter en haut. */}
          <h1 className="m-0" style={navStyle}>
            <Link to="/" onClick={retourAccueil} className="tl-wordmark">
              <span className="tl-wordmark-nom">TINYLABS</span>
              <span className="tl-wordmark-tiret" aria-hidden="true">—</span>
              <span className="tl-wordmark-suite">Studio Hors Échelle</span>
            </Link>
          </h1>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-12">
            <nav>
              <ul className="flex gap-10 list-none p-0 m-0 tl-nav" style={navStyle}>
                <li><a href="#work" onClick={(e) => handleNavClick(e, "#work")}>{t.header.nav.work}</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")}>{t.header.nav.about}</a></li>
                <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>{t.header.nav.contact}</a></li>
              </ul>
            </nav>

            <div className="flex items-center gap-3 pl-10 border-l border-[var(--color-border)] tl-langues" style={{ ...navStyle, fontSize: "0.8125rem" }}>
              {languages.map((lang, i) => (
                <span key={lang} className="flex items-center gap-3">
                  <button
                    onClick={() => setLanguage(lang)}
                    className={`uppercase tracking-widest${language === lang ? " tl-langue-active" : ""}`}
                  >
                    {lang}
                  </button>
                  {i < languages.length - 1 && <span className="tl-langue-point">·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[6px] w-7 h-7 shrink-0 tl-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} transition={{ duration: 0.22 }} className="block w-full h-px bg-[var(--color-foreground)]" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }} transition={{ duration: 0.22 }} className="block w-full h-px bg-[var(--color-foreground)]" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} transition={{ duration: 0.22 }} className="block w-full h-px bg-[var(--color-foreground)]" />
          </button>

        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-background)] flex flex-col px-8 pt-28 pb-12 md:hidden"
          >
            <nav className="flex-1 flex items-start">
              <ul className="list-none p-0 m-0 flex flex-col gap-4" style={{ ...navStyle, fontSize: "2.5rem", lineHeight: 1.2 }}>
                <li>
                  <a href="#work" className="hover:opacity-50 transition-opacity" onClick={(e) => handleNavClick(e, "#work")}>
                    {t.header.nav.work}
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:opacity-50 transition-opacity" onClick={(e) => handleNavClick(e, "#about")}>
                    {t.header.nav.about}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:opacity-50 transition-opacity" onClick={(e) => handleNavClick(e, "#contact")}>
                    {t.header.nav.contact}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4 pt-8 border-t border-[var(--color-border)]" style={{ ...navStyle, fontSize: "0.8125rem" }}>
              {languages.map((lang, i) => (
                <span key={lang} className="flex items-center gap-4">
                  <button onClick={() => setLanguage(lang)} className="uppercase tracking-widest" style={{ opacity: language === lang ? 1 : 0.3 }}>
                    {lang}
                  </button>
                  {i < languages.length - 1 && <span style={{ opacity: 0.2 }}>·</span>}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
