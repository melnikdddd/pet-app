<template>
  <header class="w-full border-b border-black py-3.5">
    <content-container>
      <div class="w-full h-full py-3 flex justify-between items-center">
        <app-logo/>
        <nav class="flex gap-x-5">
          <nav-link text="Home" href="/"/>
          <nav-link text="About" href="/about"/>
          <nav-link text="Contact" href="/contact"/>
        </nav>
      </div>
    </content-container>
  </header>
</template>

<script setup lang="ts">

import AppLogo from "@/components/layouts/header/app-logo.vue";
import NavLink from "@/components/layouts/header/nav-link.vue";
import ContentContainer from "@/components/layouts/content-container.vue";
</script>
