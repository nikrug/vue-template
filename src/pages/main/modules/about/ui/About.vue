<template>
    <div class="about">
      <div class="about__title-text-block fade-in">
        <h2 class="about__subtitle-text" lng="'about_subtitle'">About Us</h2>
        <h2 class="about__title-text" lng="'about_title'">Our Teammate</h2>
      </div>
  
      <div class="about__content">
        <div class="about__text-block fade-in">
          <p class="about__text" lng="'about_text'">
            We move with a Creative Strategy to help your business goals. We help to improve your income with the services we have, making your content look interesting and attracting people to your business.
          </p>
          <p class="about__text" lng="'about_text2'">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu neque tempor at ut auctor maecenas, Lorem ipsum d.
          </p>
  
          <div class="about__button-block">
            <button class="about__button-blue" lng="'about_button'">About Us</button>
            <button class="about__button-white" lng="'about_button2'">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4987 14.8966C12.1806 14.8966 15.1654 11.9118 15.1654 8.2299C15.1654 4.548 12.1806 1.56323 8.4987 1.56323C4.8168 1.56323 1.83203 4.548 1.83203 8.2299C1.83203 11.9118 4.8168 14.8966 8.4987 14.8966Z" stroke="var(--light-blue)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.16797 5.56323L11.168 8.2299L7.16797 10.8966V5.56323Z" stroke="var(--light-blue)" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <div>About Us</div>
            </button>
          </div>
        </div>
        <div class="about__image-container">
          <img class="about__overlay-image-1" src="/images/about/about-dots-orange.svg">
          <img class="about__overlay-image-2" src="/images/about/about-dots-purple.svg">
        </div>

        <img class="about__img" src="/images/about/about-pic-big.png" alt="About Us" />
      </div>
    </div>
  </template>

<style lang="scss" scoped>
@import './style.scss';
</style>

<script lang="ts">
// Файл: fadeIn.ts
document.addEventListener('DOMContentLoaded', () => {
  const fadeIns = document.querySelectorAll('.fade-in');

  if (fadeIns.length === 0) {
    console.log('Нет элементов с классом .fade-in');
    return; // Ничего не делать, элементы не найдены
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01
  };

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      console.log('Entry:', entry); // Диагностика
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  fadeIns.forEach(element => {
    observer.observe(element);
  });
});

// CSS для плавного появления
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

</script>