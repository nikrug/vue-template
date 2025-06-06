<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  imgBk: {
    type: String,
    default:"/images/services/ellipse-blue.svg"
  },
  imgOver: {
    type: String,
    default:"/images/services/monitor.svg"
  }
});
</script>


<template>
        <a href="/project" class="servises__pannel">
            <div class="servises__image-container">
                <img :src="imgBk" class="servises__image-background" alt="Фоновое изображение">
                <img :src= "imgOver" class="servises__image-overlay" alt="Накладываемое изображение">
            </div>
            <div class="servises__pannel-text" lng="services_pannel_text_blue">{{ title}}</div>
            <div class="servises__pannel-text" lng="services_pannel_text_blue2">{{ subtitle}}</div>
        </a>

</template>

  
<style lang="scss" scoped>
@import './style.scss';
</style>