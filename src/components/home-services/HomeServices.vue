<script setup lang="ts"></script>

<template>
  <div class="w-full mb-40 flex flex-col gap-12">
    <h2 class="font-headers uppercase text-6xl font-bold">Services</h2>
    <div class="grid grid-cols-3 basis-full gap-12">
      <div class="flex gap-8 items-start">
        <img src="@/assets/code_ic.svg" alt="Frontend Development" class="w-20" />
        <div>
          <h3 class="font-headers uppercase text-3xl/10 font-bold mb-2">Frontend Development</h3>
          <p class="text-base/6">Building modern web interfaces using React, Next.js and Vue.js</p>
        </div>
      </div>
      <div class="flex gap-8 items-start">
        <img src="@/assets/webflow_ic.svg" alt="Webflow Development" />
        <div>
          <h3 class="font-headers uppercase text-3xl/10 font-bold mb-2">Webflow Development</h3>
          <p class="text-base/6">Fast creation of complex websites on the Webflow platform</p>
        </div>
      </div>
      <div class="flex gap-8 items-start">
        <img src="@/assets/design_ic.svg" alt="UX/UI Design" />
        <div>
          <h3 class="font-headers uppercase text-3xl/10 font-bold mb-2">UX/UI Design</h3>
          <p class="text-base/6">
            Designing intuitive, user-friendly, and visually appealing interfaces
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
