<template>
  <button :class="customClass" @click="Popup = !Popup">{{buttonText}}</button>
    <Transition name="v-faid">
        <div v-show="Popup" class="popup-overlay" @mousedown="Popup = !Popup">
        <form>
          <div class="popup-content" @mousedown.stop>
            <span class="close-button" @click="Popup = !Popup">&times;</span>
            
            <p class="popup__title-text">Send us a message</p>
            <p class="popup__text">We move with make a Creative Strategy for help your business goal</p>
    
            <div :class="{ 'error-input': errors.name }" class="modal__email-name-container name-container">
              <input name="name" type="text" id="username" class="name-input" placeholder=" " required  v-model="form.name">
              <label :class="{ 'error': errors.name }" for="name">Your name</label>
              <span v-if="errors.name" class="error-name-email">{{ errors.name }}</span>
            </div>
    
            <div :class="{ 'error-input': errors.email }" class="modal__email-name-container email-container">
              <input name="email" type="email" id="email" class="email-input" placeholder=" " required v-model="form.email">
              <label :class="{ 'error': errors.email }" for="email">Email</label>
              <span v-if="errors.email" class="error-name-email">{{ errors.email }}</span>
            </div>
    
            <div :class="{ 'error-input': errors.message }" class="modal__message-container message-container">
              <textarea type="message" name="message" id="username" class="message-input" placeholder=" " required  v-model="form.message"></textarea>
              <label :class="{ 'error': errors.message }" for="message">Your Message</label>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>
            <div class="modal__attach-block">
              <input
                ref="fileInput"
                type="file"
                id="fileInput"
                @change="handleFileChange"
                style="display: none;" 
              />
              <button  @click="AttachFile" class="modal__email-password-text  modal__email-message-text">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.08 12.42L11.9 18.61C11.0899 19.33 10.0352 19.7132 8.95176 19.6814C7.86834 19.6495 6.83804 19.2048 6.07161 18.4384C5.30518 17.672 4.86055 16.6417 4.82865 15.5582C4.79676 14.4748 5.18002 13.4202 5.90004 12.61L13.9 4.60997C14.3777 4.15627 15.0113 3.9033 15.67 3.9033C16.3288 3.9033 16.9624 4.15627 17.44 4.60997C17.9054 5.08156 18.1663 5.71744 18.1663 6.37997C18.1663 7.0425 17.9054 7.67838 17.44 8.14997L10.54 15.04C10.4718 15.1135 10.3896 15.1729 10.2984 15.2147C10.2072 15.2565 10.1086 15.2799 10.0083 15.2836C9.90803 15.2874 9.808 15.2713 9.71392 15.2363C9.61985 15.2014 9.53358 15.1483 9.46004 15.08C9.3865 15.0117 9.32713 14.9296 9.28532 14.8383C9.24351 14.7471 9.22008 14.6485 9.21636 14.5483C9.21265 14.448 9.22872 14.3479 9.26367 14.2539C9.29862 14.1598 9.35175 14.0735 9.42004 14L14.55 8.87997C14.7383 8.69166 14.8441 8.43627 14.8441 8.16997C14.8441 7.90367 14.7383 7.64827 14.55 7.45997C14.3617 7.27166 14.1063 7.16588 13.84 7.16588C13.5737 7.16588 13.3183 7.27166 13.13 7.45997L8.00004 12.6C7.74334 12.8547 7.5396 13.1577 7.40057 13.4915C7.26153 13.8253 7.18995 14.1834 7.18995 14.545C7.18995 14.9066 7.26153 15.2646 7.40057 15.5984C7.5396 15.9323 7.74334 16.2353 8.00004 16.49C8.52441 16.9895 9.22085 17.2681 9.94504 17.2681C10.6692 17.2681 11.3657 16.9895 11.89 16.49L18.78 9.58997C19.5749 8.73692 20.0077 7.60864 19.9871 6.44283C19.9665 5.27703 19.4942 4.16472 18.6698 3.34024C17.8453 2.51576 16.733 2.04349 15.5672 2.02292C14.4014 2.00235 13.2731 2.43509 12.42 3.22997L4.42004 11.23C3.34124 12.4248 2.76507 13.9898 2.81157 15.5989C2.85808 17.2081 3.52367 18.7372 4.66968 19.8677C5.81568 20.9983 7.35371 21.643 8.96332 21.6677C10.5729 21.6923 12.13 21.0949 13.31 20L19.5 13.82C19.5933 13.7267 19.6672 13.616 19.7177 13.4942C19.7682 13.3724 19.7941 13.2418 19.7941 13.11C19.7941 12.9781 19.7682 12.8475 19.7177 12.7257C19.6672 12.6039 19.5933 12.4932 19.5 12.4C19.4068 12.3067 19.2961 12.2328 19.1743 12.1823C19.0525 12.1318 18.9219 12.1059 18.79 12.1059C18.6582 12.1059 18.5276 12.1318 18.4058 12.1823C18.284 12.2328 18.1733 12.3067 18.08 12.4V12.42Z" fill="var(--light-blue)"/>
                </svg>
                  Attach file
              </button>
              <ul v-if="files && files.length > 0">
                <li v-for="(file, index) in files" :key="index">{{ file.name }}</li>
              </ul>
            </div>
          <button type="submit" class="popup__button" >Send message</button>
          </div>
        </form>
        </div>
    </Transition>
  </template>
  
