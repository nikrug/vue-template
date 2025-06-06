<template>
    <div class="testimonials">
        <h2 class="testimonials__sub-title-text fade-in" lng="testimonials_subtitle">Testimonial</h2>
        <h2 class="testimonials__title-text fade-in" lng="testimonials_title">People Talk About Us</h2>
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <slider />
                </div>
                <div class="swiper-slide">
                    <slider />
                </div>
                <div class="swiper-slide">
                    <slider />
                </div>
                <div class="swiper-slide">
                    <slider />
                </div>
                <div class="swiper-slide">
                    <slider />
                </div>
                <div class="swiper-slide">
                    <slider />
                </div>
            </div>
        </div>
        <div class="testimonials__image-container">
            <img class="testimonials__overlay-image-1" src="/images/testimonials/testimonials-dots.svg">
            <img class="testimonials__overlay-image-2" src="/images/testimonials/testimonials-dots.svg">
        </div>
        <div class="testimonials__collaboration-block fade-in">
            <div class="testimonials__collaboration-image-block">
                <img class="hover-image" src="/images/testimonials/testimonials-img-hover.png" alt="Hover Testimonial Image">
                <img class="base-image" src="/images/testimonials/testimonials-img.png" alt="Base Testimonial Image">
                <div class="testimonials__image-container">
                    <img class="testimonials__overlay-image-3" src="/images/testimonials/testimonials-dots-thick.svg">
                    <img class="testimonials__overlay-image-4" src="/images/testimonials/testimonials-dots-orange.svg">
                </div>
            </div>
            <div class="testimonials__collaboration-text-block">
                <p class="testimonials__collaboration-title-text" lng="testimonials_colaboration_title">Interesting Collaboration With Us?</p>
                <p class="testimonials__text" lng="testimonials_colaboration_text">Help you to reach your business goal</p>
                <Popup customClass="header__button-start style-button" buttonText="Get Started"></Popup>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import slider from '@entities/slider/ui/slider.vue';
import Popup from 'src/widgets/mainHeader/popUp/ui/popup.vue';

onMounted(() => {
    const Swiper = (window as any).Swiper;

    if (Swiper) {
        const swiper = new Swiper('.swiper', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1244: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
            },
        });
    } else {
        console.error('Swiper not loaded');
    }
});
</script>

<style lang="scss" scoped>
@import './style.scss';

.swiper{
    width: 100%;
    max-width: 1400px;
}
</style>
