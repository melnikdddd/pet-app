<template>
  <RouterLink :to="props.href" class="group relative">
    <div class="text-lg font-bold">{{ props.text }}</div>
    <div
        class="absolute hidden group-hover:flex bg-white border border-black top-[25px] left-0 min-w-[150px] p-2 gap-y-1  flex-col items-start justify-start"
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
import {TabLinkItem} from "@/components/layouts/header/types/app-header.types";

interface NavLinkProps {
  text: string;
  href: string;
  tabs?: TabLinkItem[];
}

const props = defineProps<NavLinkProps>();

</script>
