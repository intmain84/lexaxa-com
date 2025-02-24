<script lang="ts" setup>
import { CONTACTS } from '@/constants/contact.ts'
</script>

<template>
  <header class="text-mint relative mt-8 uppercase flex justify-between items-center container">
    <ul class="flex items-center gap-x-10">
      <li v-for="contact in CONTACTS" :key="contact.name">
        <a :href="contact.link" class="hover:text-mint py-2">{{ contact.name }}</a>
      </li>
    </ul>
    <RouterLink to="/" class="absolute left-1/2 -translate-x-1/2 hover:text-mint">
      <span class="hidden">&lbrace;</span><span>AY</span><span class="hidden">&rbrace;</span>
    </RouterLink>
    <div class="flex items-center gap-x-10">
      <nav>
        <RouterLink to="/projects" class="hover:text-mint py-2">Projects</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
