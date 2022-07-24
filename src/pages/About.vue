<script setup lang="ts">
import { motion1 } from "../VueMotions/montions"
import {UseThemeStore} from "../store/index" 

 const darkMode = UseThemeStore();

 const Team = [
  {
    name:'lorenzo gunter',
    img:'/man.png'
  },
  {
    name:'Daltonett Griffiths',
    img:'/woman.png'
  },
  {
    name:'Dwayne Pusey',
    img:'/man2.png'
  },
  {
    name:'Alrick Franklin',
    img:'/gamer.png'
  },
  {
    name:'Armani Brown',
    img:'/hacker.png'
  },
  {
    name:'Michael Whyne Jr',
    img:'/man3.png'
  },
  {
    name:'Christopher Scott',
    img:'/programmer2.png'
  },
  {
    name:'Edwin Miller',
    img:'/man2.png'
  },
  {
    name:'Leo Mitchell',
    img:'/avatar.png'
  },
  {
    name:"Ackeem Millen",
    img:'/man4.png'
  },
   {
    name:"Jontae",
    img:'/man.png'
  }
 ]
</script>

<template>
  <div class="flex flex-col space-y-2 font-TW min-h-screen">

    <div class="flex justify-center items-center py-4 text-white space-x-2">
      <img v-motion="motion1" class="w-full lg:h-128 h-64" src="../assets/undraw_pair_programming_re_or4x.svg">
    </div>

    <h1 class="uppercase text-center lg:text-6xl text-4xl text-white font-TW">
      Meet the team
    </h1>

    <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-8 gap-6 lg:px-16 px-6 lg:py-8 py-4">
       
      <div
       v-for="item in Team" :key="item.name"
       :class="darkMode.isDark ? 'bg-innerDark transition-all':'transition-all bg-purple-900' "
       class="w-full py-2 rounded-md flex flex-col justify-center items-center text-white
       transition-all hover:scale-y-110 hover:scale-x-110"
      >
        <img :src="item.img" class="h-32 w-32" alt="">

        <h1>
          {{item.name}}
        </h1>
      </div>

    </div>

  </div>
</template>