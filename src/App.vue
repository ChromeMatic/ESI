<script setup lang="ts">
import Navbar from "./components/navbar.vue"
import FooterVue from "./components/footer.vue"
import {UseThemeStore} from "./store/index"

const darkMode = UseThemeStore();
</script>

<template>
  <div
   :class="darkMode.isDark ? 'bg-darkMode ' 
   :'transition-all duration-100 bg-gradient-to-tl from-darkMode to-purple-900'"
  >
    <Navbar/>
    <router-view v-slot="{ Component }">
        <component v-motion-slide-top :is="Component"/>
    </router-view>
    <FooterVue/>
  </div>
</template>

