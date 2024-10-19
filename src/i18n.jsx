// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Import language detector
import enJSON from './locales/en/translation.json';
import arJSON from './locales/ar/translation.json';

i18n
  .use(LanguageDetector) // Use the language detector
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: enJSON },
      ar: { translation: arJSON },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Use English as fallback if translations for the current language are not available
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'], // Store the user's language preference
    },
  });

export default i18n;
