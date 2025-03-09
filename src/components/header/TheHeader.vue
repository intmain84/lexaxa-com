<script lang="ts" setup>
import { CONTACTS } from '@/constants/contact.ts'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import TheButton from '../TheButton.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()

const userStore = useUserStore()

function handleClick() {
  signOut(auth)
    .then(() => {
      userStore.signOut()
      router.push('/')
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>

<template>
  <header class="text-mint relative mt-8 uppercase flex justify-between items-center container">
    <ul class="flex items-center gap-x-10">
      <li v-for="contact in CONTACTS" :key="contact.name">
        <a :href="contact.link" class="hover:text-mint py-2">{{ contact.name }}</a>
      </li>
    </ul>
    <RouterLink to="/" class="absolute left-1/2 -translate-x-1/2 hover:text-mint">
      <span class="hidden">&lbrace;</span><span>AY</span><span class="hidden">&rbrace;</span>
    </RouterLink>
    <div class="flex items-center gap-x-10">
      <nav>
        <RouterLink to="/projects" class="hover:text-mint py-2">Projects</RouterLink>
      </nav>
      <TheButton v-if="userStore.user" @click="handleClick">Sign Out</TheButton>
    </div>
  </header>
</template>

<style scoped></style>
