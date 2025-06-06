<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useProjectsStore } from '@/stores/projects'

const projectsStore = useProjectsStore()

const error = ref<string | null>(null)
const isLoading = ref<boolean>(false)

onMounted(async () => {
  try {
    error.value = null
    isLoading.value = true
    await projectsStore.getAllProjects()
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Something went wrong'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="w-full flex flex-col">
    <div v-if="isLoading">Loading...</div>
    <template v-else-if="projectsStore.projects && !error">
      <RouterLink
        v-for="project in projectsStore.projects"
        :key="project.id"
        :to="{ name: 'project', params: { link: project.link } }"
        class="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-4 group py-8 sm:py-10 border-obsidian-light border-t-1 hover:text-obsidian"
      >
        <h3
          class="text-[1.6rem]/10 sm:text-3xl/10 sm:w-[30%] font-headers uppercase font-bold translate-x-0 group-hover:translate-x-10 transition-all duration-500 ease-in-out"
        >
          {{ project.title }}
        </h3>
        <img
          :src="project.image"
          :alt="project.title"
          class="max-w-full aspect-video object-contain sm:h-65 scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
        />
        <div
          class="uppercase sm:w-52 sm:justify-end before:content-['\['] after:content-['\]'] flex space-x-6 -translate-x-0 group-hover:-translate-x-10 transition-all duration-500 ease-in-out"
        >
          <span v-for="tag in project.tags" :key="tag" class="ml-2 mr-2">{{ tag }}</span>
        </div>

        <div
          class="-z-10 absolute top-0 left-0 w-full h-0 bg-mint transition-all duration-500 ease-in-out group-hover:h-full"
        ></div>
      </RouterLink>
    </template>
    <div v-else>{{ error }}</div>
  </div>
</template>
