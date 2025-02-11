<script setup lang="ts">
import HeroHeading from './HeroHeading.vue'
import PlayVideo from './PlayVideo.vue'
</script>

<template>
  <section class="wrapper">
    <img class="bg" src="/main_bg.png" alt="straw hat luffy" />
    <HeroHeading />
    <img class="gear-5" src="/gear_5_luffy.png" alt="gear 5 luffy one piece" />
    <PlayVideo />
  </section>
</template>

<style scope>
.wrapper {
  position: relative;
  overflow: hidden;
}

.bg {
  width: 100%;
}

.gear-5 {
  position: absolute;
  bottom: -100px;
  right: 0;
  animation-name: Bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes Bounce {
  0% {
    transform: translateY(0) rotate(5deg);
  }

  100% {
    transform: translateY(-50px) rotate(0deg);
  }
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