<script setup lang="ts">
import { ref, defineProps, watch } from 'vue';

const props = defineProps({
  customClass: {
    type: String,
    default: 'simple-btn'
  },
  buttonText: {
    type: String,
    default: 'Login'
  },
});

const Popup = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);
const files = ref<FileList | null>(null);

const form = ref({
  name: '',
  email: '',
  message:'',
});
const errors = ref({
  name: '',
  email: '',
  message:'',
});

// Валидация имени
const validateName = (name: string) => {
  if (!name) {
    return 'Name requared';
  } else if (/^[а-яА-ЯёЁ]+$/i.test(name)) {
    return '';
  }
  return '';
};

// Валидация электронной почты
const validateEmail = (email: string) => {
  if (!email) {
    return 'Email requared';
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return 'Invalid email';
  } else if (/[^a-zA-Z0-9@._-]/.test(email)) {
    return 'Mail must not contain Cyrillic';
  }
  return '';
};

// Валидация сообщения
const validateMessage = (message: string) => {
  if (!message) {
    return 'Message requared';
  }
  return '';
};

watch(
  () => form.value.name,
  (newName) => {
    errors.value.name = validateName(newName);
  }
);

watch(
  () => form.value.message,
  (newMessage) => {
    errors.value.message = validateMessage(newMessage);
  }
);

watch(
  () => form.value.email,
  (newEmail) => {
    errors.value.email = validateEmail(newEmail);
  }
);

// Обработка выбора файла
const handleFileChange = () => {
  const fileList = fileInput.value?.files || null;
  if (fileList && fileList.length > 0) {
    files.value = fileList; // Сохраняем выбранные файлы
    console.log('Файлы выбраны:', files.value);
  } else {
    files.value = null; // Сброс списка, если файлов нет
    console.log('Файлы не выбраны.');
  }
};

// Открыть диалог выбора файла
const AttachFile = () => {
  console.log("Кнопка нажата, открывается диалог выбора файла...");
  fileInput.value?.click(); // Открываем диалог выбора файла
};

// Отправка формы
const submitForm = () => {
  // Выполняем валидацию всех полей
  errors.value.name = validateName(form.value.name);
  errors.value.email = validateEmail(form.value.email);
    errors.value.message = validateMessage(form.value.message);
  // Проверяем наличие ошибок перед отправкой
  if (!errors.value.name && !errors.value.email) {
    // Логика отправки формы
    console.log('Форма отправлена:', form.value);
    if (files.value) {
      console.log('Выбранные файлы:', files.value);
    } else {
      console.log('Файлы не выбраны.');
    }
  }
};
</script>


  
<style lang="scss" scoped>
  @import './style.scss';
</style>
  