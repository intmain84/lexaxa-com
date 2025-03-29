<script lang="ts" setup="">
const competence = ['React.js', 'Next.js', 'Vue.js', 'Figma', 'Webflow']
</script>

<template>
  <div
    class="flex flex-col justify-center gap-10 mt-20 mb-32 sm:mt-0 sm:gap-14 md:h-[calc(100vh-149px)] xl:mb-0 xl:gap-[8%] xl:h-[calc(100vh-60px)]"
  >
    <h1
      class="font-headers uppercase font-bold text-[3.3rem]/16 sm:text-[4rem]/20 xl:text-[6rem]/28 md:w-[76%] xl:w-[76%]"
    >
      Designing, coding, and making the digital world easier
    </h1>

    <div class="flex flex-col md:flex-row justify-between gap-8">
      <div>
        <div class="flex gap-5 items-center mb-8">
          <img src="@/assets/portrait.jpg" alt="Alex Yudin" class="w-20 h-20 rounded-full" />
          <div>
            <h2 class="font-headers uppercase text-2xl/10 sm:text-3xl/10 font-bold mb-2">
              Alex Yudin
            </h2>
            <h3 class="text-1xl">UX/UI Designer & Frontend Developer</h3>
          </div>
        </div>
        <a
          href="#contacts"
          class="inline-flex relative items-center justify-center text-base h-18 w-full sm:w-fit px-7 bg-mint text-obsidian hover:text-fog transition-all duration-500 ease-in-out uppercase cursor-pointer group overflow-hidden"
        >
          <span class="relative z-10">Let's work together</span>
          <div
            class="absolute -top-20 -left-10 w-[500px] h-0 bg-obsidian-light transition-all duration-500 ease-in-out rotate-0 group-hover:h-[220px] z-0 group-hover:rotate-[-20deg]"
          ></div>
        </a>
      </div>
      <!-- <div
        class="before:content-['\['] after:content-['\]'] text-base font-light uppercase flex space-x-6 mb-12"
      >
        <span class="first:ml-4 last:mr-4" v-for="item in competence" :key="item">{{ item }}</span>
      </div> -->
    </div>
  </div>
</template>

<style scoped></style>
