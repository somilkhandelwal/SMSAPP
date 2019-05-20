import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import textEng from './config/locale/en';
/*
  For Language Support
 */
i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    resources: { en: textEng }
  });

export default i18n;
