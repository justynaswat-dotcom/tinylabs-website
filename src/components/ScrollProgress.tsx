import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      // tl-progress la fait passer sous le bandeau d'actualité, qui occupe
      // le haut de l'écran (voir project-page.css).
      className="tl-progress fixed top-0 left-0 right-0 h-[1px] bg-stone-900 origin-left z-50"
      style={{ scaleX }}
    />
  );
}
