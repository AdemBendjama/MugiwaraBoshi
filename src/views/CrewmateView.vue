<script setup lang="ts">
import Footer from '@/components/sections/Footer.vue'
import CustomButton from '@/components/ui/button/CustomButton.vue'
import { crewDetails } from '@/data/crew'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = Number(route.params.id)
const { name, story, bounties } = crewDetails[id - 1]
</script>
<template>
  <div
    :style="{ backgroundImage: `url('/crew/background/bg_${id}.jpg')` }"
    class="bg-cover bg-top bg-no-repeat pt-24"
  >
    <div
      class="bg-white text-black 3xl:w-[1440px] 3xl:mx-auto mx-24 mb-24 px-44 pt-9 pb-12 flex flex-col items-center relative"
    >
      <RouterLink to="/">
        <CustomButton class="absolute -top-12 left-6 -rotate-4">Home</CustomButton>
      </RouterLink>
      <div class="flex flex-col gap-4 items-center">
        <h1 class="font-family-abril-fatface text-[7.5rem]">WANTED</h1>
        <img
          :src="`/crew/poster/poster_${id}.gif`"
          alt=""
          class="border-4 object-cover w-[700px] h-[500px]"
        />
        <p class="font-family-abril-fatface text-6xl tracking-[32%] ml-4">DEAD OR ALIVE</p>
      </div>
      <div
        class="relative flex flex-col items-center w-[700px] mt-4 pt-4 pb-32 bg-contain bg-top bg-no-repeat"
      >
        <h1 class="font-bold text-[5rem]">{{ name }}</h1>
        <p class="font-bold text-center">
          {{ story }}
        </p>
        <img
          :src="`/crew/ability/ability_${id}.png`"
          alt="ability of crewmate"
          class="absolute -top-20 left-0 right-0 mx-auto w-[477px] h-[477px] object-contain"
        />
      </div>
      <div class="flex flex-col gap-7 justify-center pt-32 w-full">
        <div class="grid grid-cols-2">
          <div
            v-for="(item, index) in bounties"
            :key="index"
            class="w-full col-span-2 flex min-h-40 relative"
            :class="
              index === bounties.length - 1
                ? 'justify-center'
                : index % 2 === 0
                  ? 'justify-end'
                  : 'justify-starts'
            "
          >
            <div class="w-96 flex flex-col gap-1">
              <div
                class="flex gap-1"
                :class="index === bounties.length - 1 && 'justify-center mt-12'"
              >
                <h1 class="text-primary font-semibold">
                  {{ item.bounty }}
                </h1>
                <img src="/Berries.svg" alt="berries one piece currency" />
              </div>
              <p class="font-medium text-sm text-justify">{{ item.event }}</p>
            </div>
            <div
              v-if="index !== bounties.length - 1"
              class="absolute top-1 left-0 right-0 mx-auto w-1 h-full bg-black"
            />
            <div class="absolute top-0 left-0 right-0 mx-auto bg-black w-3 h-3 rounded-full" />
          </div>
        </div>
      </div>
      <img src="/to_be_continued.png" alt="One piece to be continued" class="mt-32" />
    </div>
    <div class="bg-black/70 backdrop-blur-md">
      <Footer />
    </div>
  </div>
</template>

<!-- :style="{ backgroundImage: `url('/crew/ability/ability_${id}.png')` }" -->
