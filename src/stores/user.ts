import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from 'firebase/auth'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)

  //Getters

  //Actions
  //Listen auth changes on init
  // async function init() {
  //   onAuthStateChanged(auth, (user) => {
  //     const pinia = getActivePinia() // 🔥 Проверяем, есть ли активная Pinia
  //     if (pinia) {
  //       const userStore = useUserStore(pinia) // 🔥 Передаём в стор явно
  //       userStore.setUser(user)
  //     }
  //     resolve()
  //   })
  // }

  //Set user
  async function setUser(currentUser: User | null) {
    user.value = currentUser
  }

  //Unset user
  async function signOut() {
    user.value = null
  }

  return { user, setUser, signOut }
})
