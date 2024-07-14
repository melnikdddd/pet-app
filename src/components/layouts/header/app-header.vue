<template>
  <header class="w-full border-b border-black py-3.5">
    <content-container>
      <div class="w-full h-full py-3 flex justify-between items-center">
        <app-logo/>
        <nav class="flex gap-x-5">
          <nav-link
              text="Home"
              href="/"
          />
          <nav-link
              :tabs="prouduct1Tabs"
              text="Product1" href="/product-1"/>
          <nav-link text="Product2" href="/product-2"/>
          <nav-link text="Product3" href="/product-3"/>
        </nav>
        <nav>
        <user-profile/>
        </nav>
      </div>
    </content-container>
  </header>
</template>

<script setup lang="ts">
import AppLogo from "@/components/layouts/header/app-logo.vue";
import NavLink from "@/components/layouts/header/nav-link.vue";
import ContentContainer from "@/components/layouts/content-container.vue";
import {product1Tabs} from "@/components/layouts/header/service/nav-tabs";
import {TabLinkItem} from "@/components/layouts/header/types/app-header.types";
import UserProfile from "@/components/layouts/header/user-profile.vue";


const prouduct1Tabs: TabLinkItem[] = product1Tabs;

</script>
