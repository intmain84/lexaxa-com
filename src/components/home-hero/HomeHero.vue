<script lang="ts" setup="">
import TheButton from '@/components/TheButton.vue'

const competence = ['React.js', 'Next.js', 'Vue.js', 'Figma', 'Webflow']
</script>

<template>
  <div
    class="flex flex-col justify-center gap-18 h-[calc(100vh-149px)] mb-32 xl:mb-0 xl:gap-[5%] xl:h-[calc(100vh-60px)]"
  >
    <h1
      class="font-headers uppercase font-bold text-[5.7rem]/26 w-[88%] xl:text-[8rem]/36 xl:w-[76%]"
    >
      Creating digital solutions where usability comes first
    </h1>

    <div class="flex justify-between gap-8">
      <div>
        <div class="flex gap-5 items-center mb-8">
          <img src="@/assets/portrait.jpg" alt="Alex Yudin" class="w-20 h-20 rounded-full" />
          <div>
            <h2 class="font-headers uppercase text-3xl/10 font-bold mb-2">Alex Yudin</h2>
            <h3 class="text-1xl">UX/UI Designer & Frontend Developer</h3>
          </div>
        </div>
        <TheButton>Let's work together</TheButton>
      </div>
      <div
        class="before:content-['\['] after:content-['\]'] text-base font-light uppercase flex space-x-6 mb-12"
      >
        <span class="first:ml-4 last:mr-4" v-for="item in competence" :key="item">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
