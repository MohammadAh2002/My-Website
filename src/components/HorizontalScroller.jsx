import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HorizontalScroller({ children, ariaLabel = "scrollable content" }) {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-4 flex justify-end gap-2">
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Scroll left"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Scroll right"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div
        ref={trackRef}
        aria-label={ariaLabel}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
      >
        {children}
      </div>
    </div>
  );
}
