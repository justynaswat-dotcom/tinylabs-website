import { Link } from "react-router-dom";
import { useLanguage } from "../lib/LanguageContext";

/* Bandeau d'actualité, présent sur toutes les pages.
   Il annonce le prix et l'exposition en cours, et mène à la fiche du projet.
   Volontairement sobre : une ligne, pas de fond coloré ni d'appel à l'action,
   pour ne pas prendre le pas sur le titre de la page qui le suit. */

/* La tête du bandeau annonce d'abord où l'on est — « Trouvez-nous à la Paris
   Design Week » — et non plus le nom du prix : c'est l'évènement en cours qui
   situe le studio, le prix vient ensuite dans la phrase. L'adresse directe
   invite à venir, là où le nom du studio ne faisait que constater. */
const texte = {
  fr: {
    tete: "Trouvez-nous à la Paris Design Week",
    suite: "Un extrait de Marseille 2050, prix Fibois Île-de-France, à l'Espace Fibois, Bibliothèque Historique de la Ville de Paris, 24 rue Pavée, du 10 au 19 septembre.",
    court: "Extrait de Marseille 2050, Espace Fibois, 10–19 sept.",
    lien: "Voir le projet",
  },
  en: {
    tete: "Find us at Paris Design Week",
    suite: "An extract from Marseille 2050, Fibois Île-de-France Award, at Espace Fibois, Bibliothèque Historique de la Ville de Paris, 24 rue Pavée, 10–19 September.",
    court: "Extract from Marseille 2050, Espace Fibois, 10–19 Sept.",
    lien: "See the project",
  },
  pl: {
    tete: "Znajdź nas na Paris Design Week",
    suite: "Fragment wystawy Marsylia 2050, nagroda Fibois Île-de-France, w Espace Fibois, Bibliothèque Historique de la Ville de Paris, 24 rue Pavée, 10–19 września.",
    court: "Fragment wystawy Marsylia 2050, Espace Fibois, 10–19 września",
    lien: "Zobacz projekt",
  },
};

export function AwardBanner() {
  const { language } = useLanguage();
  const t = texte[language] ?? texte.en;

  return (
    <aside className="award-banner">
      <div className="award-banner-inner">
        <span className="award-banner-prix">{t.tete}</span>
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
