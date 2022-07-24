<script lang="ts" setup>
import {UseThemeStore} from "../store/index" 
const darkMode = UseThemeStore();
</script>

<template>
 <div class="lg:px-4 px-2 py-2 w-full flex flex-col space-y-1 BlurFill bg-opacity-50">
    
    <div 
     :class="darkMode.isDark ? 'bg-innerDark transition-all' : 'transition-all bg-purple-900'"
     class="rounded-md  bg-opacity-80 BlurFill w-full px-2 py-4 flex flex-col"
    >
      
      <div class="flex space-x-4 justify-center items-center w-full py-4">
         <a href="https://www.instagram.com/esi_ja876/" target="_blank">
            <img src="../assets/instagram.svg">
         </a>
         <a href="https://twitter.com/EntechSoftware" target="_blank">
            <img src="../assets/twitter.svg" alt="">
         </a>
      </div>

      <div class="flex space-x-4 justify-center items-center w-full py-4 font-TW capitalize text-white">
         <img src="../assets/phone.svg"/>
         <h1>(876)-406-9490</h1>
      </div>

       <div class="flex space-x-4 justify-center items-center w-full py-4 font-TW text-white">
         <img src="../assets/mail.svg"/>
         <h1>entechsoftwareinnovations@gmail.com</h1>
      </div>

      <hr class="w-full p-0 bg-white"/>

      <h1 class="text-center font-TW p-1 text-white uppercase mt-2">
         © 2022 ALL RIGHTS BELONG TO Entech Software Innovations
      </h1>

    </div>

 </div>
</template>

<style>
.BlurFill{backdrop-filter: blur(6px);-webkit-backdrop-filter: blur(6px)}
</style>