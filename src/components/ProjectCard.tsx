import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useRef } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  index: number;
}

export function ProjectCard({ title, category, year, description, imageUrl, index }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
      className="group"
    >
      <div ref={ref} className="relative aspect-[4/5] overflow-hidden bg-stone-200 mb-6">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
          style={{ y }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onLoad={() => setImageLoaded(true)}
            style={{
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.8s ease-out'
            }}
          />
        </motion.div>
      </div>

      <div className="space-y-3 pt-1">
        <div className="flex justify-between items-baseline gap-4">
          <p className="label">{category}</p>
          <p className="label shrink-0">{year}</p>
        </div>

        <h3>{title}</h3>

        <p className="text-[var(--color-muted)] pt-1">{description}</p>
      </div>
    </motion.article>
  );
}
