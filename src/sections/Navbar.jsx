import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { navItems, profile } from "../data/portfolio";
import { useScrollSpy } from "../hooks/useScrollSpy";
import NavLink from "../components/NavLink";
import ThemeToggle from "../components/ThemeToggle";
import Button from "../components/Button";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/60 bg-white/70 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/70"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 font-mono text-lg font-bold text-slate-900 dark:text-slate-100"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-slate-950">
            MA
          </span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              id={item.id}
              label={item.label}
              active={activeId === item.id}
            />
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="hidden px-4 py-2 sm:inline-flex"
          >
            <FileDown size={16} /> Resume
          </Button>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden dark:border-slate-700 dark:text-slate-200"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex items-center justify-between px-4 py-3">
              <span className="font-mono text-lg font-bold text-slate-100">
                {profile.shortName}
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-200"
              >
                <X size={20} />
              </button>
            </div>
            <motion.ul
              className="mt-8 flex flex-col items-center gap-2 px-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  className="w-full"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-center text-lg font-medium transition-colors",
                      activeId === item.id
                        ? "bg-accent/15 text-accent"
                        : "text-slate-200 hover:bg-slate-800"
                    )}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                className="mt-4 w-full"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Button
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  <FileDown size={16} /> Download Resume
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
