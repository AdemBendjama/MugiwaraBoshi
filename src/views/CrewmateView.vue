<script setup lang="ts">
import Footer from '@/components/sections/Footer.vue'
import CustomButton from '@/components/ui/button/CustomButton.vue'
import { useRoute } from 'vue-router'

const luffyBounties = [
  {
    bounty: '30,000,000',
    event:
      "Luffy's first bounty was 30,000,000 berries after defeating Buggy the Clown, Don Krieg, and Arlong, and causing trouble in Loguetown.",
  },
  {
    bounty: '100,000,000',
    event:
      "Luffy's bounty increased to 100,000,000 berries following his involvement in the events of the Alabasta Arc, where he took down the Shichibukai Crocodile and exposed the Baroque Works organization.",
  },
  {
    bounty: '300,000,000',
    event:
      'The bounty jumped to 300,000,000 berries after the Enies Lobby Arc, where he declared war against the World Government to rescue Nico Robin.',
  },
  {
    bounty: '500,000,000',
    event:
      "Luffy's bounty increased to 500,000,000 berries following the Dressrosa Arc, where he defeated Donquixote Doflamingo alongside Trafalgar Law and exposed his crimes, leading to the downfall of the Shichibukai system.",
  },
  {
    bounty: '1,500,000,000',
    event:
      "For being recognized as the sworn brother to the Revolutionary Army's second-in-command and the leader of the Straw Hat Grand Fleet, perpetrating the events on Whole Cake Island, and defeating Charlotte Cracker and Charlotte Katakuri, his bounty was raised to 1,500,000,000 berries.",
  },
  {
    bounty: '3,000,000,000',
    event:
      "For making Wano Country one of his territories, leading the Raid on Onigashima, being involved in the defeat of the Emperors Charlotte Linlin and Kaidou, and the awakening of the Gomu Gomu no Mi, his bounty was raised to 3,000,000,000, and he was officially recognized as one of the Four Emperors. By mistake, Luffy got a new wanted poster showing his awakened form and still containing the 'D.' in his name, which was intended to be removed.",
  },
]

const route = useRoute()
const id = route.params.id
</script>
<template>
  <div
    :style="{ backgroundImage: `url('/crew/background/bg_${id}.jpg')` }"
    class="bg-cover bg-top bg-no-repeat pt-24"
  >
    <div
      class="bg-white text-black 3xl:w-[1440px] 3xl:mx-auto mx-24 mb-24 px-44 pt-9 pb-11 flex flex-col items-center relative"
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
      <div class="flex flex-col gap-7 justify-center pt-32 w-full">
        <div class="grid grid-cols-2">
          <div
            v-for="(item, index) in luffyBounties"
            :key="index"
            class="w-full col-span-2 flex min-h-40 relative"
            :class="
              index === luffyBounties.length - 1
                ? 'justify-center'
                : index % 2 === 0
                  ? 'justify-end'
                  : 'justify-starts'
            "
          >
            <div class="w-96 flex flex-col gap-1">
              <div
                class="flex gap-1"
                :class="index === luffyBounties.length - 1 && 'justify-center mt-28'"
              >
                <h1 class="text-primary font-semibold">
                  {{ item.bounty.toLocaleString() }}
                </h1>
                <img src="/Berries.svg" alt="berries one piece currency" />
              </div>
              <p class="font-medium text-sm text-justify">{{ item.event }}</p>
            </div>
            <div
              v-if="index !== luffyBounties.length - 1"
              class="absolute top-1 left-0 right-0 mx-auto w-1 h-full bg-black"
            />
            <div class="absolute top-0 left-0 right-0 mx-auto bg-black w-3 h-3 rounded-full" />
          </div>
        </div>
      </div>
      <img src="/to_be_continued.png" alt="One piece to be continued" class="pt-8" />
    </div>
    <div class="bg-black/70 backdrop-blur-md">
      <Footer />
    </div>
  </div>
</template>
