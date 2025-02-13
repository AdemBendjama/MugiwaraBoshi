<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
  <Button
    class="min-w-80 h-24 border-[5px] border-black rounded-none uppercase text-[22px] leading-8 tracking-widest font-bold"
  >
    <slot />
  </Button>
</template>
