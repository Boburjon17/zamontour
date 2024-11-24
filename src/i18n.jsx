import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uzTranslation from "./locales/uz.json";
import engTranslation from "./locales/eng.json";
import ruTranslation from "./locales/ru.json";


const language = localStorage.getItem('i18nextLng') || 'uz'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    fallbackLng: "uz",
    lng: language,
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      eng: { translation: engTranslation },
      ru: { translation: ruTranslation },
    },
  });
export default i18n;
