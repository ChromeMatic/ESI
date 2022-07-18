<script setup lang="ts">
 import {motion1,motion2,motion3,glowText,slideLeft,slideRight} from "../VueMotions/montions"
 import { useRouter } from "vue-router";

 const nav = useRouter();
 function toServices(){ nav.push('/services')}
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
         class="lg:text-6xl text-3xl text-white uppercase font-TW text-center rounded-md">
               welcome to entech software innovations
         </h1>
      </div>
      
    </div>
    
    <div class="flex flex-col justify-center items-center py-4 lg:px-8 px-4">

      <h1 class="text-5xl uppercase text-white font-TW lg:py-16 py-8">
        who we are
      </h1>

      <div  class="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 w-full">

         <div
          v-motion="slideLeft"
          class="w-full py-2 rounded-md bg-innerDark flex flex-col justify-center items-center text-white"
         >
          <img v-motion="motion1" src="../assets/undraw_code_inspection_bdl7.svg" class="w-full h-60" alt="">
          <div class="w-full py-4 px-8 flex flex-col space-y-4 justify-center items-center font-TW">
            <h1 class="uppercase text-2xl">What we do</h1>
            <p class="uppercase text-center">
              here at ESI we offer a wide range software solutions for your bushiness.
            </p>
            <button
              @click="toServices" 
              class="uppercase font-TW bg-transparent text-indigo-500 font-semibold 
              hover:text-white py-2 px-16 border border-indigo-500 hover:border-white 
              rounded-md transition-all"
            >
              learn more
            </button>
          </div>
         </div>

         <div
          class="w-full py-2 rounded-md bg-innerDark flex flex-col justify-center items-center text-white"
         >
          <img v-motion="motion2" src="../assets/undraw_dev_productivity_re_fylf.svg" class="w-full h-60" alt="">
          <div class="w-full py-4 px-8 flex flex-col space-y-4 justify-center items-center">
            <h1 class="uppercase text-2xl">web development</h1>
            <p class="uppercase text-center">
              here at ESI we offer a wide range software solutions for your bushiness.
            </p>
             <button
             @click="toServices"  
              class="uppercase font-TW bg-transparent text-indigo-500 font-semibold 
              hover:text-white py-2 px-16 border border-indigo-500 hover:border-white 
              rounded-md transition-all"
            >
              learn more
            </button>
          </div>
         </div>

         <div
          v-motion="slideRight"
          class="w-full py-2 rounded-md bg-innerDark flex flex-col justify-center items-center text-white"
         >
          <img 
           src="../assets/undraw_server_down_s-4-lk.svg" 
           class="w-full h-60"
           v-motion="motion3"
          >
          <div class="w-full py-4 px-8 flex flex-col space-y-4 justify-center items-center font-TW">
            <h1 class="uppercase text-2xl">Management</h1>
            <p class="uppercase text-center">
              leave the heavy lifting to us, we will take care of your website and online affairs.
            </p>
             <button 
             @click="toServices" 
              class="uppercase font-TW bg-transparent text-indigo-500 font-semibold 
              hover:text-white py-2 px-16 border border-indigo-500 hover:border-white 
              rounded-md transition-all"
            >
              learn more
            </button>
          </div>
         </div>

      </div>

    </div>

 </div>
</template>