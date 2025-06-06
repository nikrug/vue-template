<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        :to="ROUTES.MAIN"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import { ROUTES } from '@shared/lib/routes';
</script>
