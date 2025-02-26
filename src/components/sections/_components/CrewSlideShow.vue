<script setup lang="ts">
import ArrowLeft from '@/components/svgs/ArrowLeft.vue'
import ArrowRight from '@/components/svgs/ArrowRight.vue'
import Button from '@/components/ui/button/Button.vue'
import CustomButton from '@/components/ui/button/CustomButton.vue'
import { CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import Carousel from '@/components/ui/carousel/Carousel.vue'
import { ref, watch } from 'vue'
import { crewmates } from '@/data/crew'

const api = ref<CarouselApi>()

const currentCrewMate = ref(crewmates[0])

function setApi(val: CarouselApi) {
  api.value = val
}

watch(api, (api) => {
  if (!api) return

  api.on('select', (e) => {
    const currentIndex = e.selectedScrollSnap()
    currentCrewMate.value = crewmates[currentIndex]
  })
})
</script>

<template>
  <div class="flex flex-row gap-16 pr-12 py-32">
    <div class="basis-2/3 relative">
      <Carousel
        @init-api="setApi"
        :opts="{
          align: 'end',
          loop: true,
        }"
      >
        <CarouselContent class="-mr-4">
          <CarouselItem v-for="(_, index) in 9" :key="index" class="basis-12/14 pr-4">
            <RouterLink :to="`/crewmate/${index + 2}`">
              <img
                :src="`/crew/figure/crew_${index + 1}.png`"
                alt="straw hat crewmate"
                class="border-black border-2 rounded-[42px] 3xl:w-[1000px]"
              />
            </RouterLink>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <span class="absolute -top-10 left-[12%] -rotate-6 font-bold 3xl:text-8xl text-7xl"
        >海 賊</span
      >
      <CustomButton class="absolute -top-14 -right-10 -rotate-4">THE CREW</CustomButton>
      <div class="flex gap-5 absolute -bottom-8 left-[12%]">
        <Button class="rounded-full w-16 h-16 p-0 [&_svg]:size-6" v-on:click="api?.scrollPrev">
          <ArrowLeft class="mr-1" />
        </Button>
        <Button class="rounded-full w-16 h-16 p-0 [&_svg]:size-6" v-on:click="api?.scrollNext">
          <ArrowRight class="ml-1" />
        </Button>
      </div>
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-300"
        leave-to-class="opacity-0"
        mode="out-in"
      >
        <span
          :key="currentCrewMate.kanji"
          class="absolute -bottom-8 -right-[10%] 3xl:text-8xl text-7xl font-bold text-primary -rotate-8"
        >
          {{ currentCrewMate.kanji }}
        </span>
      </Transition>
    </div>
    <div class="flex flex-col gap-8 basis-1/3">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-300"
        leave-to-class="opacity-0"
        mode="out-in"
      >
        <h1 :key="currentCrewMate.name" class="3xl:text-8xl text-7xl font-bold text-primary">
          {{ currentCrewMate.name }}
        </h1>
      </Transition>
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-300"
        leave-to-class="opacity-0"
        mode="out-in"
      >
        <p :key="currentCrewMate.bio" class="font-medium 3xl:text-lg text-base">
          {{ currentCrewMate.bio }}
        </p>
      </Transition>
    </div>
  </div>
</template>
