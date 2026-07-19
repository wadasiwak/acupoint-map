/** Copy text to the clipboard; falls back to execCommand for older engines. */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

/** Shareable absolute URL for an in-app hash route (e.g. "#p/hegu"). */
export function shareUrl(hash: string): string {
  const { origin, pathname, search } = window.location;
  return `${origin}${pathname}${search}${hash}`;
}
