<template>
  <auth-card>
    <div class="flex flex-col w-full">
        <div class="flex">
          <button
              @click="selectTab('sign-in')"
              :class="selectedTab === 'sign-in' ? 'bg-slate-400' : 'bg-slate-300'"
              class="w-1/2 py-1 border-r border-slate-400 transition-colors rounded-tl-md">
            sign in
          </button>
          <button
              @click="selectTab('sign-up')"
              :class="selectedTab === 'sign-up' ? 'bg-slate-400' : 'bg-slate-300'"
              class="w-1/2 py-1 transition-colors rounded-tr-md">
            sign up
          </button>
        </div>
      <auth-sign-in v-if="selectedTab === 'sign-in'"/>
      <auth-sign-up v-else/>
    </div>
  </auth-card>
</template>

<script setup lang="ts">
import AuthCard from "@/components/cards/auth-card.vue";
import AuthSignIn from "@/components/layouts/auth/sign-in.vue";
import AuthSignUp from "@/components/layouts/auth/sign-up.vue";

import {ref} from "vue";

type Tab = 'sign-in' | 'sign-up';

const selectedTab = ref<Tab>('sign-in');

const selectTab = (tab: Tab): void => {
  selectedTab.value = tab;
}
</script>
