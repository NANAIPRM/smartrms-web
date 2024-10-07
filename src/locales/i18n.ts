/* eslint-disable import/no-named-as-default-member */
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
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

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: DETECTION_OPTIONS,
    fallbackLng: 'th',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;

// i18n.use(initReactI18next).init({
//   resources: {
//     th: { translation: th },
//     en: { translation: en },
//   },
//   // lng: 'th',
//   // fallbackLng: 'th',
//   interpolation: {
//     escapeValue: false,
//   },
// });
