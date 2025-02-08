<script setup lang="ts">
import '@/index.css'
import TheHeader from '@/components/header/TheHeader.vue'
import TheFooter from '@/components/footer/TheFooter.vue'
</script>

<template>
  <div class="font-geist">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>
