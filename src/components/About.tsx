import { motion } from "motion/react";
import { useLanguage } from "../lib/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const pillars = [
    t.about.research,
    t.about.making,
    t.about.expression,
    t.about.relationship,
  ];

  return (
    <section id="about" className="px-6 md:px-12 py-32 md:py-40 bg-[var(--color-stone-light)]">
      <div className="max-w-[1800px] mx-auto">

        {/* Section label + headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="mb-20 md:mb-32"
        >
          <p className="label mb-8">{t.about.sectionLabel}</p>
          <h2 className="max-w-4xl">
            {t.about.headline}
          </h2>
        </motion.div>

        {/* Four pillars - 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-x-16 md:gap-x-24 gap-y-16 md:gap-y-20 mb-24 md:mb-40">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex items-baseline gap-4 mb-5">
                <span className="label shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <h3>{pillar.title}</h3>
              </div>
              <p className="pl-6 md:pl-10 text-[var(--color-muted)]">{pillar.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--color-border)] mb-20 md:mb-32" />

        {/* Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl"
        >
          <blockquote>
            <p className="p-large italic mb-6">
              {t.about.manifesto.quote}
            </p>
            <p className="label">
              {t.about.manifesto.attribution}
            </p>
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
}
