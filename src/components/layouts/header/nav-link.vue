<template>
  <RouterLink :to="props.href">
      <nav-tab v-if="isTab">
        <slot/>
      </nav-tab>
  </RouterLink>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {RouterLink} from "vue-router";
import NavTab from "@/components/layouts/header/nav-tab.vue";

interface NavLinkProps {
  text: string;
  href: string;
  isTab?: boolean;
}

const props = defineProps<NavLinkProps>();

</script>

<style scoped>

</style>