<template>
  <q-page class="posts-page">
    <div class="q-pa-md row items-start q-gutter-md">
      Post: {{ route.params.id }}
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
