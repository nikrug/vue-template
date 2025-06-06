<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Мой заголовок'
  },
  textt: {
    type: String,
    default: 'Нажми меня' 
  }
});
defineEmits(['enlarge-text'])
const count = ref(0);

</script>

<template>
  <h4>{{ title}}</h4>
  <button @click="count++">{{ textt }}, {{ count }} раз.</button>
  <div class="alert-box">
    <strong>Error!</strong>
    <br/>
    <slot />
  </div>

</template>

<style scoped>
.alert-box {
  color: #666;
  border: 1px solid red;
  border-radius: 4px;
  padding: 20px;
  background-color: #f8f8f8;
}
  
strong {
	color: red;    
}

.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>