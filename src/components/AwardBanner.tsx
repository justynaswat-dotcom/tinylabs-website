import { Link } from "react-router-dom";
import { useLanguage } from "../lib/LanguageContext";

/* Bandeau d'actualité, présent sur toutes les pages.
   Il annonce le prix et l'exposition en cours, et mène à la fiche du projet.
   Volontairement sobre : une ligne, pas de fond coloré ni d'appel à l'action,
   pour ne pas prendre le pas sur le titre de la page qui le suit. */

const texte = {
  fr: {
    prix: "Prix Fibois Île-de-France",
    suite: "Un extrait de l'exposition Marseille 2050 est présenté à la Paris Design Week, Espace Fibois, Bibliothèque Historique de la Ville de Paris, 24 rue Pavée, du 10 au 19 septembre.",
    court: "Extrait présenté à la Paris Design Week, 10–19 sept.",
    lien: "Voir le projet",
  },
  en: {
    prix: "Fibois Île-de-France Award",
    suite: "An extract from the Marseille 2050 exhibition is on show at Paris Design Week, Espace Fibois, Bibliothèque Historique de la Ville de Paris, 24 rue Pavée, 10–19 September.",
    court: "Extract on show at Paris Design Week, 10–19 Sept.",
    lien: "See the project",
  },
  pl: {
    prix: "Fibois Île-de-France Award",
    suite: "An extract from the Marseille 2050 exhibition is on show at Paris Design Week, Espace Fibois, Bibliothèque Historique de la Ville de Paris, 24 rue Pavée, 10–19 September.",
    court: "Extract on show at Paris Design Week, 10–19 Sept.",
    lien: "See the project",
  },
};

export function AwardBanner() {
  const { language } = useLanguage();
  const t = texte[language] ?? texte.en;

  return (
    <aside className="award-banner">
      <div className="award-banner-inner">
        <span className="award-banner-prix">{t.prix}</span>
        <span className="award-banner-suite">{t.suite}</span>
        {/* Version courte pour les petits écrans, où la phrase complète
            serait tronquée en plein milieu. */}
        <span className="award-banner-court">{t.court}</span>
        <Link to="/work/marseille-2050" className="award-banner-lien">
          {t.lien}
          <span aria-hidden="true"> ↗</span>
        </Link>
      </div>
    </aside>
  );
}
