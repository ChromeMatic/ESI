<script setup lang="ts">
 import { motion1 } from "../VueMotions/montions"
 import {UseThemeStore} from "../store/index" 

 const darkMode = UseThemeStore();

 function submit(){}

</script>

<template>
    <section class="flex flex-col space-y-2 font-TW">

     <h1 class="uppercase text-center lg:text-5xl text-4xl text-white py-4">
      contact us
     </h1>

     <div class="flex justify-center items-center py-4 font-TW text-white space-x-2">
      <img v-motion="motion1" class="w-full lg:h-128 h-64" src="../assets/contactUs.svg">
     </div>

     <div class="flex flex-col space-y-4 w-full px-8 py-4 justify-center items-center">

       <h1 class="text-3xl uppercase font-TW text-white font-semibold"> 
        contact from
       </h1>

       <div class="flex lg:flex-row flex-col lg:space-y-0 space-y-4 space-x-0 lg:space-x-4">

          <input 
            :class="darkMode.getTheme ? 'bg-innerDark':'bg-purple-900'"
            class="  form-control block w-96 px-3 py-1.5 text-base 
            font-normal text-white bg-clip-padding border 
            border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:border-blue-600 focus:outline-none" 
          type="text" 
          placeholder="Please enter firstname eg. John" 
         />

          <input 
          :class="darkMode.getTheme ? 'bg-innerDark':'bg-purple-900'"
           class=" form-control block w-96 px-3 py-1.5 text-base
            font-normal text-white bg-clip-padding border 
            border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:border-blue-600 focus:outline-none"
           type="text" 
           placeholder="Please enter lastname eg. Brown" 
          />

          <input 
            :class="darkMode.getTheme ? 'bg-innerDark':'bg-purple-900'"
            class=" form-control block w-96 px-3 py-1.5 text-base
            font-normal text-white bg-clip-padding border 
            border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:border-blue-600 focus:outline-none" 
           type="number" 
           placeholder="Please enter phone number eg. 876-###-####" 
          />

       </div>

       <div class=" flex justify-center items-center w-full lg:py-4 py-2 lg:px-16 px-4">
        <textarea
         :class="darkMode.getTheme ? 'bg-innerDark':'bg-purple-900'"
          class="w-full h-52 rounded-md text-base px-8 py-2
          font-normal text-white bg-clip-padding border 
          border-solid border-gray-300 transition ease-in-out m-0
          focus:border-blue-600 focus:outline-none"
        ></textarea>
       </div>

     </div>
     
     <div class="w-full py-1 flex justify-center items-start">
        <button
         @click="submit"
         :class="darkMode.isDark ? 'text-indigo-500 border-indigo-500':'text-green-500 border-green-500' " 
         class="uppercase font-TW bg-transparent font-semibold w-96 
         hover:text-white py-2 px-16 border hover:border-white rounded-md transition-all" 
        >
          Submit
        </button>
     </div>
     
     <div class="lg:py-8 py-4"></div>

  </section>
</template>