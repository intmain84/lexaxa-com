<script lang="ts" setup>
import { ref } from 'vue'

const theme = ref('light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const items = [
  {
    name: 'a',
    hasA: true,
  },
  {
    name: 'b',
    hasA: false,
  },
  {
    name: 'c',
    hasA: true,
  },
]
</script>

<template>
  <main
    :class="[theme === 'dark' ? 'dark' : '', 'group dark:bg-amber-950 text-black dark:text-white']"
  >
    <button @click="toggleTheme">theme</button>
    <h1>Home</h1>
    <div v-for="item in items" :key="item">
      <div class="hidden group-has-[a]:block peer">{{ item.name }}</div>
      <RouterLink
        to="/projects"
        :class="[item.hasA ? 'block' : 'hidden', 'peer-hover:text-sky-500']"
        >Projects</RouterLink
      >
    </div>
  </main>
</template>
