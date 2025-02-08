<script lang="ts" setup>
import { CONTACTS } from '@/constants/contact.ts'
import { ref } from 'vue'

const lang = ref('en')

</script>

<template>
    <header class="relative font-[300] mt-8 tracking-wider uppercase flex justify-between items-center xl:mx-auto xl:max-w-[109rem]">
      <ul class="flex items-center gap-x-10">
        <li v-for="contact in CONTACTS" :key="contact.name">
          <a :href=contact.link class="hover:text-mint py-2">{{ contact.name }}</a>
        </li>
      </ul>
      <RouterLink to="/" class="absolute left-1/2 -translate-x-1/2 hover:text-mint">
        <span class="hidden">&lbrace;</span><span>Alex Yudin</span><span class="hidden">&rbrace;</span>
      </RouterLink>
      <div class="flex items-center gap-x-10">
        <nav>
          <a href="/" class="hover:text-mint py-2">Projects</a>
        </nav>
        <div class="cursor-pointer hover:text-mint py-2">
<!--          <span>En</span>-->
          <span>Ru</span>
        </div>
      </div>
    </header>
</template>

<style scoped>
</style>
