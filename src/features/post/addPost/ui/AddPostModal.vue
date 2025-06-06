<template>
  <div>
    <MainLoader :is-open="isPending" />
    <slot :onClick="handleOpenModal" />
    <UiModal v-model:is-open="isOpenModal">
      <q-card>
        <form @submit.prevent="handleSubmit" ref="form">
          <q-card-section>
            <div class="text-h6">Add post</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <template v-for="field in fields" :key="field.name">
              <CFormField v-if="field" :field="field" v-model="field.value" />
            </template>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              flat
              label="OK"
              color="primary"
              type="submit"
              :disable="isPending"
            />
          </q-card-actions>
        </form>
        <div v-if="isError">isError</div>
      </q-card>
    </UiModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useAddPost } from '@features/post/addPost/model';
import { MainLoader, UiModal } from '@shared/ui';
import { CFormField } from '@shared/ui/';

const isOpenModal = ref(false);

const { fields, onSubmit, onReset, isPending, isError } = useAddPost();

const handleSubmit = async () => {
  isOpenModal.value = false;
  await onSubmit();
  onReset();
};

const handleOpenModal = () => {
  onReset();
  isOpenModal.value = true;
};
</script>
