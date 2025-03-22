import { ref } from 'vue'
import { defineStore } from 'pinia'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import type { Router } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const currentUserId = ref<string | null>(null)

  //Getters

  //Actions
  //Listen auth changes on init
  async function init(router: Router) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        currentUserId.value = user.uid
        // router.push({ name: 'home' })
      } else {
        currentUserId.value = null
        // router.push({ name: 'home' })
      }
    })
  }

  function signIn(credentials: { email: string; password: string }) {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        // Signed in
        console.log('User signed in successfully', userCredential.user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  function logOut() {
    signOut(auth)
      .then(() => {
        console.log('User signed out')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // //Set user
  // async function setUser(currentUser: User | null) {
  //   user.value = currentUser
  // }

  // //Unset user
  // async function signOut() {
  //   user.value = null
  // }

  return { currentUserId, init, signIn, logOut }
})
