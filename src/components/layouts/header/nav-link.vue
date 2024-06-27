<template>
  <RouterLink :to="props.href">
    <div class="text-lg font-bold">{{ props.text }}</div>
    <div
        class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start"
        v-if="!!(tabs?.length)"
    >
      <RouterLink v-for="tab in tabs" :key="tab.href" :to="tab.href">
        {{ tab.text }}
      </RouterLink>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {RouterLink} from "vue-router";

type TabLinkItem = {
  text: string;
  href: string;
}

interface NavLinkProps {
  text: string;
  href: string;
  tabs?: TabLinkItem[];
}

const props = defineProps<NavLinkProps>();

</script>
