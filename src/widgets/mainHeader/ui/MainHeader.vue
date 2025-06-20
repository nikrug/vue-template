<template>
  <Transition name="v-faid">
    <PreLoader/>
  </Transition>
  <q-header>
    <q-toolbar class="header">
          <HeaderLogo/>
      <q-btn class="visiblee"
        v-for="link in navMenu"
        stretch
        flat
        :label="link.label"
        :key="link.link"
        :to="link.link"
      />
      <q-space />
      <div class="lang gtranslate_wrapper"></div>
 
      <Popup customClass="simple-btn header__button" buttonText="Contact Us"></Popup>
      <HeaderDropDown/>
    </q-toolbar>
  </q-header>

</template>

<script setup lang="ts">

import { navMenu } from '../config/navMenu';
import HeaderLogo from 'src/widgets/mainHeader/headerLogo/ui/HeaderLogo.vue';
import PreLoader from 'src/widgets/mainHeader/preloader/ui/preloader.vue';
import HeaderDropDown from 'src/widgets/mainHeader/headerDropdown/ui/headerDropdown.vue'
import Popup from '../popUp/ui/popup.vue';


</script>

<style lang="scss">
@import './style.scss';
.header__button-start{
    z-index: 1;

    padding: 0.5rem 0;

    @include button-style( 9rem, 2.375rem,var(--light-blue),1px solid var(--light-blue),3rem);
    @include font-styles('Quicksand',700, .75rem, 1.125rem, var(--pure-white));
    box-shadow: 0 4px 10px #377DFF;

}


.header__button-start:hover{
    @include button-style( 9rem, 2.375rem,var(--blue),1px solid var(--blue),3rem);

}
.lang a{
  display: none;
}
  .visiblee{
    visibility: hidden;
    display: none;
  }

  .header__button{
    visibility: hidden;
  }
  @media (min-width: 1288px) {
  .header__button-start{
        @include button-style( 12.5625rem, 3rem,var(--light-blue),1px solid var(--light-blue),3rem);
        @include font-styles('Quicksand',700, 1rem, 1.125rem, var(--pure-white));
        margin-top: 0;
        margin-bottom: 0;
   
        padding: 0.8rem 0;
    }

    .header__button-start:hover{
        @include button-style(12.5625rem, 3rem,var(--blue),1px solid var(--blue),3rem);
      
    }
  .lang a{
    display: inline;
    color:var(--description-dark);
    font-size: 16px;
  }
    .visiblee{
    visibility: visible;
    display: flex;
  }
  .header__button{
    visibility: visible;
  }
  }
</style>
