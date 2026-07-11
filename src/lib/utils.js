/**
 * Merge class name strings, filtering out falsy values.
 * Lightweight alternative to clsx/tailwind-merge for simple conditional classes.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Copy text to the clipboard. Returns a promise resolving to true on success.
 */
export async function copyToClipboard(text) {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback for older browsers / insecure contexts
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

