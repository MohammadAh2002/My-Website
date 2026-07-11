import { cn } from "../lib/utils";

export default function NavLink({ id, label, active, onClick }) {
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
      className={cn(
        "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
        active
          ? "text-accent"
          : "text-slate-600 hover:text-accent dark:text-slate-300"
      )}
    >
      {active && (
        <span className="absolute inset-0 -z-10 rounded-full bg-accent/10" />
      )}
      {label}
    </a>
  );
}
