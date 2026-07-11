import { useState, useEffect } from "react";

/**
 * Tracks which section is currently in view based on scroll position.
 * @param {string[]} sectionIds - list of element ids to observe
 * @param {number} offset - pixels from the top to consider "active" (nav height)
 * @returns {string} the id of the active section
 */
export function useScrollSpy(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;
      let current = sectionIds[0] || "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }

      // Highlight last section when scrolled to the very bottom
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 4
      ) {
        current = sectionIds[sectionIds.length - 1] || current;
      }

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
