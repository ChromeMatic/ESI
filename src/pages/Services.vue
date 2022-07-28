<script setup lang="ts">
 import { motion2,glowText } from "../VueMotions/montions"
 import {UseThemeStore} from "../store/index" 
 import { useRouter } from "vue-router";

 const darkMode = UseThemeStore();

 const nav = useRouter();

 function toContact() { nav.push('/contact')}

 const Services = [
   {
      name:'Personal Website',
      Description:"Here at Entech we use the best possible tools and visuals to help your create that"+
                  "ideal online image. We Focus on full front-end design, illustrations and graphics. Don’t know where"+
                  "to start? Give us a call or set up a meeting We’ll help you get to where you need to be still not sure?"+
                  "Choose from a wide variety of templates.",
      img:'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80',
      contactUs:'email us: entechsoftwareinnovations@gmail.com'
   },
   {
      name:'E-commerce Website',
      Description:'Looking to establish an online brand? Or improve on the one you already have? We have a dedicated team waiting to hear from you. We make the transition from point A to point B seamless using( talk about some programming langue)',
      img:'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      contactUs:'email us: entechsoftwareinnovations@gmail.com'
   },
   {
      name:'Custom Website',
      Description:'',
      img:'https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1262&q=80',
      contactUs:'email us: entechsoftwareinnovations@gmail.com'
   }
 ]
</script>

<template>
   <div class="flex flex-col space-y-2 font-TW">
      
      <h1 v-motion="glowText" class="uppercase text-center lg:text-6xl text-4xl text-white pt-6">
        our services
      </h1>

      <div class="flex justify-center items-center lg:py-4 py-2 lg:px-0 px-2 font-TW text-white space-x-2">
         <img v-motion="motion2" class="w-full lg:h-128 h-64" src="../assets/services.svg">
      </div>
     
     <div class="px-8 py-4"> 

      <div
       class="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4"
      >
         
         <div v-for="ser in Services" :key="ser.name">
            <div 
            :class="darkMode.isDark ? 'bg-innerDark transition-all':'transition-all bg-purple-900' "
            class="w-full px-2 py-2 rounded-md flex flex-col justify-center items-center
            text-white transition-all hover:scale-105 space-y-2"
            >
               <h1 class="uppercase text-xl font-semibold">
                  {{ser.name}}
               </h1>

               <img class="h-72 w-full rounded-md" :src="ser.img" alt="">

               <div class="px-4 py-2 flex justify-center items-center">
                  <p class="text-base text-justify uppercase">
                     {{ser.Description}}
                  </p>
               </div>

               
            <button
            @click="toContact"
            :class="darkMode.isDark ? 'text-indigo-500 border-indigo-500':'text-green-500 border-green-500' " 
            class="uppercase font-TW bg-transparent font-semibold 
            hover:text-white py-2 px-16 border hover:border-white rounded-md transition-all" 
            >
             get started
            </button>

            </div>
         </div>

      </div>

     </div>

     <div class="py-8 w-full"></div>

  </div>
</template>