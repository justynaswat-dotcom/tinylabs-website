
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";

  // Polices auto-hébergées (RGPD) : servies depuis notre domaine, plus aucun
  // appel à fonts.googleapis.com, donc plus aucune IP visiteur transmise à
  // Google. Versions variables : un seul fichier couvre toutes les graisses.
  // Fontsource découpe par alphabet via unicode-range : un visiteur français
  // ne télécharge que le latin (~120 ko pour les trois familles).
  import "@fontsource-variable/inter";   // corps de texte  → var(--font-sans)
  import "@fontsource-variable/syne";    // titrage         → var(--font-grotesk)
  import "@fontsource-variable/dm-sans"; // navigation/logo → var(--font-nav)

  import "./index.css";
  // Feuille écrite à la main : index.css est un instantané compilé, les
  // nouvelles classes utilitaires n'y existent pas (voir l'en-tête du fichier).
  import "./styles/project-page.css";

  createRoot(document.getElementById("root")!).render(<App />);
  