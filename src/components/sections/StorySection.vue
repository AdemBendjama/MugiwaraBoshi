<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import CustomButton from '../ui/button/CustomButton.vue'
import type { CarouselApi } from '../ui/carousel'
import Carousel from '../ui/carousel/Carousel.vue'
import CarouselContent from '../ui/carousel/CarouselContent.vue'
import CarouselItem from '../ui/carousel/CarouselItem.vue'

const api = ref<CarouselApi>()

const currentSlide = ref(2)

let interval: number

const setApi = (val: CarouselApi) => {
  api.value = val
}

onMounted(() => {
  interval = setInterval(() => {
    if (currentSlide.value === 2) {
      currentSlide.value = 7
    } else {
      currentSlide.value = 2
    }
    api.value?.scrollTo(currentSlide.value)
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="h-screen flex flex-col gap-4 items-center justify-between">
    <Carousel
      @init-api="setApi"
      :opts="{
        loop: true,
        startIndex: currentSlide,
      }"
      class="px-7"
    >
      <CarouselContent class="-ml-16">
        <CarouselItem
          v-for="(_, index) in 10"
          :key="index"
          class="basis-1/5 py-9 pl-16 flex justify-center"
        >
          <img
            class="3xl:w-[300px] 3xl:h-[300px] 2xl:w-[230px] 2xl:h-[230px]"
            :src="`/crew/avatars/crew_${index + 1}.jpg`"
            alt="crew member of straw pirates"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <img
      class="3xl:w-96 3xl:h-32 2xl:w-72 2xl:h-24 w-64 h-20"
      src="/straw_hats.png"
      alt="straw hats logo skulls"
    />
    <div class="relative w-full h-[350px] flex items-center justify-center px-80">
      <CustomButton class="absolute -top-12 left-36 -rotate-1">The Story</CustomButton>
      <p
        class="uppercase 3xl:text-3xl 2xl:text-[22px] text-lg leading-relaxed tracking-widest font-bold text-primary-foreground text-center text-balance"
      >
        the captain Straw-hat Monkey.D.Luffy and his crew members sail out to the sea fighting the
        world.GOV and formidable pirate Enemies To find the former pirate king’s tressure The one
        piece
      </p>
      <img
        class="absolute -z-10 bottom-0 left-0 object-cover w-full h-full"
        src="/red_bg.png"
        alt="red background"
      />
    </div>
  </div>
</template>
