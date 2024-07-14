<template>
  <div class="relative"
       @mouseleave="isVisible = false"
  >
    <RouterLink :to="url"
                @mouseenter="isVisible = true"
    >
      <fa icon="fa-user" size="lg" class="cursor-pointer p-1.5 rounded-md hover:bg-gray-300 transition-colors"/>
    </RouterLink>

    <div
        :class="isVisible ? 'block' : 'hidden' "
        class="absolute top-[32px] left-0 h-[8px] min-w-[150px]"
        @mouseenter="isVisible = true"
    >
    </div>
    <div
        @mouseenter="isVisible = true"
        @mouseleave="isVisible = false"
        :class="isVisible ? 'flex' : 'hidden' "
        class="absolute top-[40px] left-[-50px] border border-black p-2 bg-white  min-w-[150px] ">
      <div v-if="isAuth">
        ...
      </div>
      <div v-else>
        <button
            @click="showAuthModal"
            class="text-lg font-bold">Sign In
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userModule from '@/store/modules/user.module'
import {computed, ref} from "vue";
import modalWindowModule, {ModalWindow} from "@/store/modules/modal-window.module";

const isVisible = ref<boolean>(false);

const showAuthModal = () => {
  modalWindowModule.showModalWindow(ModalWindow.AUTH);

}

const isAuth = computed(() => !!(userModule.currentUser));
const url = isAuth.value ? '/user/profile' : '/auth/sign-in';

</script>

