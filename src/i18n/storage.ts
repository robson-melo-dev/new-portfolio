import { DEFAULT_LOCALE, LOCALES, type Locale } from "data/shared";

const STORAGE_KEY = "portfolio:locale";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/**
 * Reads the saved preference. Every access is guarded: `localStorage` throws
 * outright in some privacy modes, and returns null when storage is cleared.
 */
export function readStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function storeLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Preference simply does not persist; the page still works.
  }
}

/**
 * Picks a locale from the browser's language list. Any Portuguese variant
 * (pt, pt-BR, pt-PT) maps to pt-BR, since that is the only one translated.
 */
export function detectBrowserLocale(): Locale {
  const candidates =
    typeof navigator === "undefined"
      ? []
      : [...(navigator.languages ?? []), navigator.language].filter(Boolean);

  for (const candidate of candidates) {
    const tag = candidate.toLowerCase();
    if (tag.startsWith("pt")) return "pt-BR";
    if (tag.startsWith("en")) return "en";
  }

  return DEFAULT_LOCALE;
}

/** Saved preference wins over the browser's language. */
export function resolveInitialLocale(): Locale {
  return readStoredLocale() ?? detectBrowserLocale();
}
