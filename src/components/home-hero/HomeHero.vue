<script lang="ts" setup="">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <!-- Hero -->
  <div class="py-40 h-[calc(100vh-72px)] tracking-wide text-2xl grid grid-cols-2">
    <div class="self-start text-6xl flex flex-col gap-y-4">
      <h1 class="font-bold">{{ t('greet') }}</h1>
      <p class="mb-1 font-bold">{{ $t('developer') }}</p>
      <div
        class="text-base uppercase before:content-['{'] after:content-['}'] tracking-wide font-[300] flex-inline space-x-6 text-mint mb-12"
      >
        <span class="ml-2">React.js</span><span>Next.js</span><span>Vue.js</span
        ><span class="mr-2">Webflow</span>
      </div>
    </div>
    <div class="w-170 self-end place-self-end">
      <p class="block mb-10">{{ $t('experience') }} {{ $t('job') }}</p>
      <button
        class="h-18 text-base px-7 bg-mint text-obsidian uppercase cursor-pointer hover:bg-fog"
      >
        {{ $t('CTA') }}
      </button>
    </div>
  </div>
</template>

<style scoped></style>
