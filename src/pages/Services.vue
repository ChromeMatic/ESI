<script setup lang="ts">
 import { motion2,glowText } from "../VueMotions/montions"
 import {UseThemeStore} from "../store/index" 

 const darkMode = UseThemeStore();

 const Services = [
   {
      name:'Personal Website',
      Description:'We can create a bountiful website for you or your website',
      img:'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80',
      contactUs:'email us: entechsoftwareinnovations@gmail.com'
   },
   {
      name:'E-commerce Website',
      Description:'',
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
            text-white transition-all hover:scale-110 space-y-2"
            >
               <h1 class="uppercase text-xl font-semibold">
                  {{ser.name}}
               </h1>

               <img class="h-72 w-full rounded-md" :src="ser.img" alt="">

               <div class="px-4 py-2">
                  <p class="text-base text-center uppercase">
                     {{ser.Description}}
                  </p>
               </div>

               <p>
                  {{ser.contactUs}}
               </p>


            </div>
         </div>

      </div>

     </div>

  </div>
</template>