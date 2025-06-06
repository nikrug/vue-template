<template>
  <q-layout view="lHh Lpr lFf">
    <MainHeaderComponent />
    <q-page-container>
      <router-view />
    </q-page-container>
    <MainFooterComponent />
  </q-layout>
</template>
<script setup lang="ts">
import { MainHeaderComponent } from '@widgets/mainHeader';
import { MainFooterComponent } from '@widgets/mainFooter';
</script>
