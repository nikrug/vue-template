import Testimonials from './ui/Testimonials.vue';
// src/main.ts
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    welcome: 'Welcome',
    goodbye: 'Goodbye'
  },
  ru: {
    welcome: 'Добро пожаловать',
    goodbye: 'До свидания'
  }
};

const i18n = createI18n({
  locale: 'en', // set default locale
  messages, // set locale messages
});


export {
  Testimonials
};