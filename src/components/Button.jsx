import { cn } from "../lib/utils";

const variants = {
  primary:
    "bg-accent text-slate-950 hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30",
  outline:
    "border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-accent hover:text-accent bg-transparent",
  ghost:
    "text-slate-600 dark:text-slate-300 hover:text-accent hover:bg-accent/10",
};

/**
 * Polymorphic button. Renders an <a> when `href` is provided, else a <button>.
 */
export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0",
    variants[variant] || variants.primary,
    className
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
