import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data/portfolio";
import { getIcon } from "../lib/icons";
import SectionHeader from "../components/SectionHeader";
import { cn } from "../lib/utils";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);

  const current = skills.find((s) => s.category === activeCategory);

  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-6">
      <SectionHeader
        eyebrow="What I work with"
        title="Skills & Technologies"
        subtitle="Filter by category to see the tools and technologies I use."
      />

      {/* Category tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {skills.map((group) => (
          <button
            key={group.category}
            onClick={() => setActiveCategory(group.category)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
              activeCategory === group.category
                ? "bg-accent text-slate-950 shadow-lg shadow-accent/25"
                : "border border-slate-200 text-slate-600 hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300"
            )}
          >
            {group.category}
          </button>
        ))}
      </div>

      {/* Skill grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {current.items.map((skill) => {
            const Icon = getIcon(skill.icon);
            return (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 p-5 text-center transition-colors duration-300 hover:border-accent/50 dark:border-slate-800 dark:hover:border-accent/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon size={24} />
                </div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
