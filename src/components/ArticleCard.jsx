import { Clock, Linkedin, BookText } from "lucide-react";

export default function ArticleCard({ article }) {
  return (
    <div className="group flex h-full w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors duration-300 hover:border-accent/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-accent/50 md:w-[340px]">
      {/* Article image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-semibold leading-snug text-slate-900 dark:text-slate-100">
          {article.title}
        </h3>

        <p className="mb-4 flex-1 text-sm text-slate-600 dark:text-slate-400">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-500">
            <Clock size={14} /> {article.readTime}
          </span>

          <div className="flex items-center gap-2">
            {article.links.linkedin && (
              <a
                href={article.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read on LinkedIn"
                title="Read on LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300"
              >
                <Linkedin size={16} />
              </a>
            )}
            {article.links.medium && (
              <a
                href={article.links.medium}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read on Medium"
                title="Read on Medium"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300"
              >
                <BookText size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
