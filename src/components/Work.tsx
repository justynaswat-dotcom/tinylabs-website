import { useState } from "react";
import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../lib/LanguageContext";
const projectImages = [
  "/images/project-1.jpg",
  "/images/project-2.jpg",
  "/images/project-3.jpg",
  "/images/project-4.jpg",
  "/images/project-6.jpg",
  "/images/project-7.jpg",
  "/images/project-8.jpg",
  "/images/project-9.jpg",
];

const typologies = ["All", "Research", "Objects", "Spatial", "Consulting"];

// ⚠️ Tableau positionnel : chaque entrée correspond au projet de MÊME INDEX
// dans t.work.projects (translations.ts). Réordonner ou insérer un projet
// là-bas décale toutes les typologies et toutes les images. Les commentaires
// ci-dessous servent de garde-fou.
const projectTypologies = [
  "Research",   // 0 Systemic Forms
  "Research",   // 1 Material Archives
  "Spatial",    // 2 Scale & Proportion
  "Consulting", // 3 Studio Practice
  "Spatial",    // 4 Exhibition M2050
  "Objects",    // 5 Maquette Posidonie
  "Objects",    // 6 Maison Modèle
  "Spatial",    // 7 La Rue
];

export function Work() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = t.work.projects
    .map((project, i) => ({ ...project, imageUrl: projectImages[i], index: i, typology: projectTypologies[i] }))
    .filter(p => activeFilter === "All" || p.typology === activeFilter);

  return (
    <section id="work" className="px-6 md:px-12 py-32 md:py-40">
      <div className="max-w-[1800px] mx-auto">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <p className="label mb-6">{t.work.sectionLabel}</p>
              <h2 className="max-w-2xl">
                {t.work.sectionTitle}
              </h2>
            </div>

            {/* Typology filter */}
            <div className="flex flex-wrap gap-2">
              {typologies.map(type => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className="label px-4 py-2 border transition-all duration-300"
                  style={{
                    borderColor: activeFilter === type ? "var(--color-foreground)" : "var(--color-border)",
                    color: activeFilter === type ? "var(--color-foreground)" : "var(--color-muted)",
                    opacity: 1
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 h-px bg-[var(--color-border)]" />
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-20 lg:gap-y-32">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.index}
              title={project.title}
              category={project.category}
              year={project.year}
              description={project.description}
              imageUrl={project.imageUrl}
              index={project.index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
