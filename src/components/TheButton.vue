<script setup lang="ts"></script>

<template>
  <button
    class="relative h-18 text-base px-7 bg-mint text-obsidian hover:text-fog transition-all duration-500 ease-in-out uppercase cursor-pointer group overflow-hidden"
  >
    <span class="relative z-10"><slot></slot></span>
    <div
      class="absolute -top-20 -left-10 w-[500px] h-0 bg-obsidian-light transition-all duration-500 ease-in-out rotate-0 group-hover:h-[220px] z-0 group-hover:rotate-[-20deg]"
    ></div>
  </button>
</template>

<style scoped></style>
