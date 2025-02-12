<script setup lang="ts">
import HeroHeading from './HeroHeading.vue'
import PlayVideo from './PlayVideo.vue'
// import Button from './ui/button/Button.vue'
</script>

<template>
  <section class="relative overflow-hidden h-screen">
    <img class="w-full h-screen object-cover" src="/main_bg.jpg" alt="straw hat luffy" />
    <HeroHeading />
    <img
      class="absolute bottom-0 right-24 animate-gear-5 3xl:w-[650px] 2xl:w-[550px] xl:w-[450px] w-[300px]"
      src="/gear_5_luffy.png"
      alt="gear 5 luffy one piece"
    />
    <PlayVideo />
  </section>
  <!-- <div class="h-96">
    <h1>Hello world</h1>
    <Button>Click me Please</Button>
  </div> -->
</template>
