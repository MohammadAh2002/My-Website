import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import Badge from "./Badge";
import { cn } from "../lib/utils";

export default function TimelineItem({ experience, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-8">
      {/* Node */}
      <div className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2">
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-slate-50 shadow-[0_0_0_4px_rgba(118,181,186,0.15)] transition-shadow hover:shadow-[0_0_16px_4px_rgba(118,181,186,0.4)] dark:bg-slate-950"
        />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "ml-12 md:ml-0",
          isLeft ? "md:col-start-1 md:text-left" : "md:col-start-2"
        )}
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-accent/50 dark:border-slate-800 dark:bg-slate-900">
          <div
            className={cn(
              "mb-3 flex items-center gap-3"
            )}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <Briefcase size={18} />
            </div>
            <Badge variant="accent">{experience.period}</Badge>
          </div>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {experience.title}
          </h3>
          <p className="mb-3 text-sm font-medium text-accent">
            {experience.company}
          </p>
          <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
            {experience.description}
          </p>

          <ul
            className={cn(
              "space-y-2 text-sm text-slate-600 dark:text-slate-400",
              isLeft && "md:text-left"
            )}
          >
            {experience.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
