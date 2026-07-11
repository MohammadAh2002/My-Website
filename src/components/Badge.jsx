import { cn } from "../lib/utils";

const variants = {
  default:
    "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  accent: "bg-accent/15 text-accent border border-accent/30",
  outline:
    "border border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-400",
};

export default function Badge({ children, variant = "default", className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium font-mono",
        variants[variant] || variants.default,
        className
      )}
    >
      {children}
    </span>
  );
}
