<script lang="ts" setup="">
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '@/stores/projects'
import { BxFigma, GlEarth, AkGithubFill } from '@kalimahapps/vue-icons'

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
  <div class="mt-20">
    <div v-if="isLoading">Loading...</div>
    <template v-else-if="projectsStore.project && !error">
      <!-- H1 -->
      <h1 class="font-headers uppercase font-bold text-[6rem] container-narrow">
        {{ projectsStore.project.title }}
      </h1>
      <!-- H1 -->
      <h2 class="font-headers uppercase font-bold text-[6rem] container-narrow">
        {{ projectsStore.project.title }}
      </h2>
      <!-- Tags -->
      <div
        class="uppercase before:content-['\['] after:content-['\]'] flex-inline space-x-6 mb-10 container-narrow"
      >
        <span v-for="tag in projectsStore.project.tags" :key="tag" class="ml-2 mr-2">{{
          tag
        }}</span>
      </div>
      <!-- Links -->
      <div class="flex gap-6 container-narrow">
        <div
          v-if="projectsStore.project.live.length > 0 && projectsStore.project.live"
          class="uppercase flex-inline space-x-6 mb-10"
        >
          <a
            :href="projectsStore.project.live"
            target="_blank"
            class="flex items-center gap-2 text-mint hover:text-fog transition-all duration-500 ease-in-out"
            ><GlEarth /> <span>Live</span></a
          >
        </div>
        <div
          v-if="projectsStore.project.github.length > 0 && projectsStore.project.live"
          class="uppercase flex-inline space-x-6 mb-10"
        >
          <a
            :href="projectsStore.project.github"
            target="_blank"
            class="flex items-center gap-2 text-mint hover:text-fog transition-all duration-500 ease-in-out"
            ><AkGithubFill /> <span>Github</span></a
          >
        </div>
        <div
          v-if="projectsStore.project.figma.length > 0 && projectsStore.project.live"
          class="uppercase flex-inline space-x-6 mb-10"
        >
          <a
            :href="projectsStore.project.figma"
            target="_blank"
            class="flex items-center gap-1 text-mint hover:text-fog transition-all duration-500 ease-in-out"
            ><BxFigma /> <span>Figma</span>
          </a>
        </div>
      </div>

      <!-- Cover -->
      <img
        :src="projectsStore.project.image"
        :alt="projectsStore.project.title"
        class="w-full mb-8 aspect-video object-cover container"
      />

      <div>
        <template v-for="(item, index) in sortedContent" :key="index">
          <p v-if="item.type === 'paragraph'" class="mb-8 container-narrow">{{ item.value }}</p>
          <img
            v-else-if="item.type === 'image'"
            :src="item.value"
            :alt="projectsStore.project.title"
            class="w-full mb-8 container"
          />
        </template>
      </div>
    </template>
    <div v-else>{{ error }}</div>
  </div>
</template>
