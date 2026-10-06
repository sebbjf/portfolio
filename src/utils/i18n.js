import en from "../../public/locales/en/translation.json";
import es from "../../public/locales/es/translation.json";

export const defaultLocale = "en";
export const locales = ["en", "es"];

const translations = { en, es };

const lookup = (dictionary, key) => key.split(".").reduce((node, part) => node?.[part], dictionary);

// Returns t(key) for a locale, e.g. t("meta.home.title"). Missing keys fall back to
// English and then to the key itself.
export function useTranslations(locale = defaultLocale) {
  return (key) => lookup(translations[locale], key) ?? lookup(translations[defaultLocale], key) ?? key;
}

// Moves a path to another locale: "/#projects" -> "/es/#projects", "/es/404/" -> "/404".
// The default locale has no prefix, and paths have no trailing slash ("/es", not "/es/").
export function localizePath(path = "/", locale = defaultLocale) {
  const base = path.replace(/^\/es(?=[/#]|$)/, "").replace(/(.)\/$/, "$1") || "/";
  if (locale === defaultLocale) return base;
  return base === "/" ? `/${locale}` : `/${locale}${base}`;
}
