<template>
  <button class="bg-blue-500 rounded-md text-slate-50 py-2 px-3">
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  text: string;
}

const props = defineProps<Props>();
</script>