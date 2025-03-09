<script lang="ts" setup>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import TheButton from '@/components/TheButton.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const user = ref<{ email: string; password: string }>({
  email: '',
  password: '',
})

function handleClick() {
  signInWithEmailAndPassword(auth, user.value.email, user.value.password)
    .then(() => {
      // Signed in
      const redirectPath = (route.query.redirect as string) || '/'
      router.push(redirectPath)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}
</script>

<template>
  <div class="container-narrow mt-20">
    <form @submit.prevent="handleClick">
      <div class="form-group">
        <input
          type="text"
          id="email"
          placeholder="Email"
          v-model="user.email"
          class="mt-10 w-full min-h-[40px] focus:outline-none border-b-[1px] border-obsidian-light focus:border-mint transition-all duration-500 ease-in-out field-sizing-content resize-none"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="user.password"
          class="mt-10 w-full min-h-[40px] focus:outline-none border-b-[1px] border-obsidian-light focus:border-mint transition-all duration-500 ease-in-out field-sizing-content resize-none"
        />
      </div>
      <TheButton class="mt-10">Submit</TheButton>
    </form>
  </div>
</template>
