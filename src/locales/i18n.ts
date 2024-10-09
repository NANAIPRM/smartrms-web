import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { en } from './translations/en/en';
import { th } from './translations/th/th';

const resources = {
  th: { translation: th },
  en: { translation: en },
};

const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage'],
};

const savedLanguage = localStorage.getItem('i18nextLng') || 'th';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    detection: DETECTION_OPTIONS,
    fallbackLng: savedLanguage,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
