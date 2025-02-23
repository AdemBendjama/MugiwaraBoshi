<script setup lang="ts">
import CustomButton from '@/components/ui/button/CustomButton.vue'
import { CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Carousel from '@/components/ui/carousel/Carousel.vue'
</script>

<template>
  <div class="flex flex-row gap-16 pr-12 py-32">
    <div class="basis-2/3 relative">
      <CustomButton class="absolute -top-14 -right-10 -rotate-4 z-50">THE CREW</CustomButton>
      <Carousel
        :opts="{
          align: 'end',
          loop: true,
        }"
      >
        <CarouselContent class="-mr-4">
          <CarouselItem v-for="(_, index) in 9" :key="index" class="basis-12/14 pr-4">
            <img
              :src="`/crew/figure/crew_${index + 1}.png`"
              alt="straw hat crewmate"
              class="border-black border-2 rounded-[42px] 3xl:w-[1000px]"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
    <div class="flex flex-col gap-8 basis-1/3">
      <h1 class="text-7xl font-bold text-primary">ZORO</h1>
      <p class="font-medium">
        Roronoa Zoro: The first mate and a master swordsman, Zoro wields three swords and is known
        for his incredible strength and dedication to his own personal code of honor. He is often
        seen as the stoic and serious member of the crew, and he aims to become the world's greatest
        swordsman.
      </p>
    </div>
  </div>
</template>
