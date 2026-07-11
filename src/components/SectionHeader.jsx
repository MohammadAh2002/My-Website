import ScrollReveal from "./ScrollReveal";
import { cn } from "../lib/utils";

export default function SectionHeader({ eyebrow, title, subtitle, centered = true }) {
  return (
    <ScrollReveal className={cn("mb-12", centered && "text-center")}>
      {eyebrow && (
        <span className="font-mono text-sm font-medium tracking-widest uppercase text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-slate-600 dark:text-slate-400 text-lg max-w-2xl",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-5 h-1 w-16 rounded-full bg-accent",
          centered && "mx-auto"
        )}
      />
    </ScrollReveal>
  );
}
