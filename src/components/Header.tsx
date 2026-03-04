import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "../lib/LanguageContext";
import { Language } from "../lib/translations";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const languages: Language[] = ['en', 'fr', 'pl'];
  const navStyle = { fontFamily: "'DM Sans', sans-serif", fontWeight: 400 };

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-12 py-10 md:px-16 md:py-11 bg-[var(--color-background)]/80 backdrop-blur-sm"
      >
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">

          {/* Logo */}
          <h1
            className="tracking-[-0.02em] overflow-hidden m-0"
            style={{ ...navStyle, fontSize: "1.375rem" }}
          >
            <AnimatePresence mode="wait">
              {scrolled ? (
                <motion.span key="short" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.25 }} style={{ display: "block" }}>
                  T—HE
                </motion.span>
              ) : (
                <motion.span key="full" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.25 }} style={{ display: "block" }}>
                  TINYLABS — Hors Échelle
                </motion.span>
              )}
            </AnimatePresence>
          </h1>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-12">
            <nav>
              <ul className="flex gap-10 list-none p-0 m-0" style={{ ...navStyle, fontSize: "1.375rem" }}>
                <li><a href="#work" className="hover:opacity-50 transition-opacity" onClick={(e) => handleNavClick(e, "#work")}>{t.header.nav.work}</a></li>
                <li><a href="#about" className="hover:opacity-50 transition-opacity" onClick={(e) => handleNavClick(e, "#about")}>{t.header.nav.about}</a></li>
                <li><a href="#contact" className="hover:opacity-50 transition-opacity" onClick={(e) => handleNavClick(e, "#contact")}>{t.header.nav.contact}</a></li>
              </ul>
            </nav>

            <div className="flex items-center gap-3 pl-10 border-l border-[var(--color-border)]" style={{ ...navStyle, fontSize: "0.8125rem" }}>
              {languages.map((lang, i) => (
                <span key={lang} className="flex items-center gap-3">
                  <button
                    onClick={() => setLanguage(lang)}
                    className="uppercase tracking-widest transition-opacity"
                    style={{ opacity: language === lang ? 1 : 0.3 }}
                  >
                    {lang}
                  </button>
                  {i < languages.length - 1 && <span style={{ opacity: 0.2 }}>·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[6px] w-7 h-7 shrink-0"
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
