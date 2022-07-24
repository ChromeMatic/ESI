<script setup lang="ts">
 import {motion1,motion2,motion3,glowText,slideLeft,slideRight} from "../VueMotions/montions"
 import { useRouter } from "vue-router";
 import {UseThemeStore} from "../store/index" 

 const darkMode = UseThemeStore();
 const nav = useRouter();
 function toServices(){ nav.push('/services')}
 function toAboutUs(){nav.push('/about')}
</script>

<template>
 <div class="">

    <div class="relative lg:h-160 h-96 w-full bg-cover bg-center">
      <img 
       src="../assets/code.webp" 
       class="absolute inset-0 w-full h-full object-cover "
      >
      <div
       :class="darkMode.isDark ? 'transition-all bg-innerDark':' bg-darkPurple' " 
       class="absolute inset-0 bg-opacity-80"
      ></div>
      <div class="flex flex-col h-full items-center space-y-4 justify-center relative">
         <h1 
         v-motion="glowText"
         class="lg:text-6xl text-3xl text-white uppercase font-TW text-center">
            welcome to entech software innovations
         </h1>
         <p class="text-white capitalize font-TW text-center text-2xl">
           need a website for you or your bushiness? no worry
           leave the heavy lifting to us.
         </p>
      </div>
      
    </div>
    
    <div class="flex flex-col justify-center items-center py-4 lg:px-8 px-4">

      <h1 class="text-5xl uppercase text-white font-TW lg:py-16 py-8">
       What we do
      </h1>

      <div  class="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 w-full">

         <div
          v-motion="slideLeft"
          :class="darkMode.isDark ? 'bg-innerDark transition-all':'transition-all bg-purple-900' "
          class="w-full py-2 rounded-md flex flex-col justify-center items-center
          text-white"
         >
          <img v-motion="motion1" src="../assets/undraw_code_inspection_bdl7.svg" class="w-full h-60" alt="">
          <div class="w-full py-4 px-8 flex flex-col space-y-4 justify-center items-center font-TW">
            <h1 class="uppercase text-2xl">What we do</h1>
            <p class="uppercase text-center">
              here at ESI we offer a wide range software solutions for your bushiness,
              form website development to app development.
            </p>
            <button
              @click="toServices"
              :class="darkMode.isDark ? 'text-indigo-500 border-indigo-500':'text-green-500 border-green-500' " 
              class="uppercase font-TW bg-transparent  font-semibold 
              hover:text-white py-2 px-16 border  hover:border-white 
              rounded-md transition-all"
            >
              learn more
            </button>
          </div>
         </div>

         <div
          :class="darkMode.isDark ? 'bg-innerDark transition-all':'transition-all bg-purple-900' "
          class="w-full py-2 rounded-md flex flex-col justify-center items-center text-white"
         >
          <img v-motion="motion2" src="../assets/undraw_dev_productivity_re_fylf.svg" class="w-full h-60" alt="">
          <div class="w-full py-4 px-8 flex flex-col space-y-4 justify-center items-center">
            <h1 class="uppercase text-2xl">web development</h1>
            <p class="uppercase text-center">
              here at ESI we can develop a website for or your bushiness. Need an online store to
              sell to your customers, don't worry we can build that for you.
            </p>
             <button
             @click="toServices" 
             :class="darkMode.isDark ? 'text-indigo-500 border-indigo-500':'text-green-500 border-green-500' " 
              class="uppercase font-TW bg-transparent font-semibold 
              hover:text-white py-2 px-16 border hover:border-white 
              rounded-md transition-all"
            >
              learn more
            </button>
          </div>
         </div>

         <div
          v-motion="slideRight"
          :class="darkMode.isDark ? 'bg-innerDark transition-all':'transition-all bg-purple-900' "
          class="w-full py-2 rounded-md flex flex-col justify-center items-center text-white"
         >
          <img 
           src="../assets/undraw_server_down_s-4-lk.svg" 
           class="w-full h-60"
           v-motion="motion3"
          >
          <div class="w-full py-4 px-8 flex flex-col space-y-4 justify-center items-center font-TW">
            <h1 class="uppercase text-2xl">Management</h1>
            <p class="uppercase text-center">
              There is no need for you to stress yourself over the day to day management of your websites
              leave that to us. We will ensure that your website is always running in tip-top shape.
            </p>
             <button 
              @click="toServices"
              :class="darkMode.isDark ? 'text-indigo-500 border-indigo-500':'text-green-500 border-green-500' " 
              class="uppercase font-TW bg-transparent font-semibold 
              hover:text-white py-2 px-16 border hover:border-white 
              rounded-md transition-all"
            >
              learn more
            </button>
          </div>
         </div>

      </div>

      <div class="flex flex-col justify-center items-center space-y-4 py-4 lg:px-8 px-4 lg:mt-12 mt-4">

        <h1 class="text-5xl uppercase text-white font-TW lg:py-4 py-4">
          Get to Know us
        </h1>
        
        <div
          :class="darkMode.isDark ? 'bg-innerDark ' : 'bg-purple-900' "
          class="rounded-md lg:py-4 py-2 lg:px-8 px-4 shadow-lg text-white"
          v-motion="motion1"
        >
          <p 
           class="font-TW  text-lg lg:tracking-wide tracking-normal leading-loose subpixel-antialiased text-justify"
          >
            Hello, and welcome to ESI (Entech Software Innovations). We are a startup tech 
            company located in the beautiful island of Jamaica. We are recent graduates of Northern 
            Caribbean University. Our fields of study range from Computer Science to Computer information 
            Systems. We are a diverse team with unique skills ranging form web development to app development
            and Software Security, along with UI designers. We are a young and talented team with real world 
            experiences.
          </p>
        </div>

        <button
         @click="toAboutUs"
         :class="darkMode.isDark ? 'text-indigo-500 border-indigo-500':'text-green-500 border-green-500' " 
         class="uppercase font-TW bg-transparent font-semibold 
         hover:text-white py-2 px-16 border hover:border-white rounded-md transition-all" 
        >
          meet the team
        </button>

      </div>

    </div>

 </div>
</template>