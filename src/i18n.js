import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from 'i18next-browser-languagedetector';



import translationEn from './locale/en.json';
import translationAR from './locale/ar.json';
import translationFR from './locale/fr.json';
import translationIT from './locale/it.json';


const resources = {
    en: {
      translation: translationEn
    },
    fr: {
      translation: translationFR
    },
    ar: {
        translation: translationAR
      },
    it: {
        translation: translationIT
      }
  };
  
  i18n
    .use(LanguageDetector)
    .use(initReactI18next) 
    .init({
      resources,
      lng: "en", 
  
      interpolation: {
        escapeValue: false 
      },
      react:{
        useSuspense: false
      }
    });
  
    export default i18n;






