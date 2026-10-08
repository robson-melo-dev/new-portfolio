import type { ComponentType, SVGProps } from "react";
import { BrazilFlag, UnitedStatesFlag } from "components/icons/flags";
import type { Locale } from "data/portfolio";
import { useLocale } from "i18n/context";

interface Option {
  locale: Locale;
  /** Short code shown next to the flag. */
  code: string;
  /** Language name, always written in that language. */
  name: string;
  /** `lang` for the name, so a screen reader pronounces it correctly. */
  lang: string;
  Flag: ComponentType<SVGProps<SVGSVGElement>>;
}

const options: readonly Option[] = [
  { locale: "en", code: "EN", name: "English", lang: "en", Flag: UnitedStatesFlag },
  { locale: "pt-BR", code: "PT", name: "Português", lang: "pt-BR", Flag: BrazilFlag },
];

/**
 * Language toggle.
 *
 * The flag is paired with a language code on purpose: a flag names a country,
 * not a language, and two small flags are hard to tell apart. The code carries
 * the meaning and the flag makes it findable.
 *
 * Each option is named in its own language ("English", "Português") rather
 * than translated into the active one — the convention for language pickers,
 * since someone looking for Portuguese may not read the current language. The
 * accessible name is built from the visible text plus that name, so it still
 * contains what is on screen and voice control ("click EN") works.
 */
export function LocaleSwitch({ className = "" }: { className?: string }) {
  const { locale, setLocale, content } = useLocale();

  return (
    <div
      role="group"
      aria-label={content.localeSwitch.legend}
      className={`flex items-center gap-1 rounded-full border border-chrome-border/60 bg-black/40 p-1 ${className}`}
    >
      {options.map((option) => {
        const isActive = option.locale === locale;

        return (
          <button
            key={option.locale}
            type="button"
            lang={option.lang}
            onClick={() => setLocale(option.locale)}
            aria-pressed={isActive}
            className={`flex items-center gap-1.5 rounded-full px-2 py-1 font-code text-smaller transition-colors ${
              isActive
                ? "bg-accent-green/15 text-accent-green"
                : "text-grey/70 hover:bg-white/5 hover:text-white"
            }`}
          >
            <option.Flag
              className={`h-3.5 w-5 shrink-0 rounded-[2px] transition-opacity ${
                isActive ? "opacity-100" : "opacity-60"
              }`}
            />
            <span>{option.code}</span>
            {/* Completes the accessible name: "EN — English". */}
            <span className="sr-only"> — {option.name}</span>
          </button>
        );
      })}
    </div>
  );
}
