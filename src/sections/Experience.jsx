import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "../data/portfolio";
import SectionHeader from "../components/SectionHeader";
import TimelineItem from "../components/TimelineItem";

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-6"
    >
      <SectionHeader
        eyebrow="My journey"
        title="Experience"
        subtitle="Roles and contributions across open-source and personal work."
      />

      <div ref={containerRef} className="relative">
        {/* Timeline track */}
        <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-200 dark:bg-slate-800 md:left-1/2">
          <motion.div
            className="h-full w-full origin-top bg-accent"
            style={{ scaleY: lineScale }}
          />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
