<script setup lang="ts">
 import { motion1 } from "../VueMotions/montions"
</script>

<template>
    <div class="flex flex-col space-y-2 font-TW">

     <h1 class="uppercase text-center lg:text-5xl text-4xl text-white py-4">
      contact us
     </h1>

     <div class="flex justify-center items-center py-4 font-TW text-white space-x-2">
      <img v-motion="motion1" class="w-full lg:h-128 h-64" src="../assets/contactUs.svg">
     </div>

  </div>
</template>