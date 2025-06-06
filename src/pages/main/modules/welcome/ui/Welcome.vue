<template>
    <header class="welcome">
      <balloon/>
      <balloon/>
      <div class="welcome__content">
          <div class="welcome__title-text-block">
            <div class="welcome__title-text" v-lng="'welcome_title'">
              Make your dream business goal come true
            </div>
            <div class="welcome__text-block">
              <p class="welcome__title-text-gray" v-lng="'welcome_text'">
                when you need us to improve your business, then come with us to help your business reach it, you just sit and feel that goal.
              </p>
              <Popup customClass="header__button-start style-button" buttonText="Start Project"></Popup>
            </div>
          </div>
          <div class="image-container">
            <img class="welcome__image overlay-image" src="/images/header/header-bk-big.png" alt="Background" />
            
            <div class="overlay-image overlay2">
              <img class="img2" src="/images/header/star.svg" alt="Star" />
              <div class="welcome__overlay1-subtitle" v-lng="'welcome_overlay1_subtitle'">Great Project</div>
              <div class="text-container">
                <p class="welcome__overlay1-title" v-lng="'welcome_overlay1_title'">800+ Done</p>
              </div>
            </div>
  
            <div class="overlay-image overlay3">
              <img class="img" src="/images/header/bill2.svg" alt="Bill Adams" />
              <div class="txt">
                <div class="welcome__overlay2-title" v-lng="'welcome_overlay2_title'">Bill Adams</div>
                <div class="welcome__overlay2-subtitle" v-lng="'welcome_overlay2_subtitle'">CEO UpTech</div>
              </div>
              <div class="text-container">
                <p class="welcome__overlay2-text" v-lng="'welcome_overlay2_text'">
                  “This team is really the best in its field, I don't regret working with them, and will come back again thanks.”
                </p>
              </div>
            </div>
  
            <img class="underlay1" src="/images/header/blue-dots.svg" alt="Blue Dots" />
            <img class="underlay2" src="/images/header/orange-dots.svg" alt="Orange Dots" />
          </div>
        </div>
    </header>
  
  </template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import Popup from 'src/widgets/mainHeader/popUp/ui/popup.vue';
import  balloon  from 'src/widgets/mainHeader/balloons/ui/balloons.vue';

export default defineComponent({
  components: {
    Popup,
    balloon,
  },
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>