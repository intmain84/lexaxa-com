<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

import { CONTACTS } from '@/constants/contact.ts'
import { onBeforeMount, ref } from 'vue'

const language = ref<string>('')

const changeLanguage = () => {
  if (locale.value === 'en-US') {
    locale.value = 'ru-RU'
    language.value = 'En'
  } else {
    locale.value = 'en-US'
    language.value = 'Ru'
  }
}

onBeforeMount(() => {
  locale.value === 'en-US' ? (language.value = 'Ru') : (language.value = 'En')
})
</script>

<template>
  <header
    class="relative mt-8 tracking-wider uppercase flex justify-between items-center xl:mx-auto xl:max-w-[109rem]"
  >
    <ul class="flex items-center gap-x-10">
      <li v-for="contact in CONTACTS" :key="contact.name">
        <a :href="contact.link" class="hover:text-mint py-2">{{ contact.name }}</a>
      </li>
    </ul>
    <RouterLink to="/" class="absolute left-1/2 -translate-x-1/2 hover:text-mint">
      <span class="hidden">&lbrace;</span><span>{{ t('name') }}</span
      ><span class="hidden">&rbrace;</span>
    </RouterLink>
    <div class="flex items-center gap-x-10">
      <nav>
        <a href="/" class="hover:text-mint py-2">{{ t('projects') }}</a>
      </nav>
      <div class="cursor-pointer hover:text-mint py-2" @click="changeLanguage">
        <span>{{ language }}</span>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
