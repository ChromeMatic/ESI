<script setup lang="ts">
import { motion1 } from "../VueMotions/montions"
</script>

<template>
<div class="flex flex-col space-y-2 font-TW">

  <div class="flex justify-center items-center py-4 font-TW text-white space-x-2">
     <img v-motion="motion1" class="w-full h-128" src="../assets/undraw_pair_programming_re_or4x.svg">
  </div>

  <h1 class="uppercase text-center text-6xl text-white">
    About US
  </h1>

</div>
</template>