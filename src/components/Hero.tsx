import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../lib/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-36 pb-16 md:pt-44 md:pb-20">
      <motion.div style={{ y, opacity }} className="flex-1 flex flex-col justify-between max-w-[1800px] mx-auto w-full">

        {/* Headline - full width, very large */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="max-w-5xl">
            {t.hero.headline}
          </h1>
        </motion.div>

        {/* Bottom row - mission + approach, ~3/4 width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col md:flex-row gap-8 md:gap-16 mt-16 md:mt-0 w-full md:max-w-[75%]"
        >
          <div>
            <p className="label mb-4">{t.hero.mission.title}</p>
            <p className="p-large">{t.hero.mission.text}</p>
          </div>
          <div>
            <p className="label mb-4">{t.hero.approach.title}</p>
            <p>{t.hero.approach.text}</p>
          </div>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="max-w-[1800px] mx-auto w-full mt-12 md:mt-8"
      >
        <div className="w-px h-12 bg-[var(--color-foreground)] opacity-20 ml-0" />
      </motion.div>
    </section>
  );
}
