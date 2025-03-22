<script lang="ts" setup>
import TheButton from '@/components/TheButton.vue'
import { useUserStore } from '@/stores/user'
import { reactive } from 'vue'

const userStore = useUserStore()

const user = reactive<{ email: string; password: string }>({
  email: '',
  password: '',
})

function handleClick() {
  userStore.signIn(user)
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
