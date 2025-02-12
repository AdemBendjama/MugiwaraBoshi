<script setup lang="ts">
import HeroHeading from './HeroHeading.vue'
import PlayVideo from './PlayVideo.vue'
// import Button from './ui/button/Button.vue'
</script>

<template>
  <section class="wrapper">
    <img class="bg" src="/main_bg.png" alt="straw hat luffy" />
    <HeroHeading />
    <img class="gear-5 animate-gear-5" src="/gear_5_luffy.png" alt="gear 5 luffy one piece" />
    <PlayVideo />
  </section>
  <!-- <div class="h-96">
    <h1>Hello world</h1>
    <Button>Click me Please</Button>
  </div> -->
</template>

<style scope>
.wrapper {
  position: relative;
  overflow: hidden;
  height: 100vh;
}

.bg {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.gear-5 {
  position: absolute;
  bottom: 0;
  right: 30px;
}

@media (max-width: 1366px) {
  .gear-5 {
    width: 600px;
  }
}

@media (min-width: 1920px) {
  .gear-5 {
    width: 850px;
  }
}
</style>
