<script setup lang="ts">
import {motion1,motion2,motion3,glowText} from "../VueMotions/montions"
</script>

<template>
 <div class="bg-darkMode">

    <div class="relative lg:h-160 h-96 w-full bg-cover bg-center">
      <img 
       src="../assets/code.webp" 
       class="absolute inset-0 w-full h-full object-cover "
      >
      <div class="absolute inset-0 bg-innerDark bg-opacity-75"></div>
      <div class="flex h-full items-center justify-center relative">
         <h1 
         v-motion="glowText"
         class="lg:text-5xl text-3xl text-white uppercase font-TW text-center rounded-md">
               welcome to entech software innovations
         </h1>
      </div>
      
    </div>
    
    <div class="flex justify-center items-center py-4 lg:px-8 px-4">

      <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 w-full">

         <div
          class="w-full py-2 rounded-md bg-innerDark flex flex-col justify-center items-center text-white"
         >
          <img v-motion="motion1" src="../assets/undraw_code_inspection_bdl7.svg" class="w-full h-60" alt="">
          <div class="w-full py-4 flex justify-center items-center">
            <h1>Lorem</h1>
          </div>
         </div>

         <div
          class="w-full py-2 rounded-md bg-innerDark flex flex-col justify-center items-center text-white"
         >
          <img v-motion="motion2" src="../assets/undraw_dev_productivity_re_fylf.svg" class="w-full h-60" alt="">
          <div class="w-full py-4 flex justify-center items-center">
            <h1>Lorem</h1>
          </div>
         </div>

         <div
          class="w-full py-2 rounded-md bg-innerDark flex flex-col justify-center items-center text-white"
         >
          <img 
           src="../assets/undraw_server_down_s-4-lk.svg" 
           class="w-full h-60"
           v-motion="motion3"
          >
          <div class="w-full py-4 flex justify-center items-center">
            <h1>Lorem</h1>
          </div>
         </div>

      </div>

    </div>

 </div>
</template>