import { motion } from "motion/react";
import { useLanguage } from "../lib/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="px-6 md:px-12 py-32 md:py-40 bg-[var(--color-stone-light)]">
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="grid md:grid-cols-12 gap-12 md:gap-20 mb-24 md:mb-32">
            <div className="md:col-span-7">
              <h2 className="mb-8">
                {t.footer.headline}
              </h2>
              <p className="p-large italic text-[var(--color-muted)] mb-10">
                {t.footer.partnerLine}
              </p>
              <p className="text-[var(--color-muted)] max-w-xl">
                {t.footer.description}
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-10">
              <div className="space-y-6 md:space-y-10">
                <div>
                  <p className="label mb-3">{t.footer.email}</p>
                  <a href="mailto:hello@tinylabs.one">
                    hello@tinylabs.one
                  </a>
                </div>

                <div>
                  <p className="label mb-3">Website</p>
                  <a href="https://tinylabs.one" target="_blank" rel="noopener noreferrer">
                    tinylabs.one
                  </a>
                </div>

                <div>
                  <p className="label mb-3">{t.footer.phone}</p>
                  <a href="tel:+33956851165">{t.footer.phoneValue}</a>
                </div>

                <div>
                  <p className="label mb-3">{t.footer.location}</p>
                  <p>{t.footer.locationValue}</p>
                </div>

                <div>
                  <p className="label mb-3">{t.footer.follow}</p>
                  <div className="flex gap-6">
                    <a href="https://www.instagram.com/tinylabs.one/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.youtube.com/@tinylabsone" target="_blank" rel="noopener noreferrer">YouTube</a>
                    <a href="https://fr.linkedin.com/company/tinylabs-one" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-baseline gap-6">
            <p style={{ fontFamily: "var(--font-nav)", fontSize: "0.8125rem", opacity: 0.5 }}>{t.footer.copyright}</p>
            <p style={{ fontFamily: "var(--font-nav)", fontSize: "0.8125rem", opacity: 0.5 }}>{t.footer.tagline}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
