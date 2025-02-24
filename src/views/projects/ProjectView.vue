<script lang="ts" setup="">
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '@/stores/projects'

const projectsStore = useProjectsStore()
const route = useRoute()

const error = ref<string | null>(null)
const isLoading = ref<boolean>(false)

const sortedContent = computed(() =>
  [...projectsStore.project.content].sort((a, b) => a.order - b.order),
)

onMounted(async () => {
  try {
    error.value = null
    isLoading.value = true
    await projectsStore.getAProject(route.params.link as string)
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Something went wrong'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="container-narrow mt-20">
    <div v-if="isLoading">Loading...</div>
    <template v-else-if="projectsStore.project && !error">
      <h1 class="font-headers uppercase font-bold text-[6rem]">
        {{ projectsStore.project.title }}
      </h1>
      <div class="uppercase before:content-['\['] after:content-['\]'] flex-inline space-x-6 mb-10">
        <span v-for="tag in projectsStore.project.tags" :key="tag" class="ml-2 mr-2">{{
          tag
        }}</span>
      </div>
      <img
        :src="projectsStore.project.image"
        :alt="projectsStore.project.title"
        class="max-w-full mb-8 aspect-video object-cover"
      />

      <div>
        <template v-for="(item, index) in sortedContent" :key="index">
          <p v-if="item.type === 'paragraph'" class="mb-8">{{ item.value }}</p>
          <img
            v-else-if="item.type === 'image'"
            :src="item.value"
            :alt="projectsStore.project.title"
            class="max-w-full mb-8"
          />
        </template>
      </div>
    </template>
    <div v-else>{{ error }}</div>
  </div>
</template>
