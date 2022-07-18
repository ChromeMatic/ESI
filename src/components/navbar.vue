<script setup lang="ts">
   import {ref} from 'vue'

   let ch= ref(false)
   let show= ref(false)

   interface route{name:string,to:string,}
   
   // Contains routes to different pages
   const Links:route[] = [
        {name:'home',to:'/'},
        {name:'about',to:'/about'},
        {name:'services',to:'/services'},
        {name:'contact us',to:'/contact'},
   ]
</script>
  
<template>
    <div class="lg:px-4 px-2 py-2 sticky top-0 z-50 w-full flex flex-col space-y-2 bg-darkMode BlurFill bg-opacity-50">

        <nav class="w-full px-8 py-4 rounded-md bg-innerDark text-white space-x-4 bg-opacity-80 BlurFill flex justify-between items-center">
            
            <!-- Visible on Desktop -->
            <div class="hidden md:flex">
                <h1 class="uppercase">ESI</h1>
            </div>

            <!-- Visible on Desktop -->
            <div class="hidden md:flex space-x-6 uppercase font-TW">
                <div
                class="transition-all rounded hover:text-indigo-500" 
                v-for="link in Links" 
                :key="link.name"
                >
                    <router-link :to="link.to">{{link.name}}</router-link>
                </div>
            </div>

            <!-- Visible on Mobile -->
            <button @click="show = !show" class="md:hidden">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            <!-- Visible on Mobile -->
            <div class="md:hidden">
                <h1 class="uppercase">ESI</h1>
            </div>
            
            <!-- this button changes the website theme from light to dark -->
            <button @click="ch = !ch" class="bg-darkMode rounded-md px-2 py-2">
                <div v-show="ch === false" class="transition-all duration-75">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </div>
                <div v-show="ch === true"  class="transition-all duration-75">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
            </button>

        </nav>
        
        <!-- Dorp down nav visible on mobile only-->
        <div 
        v-show="show" 
        class="w-full py-4 px-8 md:hidden flex-col space-y-2 rounded-md bg-innerDark bg-opacity-80 BlurFill justify-center items-center uppercase font-medium"
        v-motion
        :initial="{opacity: 0, x: 100,}"
        :visible="{opacity: 1, x: 0,}"
        >
            <div v-for="link in Links" :key="link.name" class="w-full flex justify-center py-1">
                <router-link class="text-white" :to="link.to">{{link.name}}</router-link>
            </div>
        </div>

    </div>
</template>

<style>
.BlurFill{backdrop-filter: blur(6px);-webkit-backdrop-filter: blur(6px)}
</style>