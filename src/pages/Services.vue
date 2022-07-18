<script setup lang="ts">
import { motion2,glowText } from "../VueMotions/montions"
</script>

<template>
   <div class="flex flex-col space-y-2 font-TW">
      
      <h1 v-motion="glowText" class="uppercase text-center lg:text-6xl text-4xl text-white pt-6">
        our services
      </h1>

      <div class="flex justify-center items-center lg:py-4 py-2 lg:px-0 px-2 font-TW text-white space-x-2">
         <img v-motion="motion2" class="w-full lg:h-128 h-64" src="../assets/services.svg">
      </div>

  </div>
</template>