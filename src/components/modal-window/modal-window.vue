<template>
  <div
      :class="ModalWindow.HIDDEN === windowState ? 'hidden' : ''"
      @click="hide()"
      class="absolute z-10  w-screen h-screen bg-opacity-70 bg-black flex items-center justify-center">
    <auth-window v-if="windowState === ModalWindow.AUTH" @click.prevent.stop/>
  </div>
</template>

<script setup lang="ts">
import ModalWindowModule, {ModalWindow} from "@/store/modules/modal-window.module";
import AuthWindow from "@/components/layouts/auth/auth-window.vue";
import {computed} from "vue";

const windowState = computed(() => ModalWindowModule.modalWindow);

const hide = () => {
  ModalWindowModule.hideModalWindow();
}
</script>

