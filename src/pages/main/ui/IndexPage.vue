<template>
  <Welcome/>
  <About/>
  <Services/>
  <Portfolio/>
  <Testimonials/>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>

<script setup lang="ts">
import {Welcome} from '@pages/main/modules/welcome'
import {About} from '@pages/main/modules/about';
import {Services} from '@pages/main/modules/servieces';
import { Portfolio } from '@pages/main/modules/portfolio';
import { Testimonials } from '@pages/main/modules/testimonials';


</script>
