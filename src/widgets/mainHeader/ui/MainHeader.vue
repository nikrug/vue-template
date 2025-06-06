<template>
  <Transition name="v-faid">
    <PreLoader/>
  </Transition>
  <q-header>
    <q-toolbar class="header">
          <HeaderLogo/>
      <q-btn class="visible"
        v-for="link in navMenu"
        stretch
        flat
        :label="link.label"
        :key="link.link"
        :to="link.link"
      />
      <q-space />

      <Popup customClass="simple-btn header__button" buttonText="Contact Us"></Popup>

      <HeaderDropDown/>
    </q-toolbar>
  </q-header>

</template>

<script setup lang="ts">
import './style.scss';

import { navMenu } from '../config/navMenu';
import HeaderLogo from 'src/widgets/mainHeader/headerLogo/ui/HeaderLogo.vue';
import PreLoader from 'src/widgets/mainHeader/preloader/ui/preloader.vue';
import HeaderDropDown from 'src/widgets/mainHeader/headerDropdown/ui/headerDropdown.vue'
import Popup from '../popUp/ui/popup.vue';


</script>

<style>
  .visible{
    visibility: hidden;
    display: none;
  }

  .header__button{
    visibility: hidden;
  }
  @media (min-width: 1288px) {
    .visible{
    visibility: visible;
    display: flex;
  }
  .header__button{
    visibility: visible;
  }
  }
</style>
