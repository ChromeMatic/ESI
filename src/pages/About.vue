<script setup lang="ts">
import { motion1 } from "../VueMotions/montions"
</script>

<template>
  <div class="flex flex-col space-y-2 font-TW min-h-screen">

    <div class="flex justify-center items-center py-4 text-white space-x-2">
      <img v-motion="motion1" class="w-full lg:h-128 h-64" src="../assets/undraw_pair_programming_re_or4x.svg">
    </div>

    <h1 class="uppercase text-center lg:text-6xl text-4xl text-white font-TW">
      Meet the team
    </h1>

  </div>
</template>