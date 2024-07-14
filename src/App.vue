<template>
  <modal-window/>
  <app-header/>
  <router-view/>
</template>

<style>

</style>
<script setup lang="ts">
import AppHeader from "@/components/layouts/header/app-header.vue";
import ModalWindow from "@/components/modal-window/modal-window.vue";
</script>