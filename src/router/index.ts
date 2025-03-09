import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { routes } from '@/router/routes.ts'
import { useUserStore } from '@/stores/user'
import { getActivePinia } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const checkAuth = new Promise<void>((resolve) => {
  onAuthStateChanged(auth, (user) => {
    const pinia = getActivePinia() // 🔥 Проверяем, есть ли активная Pinia
    if (pinia) {
      const userStore = useUserStore(pinia) // 🔥 Передаём в стор явно
      userStore.setUser(user)
    }
    resolve()
  })
})

router.beforeEach(async (to) => {
  const pinia = getActivePinia()
  if (!pinia) return true // Если Pinia нет, просто пропускаем

  const userStore = useUserStore(pinia) // Теперь Pinia точно активна

  if (!userStore.user) {
    await checkAuth
  }

  if (to.meta.requiresAuth && !userStore.user) {
    return { name: 'error-example', query: { redirect: to.fullPath } }
  }

  return true
})

export default router
