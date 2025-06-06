<template>
  <router-link :to="ROUTES.POST.VIEW(post.id)">
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <h6 class="text-h6">{{ post.title }}</h6>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        {{ post.description }}
      </q-card-section>
    </q-card>
  </router-link>
</template>

<script setup lang="ts">
import { IPostItem } from '@entities/post';
import { ROUTES } from '@shared/lib/routes';

type TProps = {
  post: IPostItem;
};
const { post } = defineProps<TProps>();
</script>
