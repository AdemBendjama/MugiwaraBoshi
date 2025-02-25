<script setup lang="ts">
import CustomButton from '@/components/ui/button/CustomButton.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>
<template>
  <div
    :style="{ backgroundImage: `url('/crew/background/bg_${id}.jpg')` }"
    class="py-28 bg-cover bg-top bg-no-repeat"
  >
    <div
      class="bg-white text-black 3xl:w-[1440px] 3xl:mx-auto mx-24 px-44 pt-9 pb-11 flex flex-col items-center relative"
    >
      <RouterLink to="/">
        <CustomButton class="absolute -top-12 left-6 -rotate-4">Home</CustomButton>
      </RouterLink>
      <div class="flex flex-col gap-4 items-center">
        <h1 class="font-family-abril-fatface text-[7.5rem]">WANTED</h1>
        <img
          :src="`/crew/poster/poster_${id}.gif`"
          alt="crewmate poster"
          class="border-4 object-cover w-[700px] h-[500px]"
        />
        <p class="font-family-abril-fatface text-6xl tracking-[32%] ml-4">DEAD OR ALIVE</p>
      </div>
      <div
        :style="{ backgroundImage: `url('/crew/ability/ability_${id}.png')` }"
        class="flex flex-col items-center w-[700px] mt-4 pt-4 pb-32 bg-contain bg-top bg-no-repeat"
      >
        <h1 class="font-bold text-[5rem]">MONKEY.D.LUFFY</h1>
        <p class="font-bold text-center">
          The story follows Monkey D. Luffy, a young and enthusiastic pirate with the ability to
          stretch his body like rubber after consuming the Gomu Gomu no Mi Devil Fruit. Luffy's
          ultimate goal is to find the legendary treasure known as One Piece and become the Pirate
          King. Along his journey, he forms the Straw Hat Pirates, a diverse crew of individuals
          with their own unique abilities and backstories. Together, they explore various islands,
          encounter powerful enemies, and strive to overcome numerous challenges, all while forging
          unbreakable bonds of friendship and loyalty. Luffy's unwavering determination, sense of
          adventure, and strong sense of camaraderie have endeared him to fans worldwide, making
          "One Piece" one of the most popular and influential manga and anime series of all time.
        </p>
      </div>
    </div>
  </div>
</template>
