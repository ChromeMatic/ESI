<script setup lang="ts">
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
         <h1 class="lg:text-5xl text-3xl text-white uppercase font-TW text-center">
               welcome to entech software innovations
         </h1>
      </div>
      
    </div>
    
    <div class="flex justify-center items-center py-4 lg:px-8 px-4">

      <div class="grid lg:grid-cols-4 grid-cols-2 lg:gap-4 gap-2 w-full">

         <div
          class="w-full h-64 rounded-md bg-innerDark text-white"
          v-for="i in 8"
         >
            test
         </div>

    </div>

    </div>

 </div>
</template>