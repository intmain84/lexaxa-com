<script lang="ts" setup>
import { CONTACTS } from '@/constants/contact.ts'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { CdNewFile, AkSignOut } from '@kalimahapps/vue-icons'

const userStore = useUserStore()
const router = useRouter()

function handleLogOut() {
  userStore.logOut()
}
</script>

<template>
  <header
    class="flex flex-col sm:hidden text-mint relative uppercase justify-between items-center container"
  >
    <RouterLink to="/" class="mb-4 hover:text-fog transition-all duration-500 ease-in-out">
      [ AY ]
    </RouterLink>
    <ul class="flex justify-between w-full items-center gap-x-auto">
      <li v-for="contact in CONTACTS" :key="contact.name">
        <a
          :href="contact.link"
          class="text-mint hover:text-fog transition-all duration-500 ease-in-out py-2"
          >{{ contact.name }}</a
        >
      </li>
      <nav>
        <RouterLink
          to="/projects"
          class="py-2 hover:text-fog transition-all duration-500 ease-in-out"
          >Projects</RouterLink
        >
      </nav>
    </ul>
  </header>
  <header
    class="hidden sm:flex text-mint relative uppercase justify-between items-center container"
  >
    <ul class="flex items-center gap-x-10">
      <li v-for="contact in CONTACTS" :key="contact.name">
        <a
          :href="contact.link"
          class="text-mint hover:text-fog transition-all duration-500 ease-in-out py-2"
          >{{ contact.name }}</a
        >
      </li>
    </ul>
    <RouterLink
      to="/"
      class="hidden sm:block absolute left-1/2 -translate-x-1/2 hover:text-fog transition-all duration-500 ease-in-out"
    >
      [ AY ]
    </RouterLink>
    <div class="flex items-center gap-x-10">
      <nav>
        <RouterLink
          to="/projects"
          class="py-2 hover:text-fog transition-all duration-500 ease-in-out"
          >Projects</RouterLink
        >
      </nav>
      <div v-if="userStore.currentUserId" class="flex gap-4">
        <CdNewFile
          @click="() => router.push({ name: 'new-project' })"
          class="cursor-pointer text-xl hover:text-fog transition-all duration-500 ease-in-out"
          >New project</CdNewFile
        >
        <AkSignOut
          @click="handleLogOut"
          class="cursor-pointer text-xl hover:text-fog transition-all duration-500 ease-in-out"
          >Sign Out</AkSignOut
        >
      </div>
    </div>
  </header>
</template>

<style scoped></style>
