<script setup lang="ts">
import '@/index.css'
import TheHeader from '@/components/header/TheHeader.vue'
import TheFooter from '@/components/footer/TheFooter.vue'
</script>

<template>
  <div class="font-basic">
    <TheHeader />
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    <TheFooter />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  opacity: 0.7;
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
