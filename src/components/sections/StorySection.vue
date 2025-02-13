<script setup lang="ts">
import CustomButton from '../ui/button/CustomButton.vue'
import Carousel from '../ui/carousel/Carousel.vue'
import CarouselContent from '../ui/carousel/CarouselContent.vue'
import CarouselItem from '../ui/carousel/CarouselItem.vue'
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-between">
    <Carousel class="px-7">
      <CarouselContent class="-ml-16">
        <CarouselItem
          v-for="(_, index) in 10"
          :key="index"
          class="basis-1/5 py-9 pl-16 flex justify-center"
        >
          <img :src="`/crew/avatars/crew_${index + 1}.jpg`" alt="crew member of straw pirates" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <img src="/straw_hats.png" alt="straw hats logo skulls" />
    <div class="relative w-full h-[350px] flex items-center justify-center px-80">
      <CustomButton class="absolute -top-12 left-36 -rotate-1">The Story</CustomButton>
      <p
        class="uppercase text-[22px] leading-8 tracking-widest font-bold text-primary-foreground text-center text-balance"
      >
        the captain Straw-hat Monkey.D.Luffy and his crew members sail out to the sea fighting the
        world.GOV and formidable pirate Enemies To find the former pirate king’s tressure The one
        piece
      </p>
      <img
        class="absolute -z-10 bottom-0 left-0 w-full object-cover"
        src="/red_bg.png"
        alt="red background"
      />
    </div>
  </div>
</template>
