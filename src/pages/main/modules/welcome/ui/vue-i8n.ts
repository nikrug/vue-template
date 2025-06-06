// src/i18n.ts
import { createI18n } from 'vue-i18n';

// Определите ваши переводимые сообщения
const messages = {
  en: {
    welcome_title: 'Make your dream business goal come true',
    welcome_text: 'When you need us to improve your business, then come with us to help your business reach it, you just sit and feel that goal.',
    start_project: 'Start Project',
    welcome_overlay1_subtitle: 'Great Project',
    welcome_overlay1_title: '800+ Done',
    welcome_overlay2_title: 'Bill Adams',
    welcome_overlay2_subtitle: 'CEO UpTech',
    welcome_overlay2_text: '“This team is really the best in its field, I don’t regret working with them, and will come back again thanks.”',
  },
  ru: {
    welcome_title: 'Сделайте свою мечту бизнес-цели реальностью',
    welcome_text: 'Когда вам нужно, чтобы мы улучшили ваш бизнес, приходите к нам, чтобы помочь вашему бизнесу достичь его, просто сидите и чувствуйте эту цель.',
    start_project: 'Начать проект',
    welcome_overlay1_subtitle: 'Отличный проект',
    welcome_overlay1_title: '800+ завершено',
    welcome_overlay2_title: 'Билл Адамс',
    welcome_overlay2_subtitle: 'Генеральный директор UpTech',
    welcome_overlay2_text: '“Эта команда действительно лучшая в своей области, я не жалею о сотрудничестве с ними и вернусь снова, спасибо.”',
  },
};

const i18n = createI18n({
  locale: 'en', // Язык по умолчанию
  messages,
});

// Экспортируйте объект i18n
export default i18n;