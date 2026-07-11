import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function Card({
  children,
  className = "",
  hover = true,
  onClick,
  as = "div",
  ...props
}) {
  const MotionTag = motion[as] || motion.div;
  const clickable = typeof onClick === "function";

  return (
    <MotionTag
      onClick={onClick}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick(e);
              }
            }
          : undefined
      }
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      className={cn(
        "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-colors duration-300",
        hover && "hover:border-accent/50 dark:hover:border-accent/50",
        clickable && "cursor-pointer",
        className
      )}
      whileHover={
        hover
          ? { y: -6, boxShadow: "0 20px 40px -12px rgba(118,181,186,0.25)" }
          : undefined
      }
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
