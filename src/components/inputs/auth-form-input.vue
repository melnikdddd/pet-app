<template>
  <input
      class="w-full py-1 px-1.5"
      :value="model"
      @input="handleChange(($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
import {defineModel} from 'vue';


const model = defineModel();

const handleChange = (str: string): void => {
  model.value = str;
}


</script>