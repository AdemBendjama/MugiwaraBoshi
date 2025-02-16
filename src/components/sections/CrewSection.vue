<template>
  <div class="relative group hover:cursor-pointer">
    <img
      class="group-hover:hidden w-full object-cover -z-50 aspect-[2.5/1]"
      src="/mad_luffy.gif"
      alt="picture of luffy going full rage"
    />
    <img
      class="hidden group-hover:block w-full object-cover -z-50 aspect-[2.5/1]"
      src="/mad_luffy_red.gif"
      alt="picture of luffy going full rage"
    />
    <div
      class="absolute inset-0 transition-all duration-500 group-hover:bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0)_47.4%,#000000_96.35%)] pointer-events-none"
    />
    <div
      class="transition-all duration-500 opacity-0 group-hover:opacity-100 absolute bottom-14 left-0 right-0 mx-auto z-10 flex flex-col shrink-0 items-center gap-4"
    >
      <p class="font-bold text-sm">GET TO KNOW MORE ABOUT</p>
      <h1 class="font-bold text-5xl text-primary">MONKEY.D.LUFFY</h1>
    </div>
  </div>
</template>
