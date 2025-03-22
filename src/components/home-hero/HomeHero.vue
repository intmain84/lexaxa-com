<script lang="ts" setup="">
import TheButton from '@/components/TheButton.vue'

const competence = ['React.js', 'Next.js', 'Vue.js', 'Figma', 'Webflow']
</script>

<template>
  <div class="relative flex flex-col justify-center gap-10 xl:h-[calc(100vh-60px)]">
    <h1 class="absolute opacity-0">Alex Yudin. Intuitive Interface Designer and Developer</h1>
    <div class="relative">
      <div
        class="-z-10 absolute left-[31%] -top-[30%] rotate-40 aspect-square h-[145%] rounded-full bg-conic from-obsidian-light to-obsidian to-50%"
      ></div>
      <img
        src="@/assets/portrait.jpg"
        alt="Alex Yudin"
        class="w-100 rounded-full absolute left-[46%] top-[50%] transform -translate-x-1/2 -translate-y-1/2"
      />
      <img src="@/assets/a-y.svg" alt="Alex Yudin" class="w-full" />
    </div>

    <div class="flex justify-between gap-8">
      <div>
        <h2 class="block mb-6 text-4xl/12">
          I'm not chasing awwwards,<br />but shippping real products
        </h2>
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

<style scoped>
.octagon {
  z-index: -1;
  position: absolute;
  left: 45%;
  transform: rotate(35deg);
  width: 300px;
  height: 300px;
  background: url('https://img.goodfon.com/wallpaper/big/b/d3/judy-alvarez-cyberpunk-2077-igra-personazh-portret-vzgliad-b.webp')
    center/cover;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}
</style>
