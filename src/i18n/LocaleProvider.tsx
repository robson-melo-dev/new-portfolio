import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { getContent, type Locale } from "data/portfolio";
import { LocaleContext } from "i18n/context";
import { resolveInitialLocale, storeLocale } from "i18n/storage";

interface LocaleProviderProps {
  children: ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(resolveInitialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    storeLocale(next);
  }, []);

  const content = getContent(locale);

  // Keep the document in sync: `lang` drives screen-reader pronunciation and
  // hyphenation, and the title is what shows in the tab and in search results.
  useEffect(() => {
    document.documentElement.lang = content.htmlLang;
    document.title = content.meta.title;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", content.meta.description);
  }, [content]);

  const value = useMemo(() => ({ locale, setLocale, content }), [locale, setLocale, content]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
