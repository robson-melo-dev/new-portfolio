import { createContext, useContext } from "react";
import { DEFAULT_LOCALE, getContent, type Locale, type PortfolioContent } from "data/portfolio";

export interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: PortfolioContent;
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  content: getContent(DEFAULT_LOCALE),
});

/** Current locale plus the setter that persists it. */
export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}

/** The localized content for the active locale — what sections render. */
export function useContent(): PortfolioContent {
  return useContext(LocaleContext).content;
}
