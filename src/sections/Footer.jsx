import { Heart } from "lucide-react";
import { footer, navItems } from "../data/portfolio";
import SocialLinks from "../components/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 md:items-center">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="flex items-center gap-2 font-mono text-lg font-bold text-slate-900 dark:text-slate-100"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-slate-950">
                MA
              </span>
              {footer.name}
            </a>
            <p className="mt-2 text-sm text-slate-500">{footer.tagline}</p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-slate-600 transition-colors hover:text-accent dark:text-slate-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex md:justify-end">
            <SocialLinks size={18} />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800">
          <p>
            © {new Date().getFullYear()} {footer.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
