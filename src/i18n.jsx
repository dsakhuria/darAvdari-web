import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './lang/en.json';
import translationKA from './lang/ka.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ka: {
    translation: translationKA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
