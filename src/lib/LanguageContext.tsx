import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUES: Language[] = ["fr", "en", "pl"];
const CLE = "tinylabs-langue";

/* Langue d'ouverture : le choix déjà fait par la personne s'il existe, sinon
   la première langue de son navigateur que le site parle, sinon le français.
   Le studio est à Paris ; l'anglais et le polonais restent servis d'office à
   qui les a réglés. localStorage peut être indisponible (navigation privée,
   aperçus) : on retombe alors sur le navigateur, sans erreur. */
function langueInitiale(): Language {
  try {
    const choisie = localStorage.getItem(CLE) as Language | null;
    if (choisie && LANGUES.includes(choisie)) return choisie;
  } catch { /* stockage indisponible */ }
  const preferees = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of preferees) {
    const code = tag?.slice(0, 2).toLowerCase() as Language;
    if (LANGUES.includes(code)) return code;
  }
  return "fr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(langueInitiale);

  // Le choix fait au sélecteur est retenu pour les visites suivantes.
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try { localStorage.setItem(CLE, lang); } catch { /* stockage indisponible */ }
  };

  // Répercuter la langue sur <html lang>. Sans cela l'attribut reste figé sur
  // "en" : les lecteurs d'écran prononcent le français et le polonais avec la
  // phonétique anglaise, et les moteurs indexent les trois versions comme
  // anglaises. index.html ne peut pas le faire, la langue étant choisie côté
  // client après le chargement.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
