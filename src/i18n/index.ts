import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import vi from "./vi";
import en from "./en";

export type AppLanguage = "vi" | "en";

if (!i18n.isInitialized) {
  const chain = i18n.use(initReactI18next);
  if (typeof window !== "undefined") {
    chain.use(LanguageDetector);
  }
  chain.init({
    resources: {
      vi: { translation: vi },
      en: { translation: en },
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
