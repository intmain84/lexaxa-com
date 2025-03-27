<script lang="ts" setup>
import ProjectsList from '@/components/ProjectsList.vue'
</script>

<template>
  <div class="container my-20">
    <h1 class="font-headers uppercase text-[6rem] font-bold">Projects</h1>
    <div class="w-full flex flex-col gap-16 border-obsidian-light border-b-1">
      <ProjectsList />
    </div>
  </div>
</template>
