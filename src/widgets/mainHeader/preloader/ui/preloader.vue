<template>
  <div class="preloader" ref="preloader">
      <div class="preloader__block">
          <div class="preloader__image-block animated-image">
              <img src="/images/header/logo-animate.svg" alt="Animated Logo">
          </div>
          <div class="preloader__text-block">
              <h2 class="slide-in header__slider-title-text">Agency</h2>
              <h2 class="slide-in header__slider-sub-title-text">Creative</h2>
          </div>
      </div>
      <div class="preloader__text-bloc-bottom">
          <div class="slide-in-bottom header__slider-text" lng="preloader_text">will help to reach your goals.</div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const preloader = ref<HTMLElement | null>(null);

onMounted(() => {
    // Задержка 6 секунд перед скрытием прелоадера
    setTimeout(() => {
        if (preloader.value) {
            preloader.value.classList.add('fade-out'); // Добавляем класс для анимации исчезновения
            
            preloader.value.addEventListener('transitionend', () => {
                preloader.value!.classList.add('none'); 
            });
        }
    }, 6000);
});
</script>

<style lang="scss" scoped>
@import './style.scss';

.preloader {
    opacity: 1;
    transition: opacity 0.5s ease; // Переход только для opacity

    // Класс для исчезновения
    &.fade-out {
        opacity: 0; // Делает элемент прозрачным
    }
    &.none{
        display: none;
    }
}
</style>