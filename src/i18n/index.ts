import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import vi from "./vi";
import en from "./en";
import partnerReadyOverrides from "./partner-ready-overrides";

export type AppLanguage = "vi" | "en";

type Dictionary = Record<string, unknown>;

function mergeDeep<T extends Dictionary>(base: T, override: Dictionary): T {
  const output: Dictionary = { ...base };

  for (const [key, value] of Object.entries(override)) {
    const current = output[key];
    const canMerge =
      value !== null &&
      current !== null &&
      typeof value === "object" &&
      typeof current === "object" &&
      !Array.isArray(value) &&
      !Array.isArray(current);

    output[key] = canMerge
      ? mergeDeep(current as Dictionary, value as Dictionary)
      : value;
  }

  return output as T;
}

const viResource = mergeDeep(vi as unknown as Dictionary, partnerReadyOverrides.vi as unknown as Dictionary);
const enResource = mergeDeep(en as unknown as Dictionary, partnerReadyOverrides.en as unknown as Dictionary);

if (!i18n.isInitialized) {
  const chain = i18n.use(initReactI18next);
  if (typeof window !== "undefined") {
    chain.use(LanguageDetector);
  }
  chain.init({
    resources: {
      vi: { translation: viResource },
      en: { translation: enResource },
    },
    fallbackLng: "vi",
    supportedLngs: ["vi", "en"],
    lng: typeof window === "undefined" ? "vi" : undefined,
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
    returnObjects: true,
  });
}

export default i18n;
