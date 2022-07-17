<script setup lang="ts">
import Navbar from "./components/navbar.vue"
import FooterVue from "./components/footer.vue"
</script>

<template>
  <div class="bg-darkMode">
    <Navbar/>
    <router-view v-slot="{ Component }">
        <component v-motion-slide-top :is="Component"/>
    </router-view>
    <FooterVue/>
  </div>
</template>

