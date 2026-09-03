import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { ProjectPage } from "./components/ProjectPage";
import { ScrollProgress } from "./components/ScrollProgress";
import { LanguageProvider } from "./lib/LanguageContext";

function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Footer />
    </main>
  );
}

// Revenir de la fiche projet vers « /#work » doit ramener à la grille des
// travaux. Le routeur ne gère pas les ancres : on les résout à la main.
function HashScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      {/* Les liens profonds fonctionnent sur GitHub Pages : le workflow copie
          index.html en 404.html, donc /work/... sert l'application, qui lit
          ensuite l'URL. Aucun réglage serveur nécessaire. */}
      <BrowserRouter>
        <HashScroll />
        <div className="min-h-screen">
          <ScrollProgress />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/marseille-2050" element={<ProjectPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
