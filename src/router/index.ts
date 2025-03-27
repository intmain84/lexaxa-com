import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes.ts'
import { useUserStore } from '@/stores/user.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to) => {
  const userStore = useUserStore()
  if (!userStore.currentUserId && to.meta.requiresAuth && to.name !== 'Login') {
    // redirect the user to the login page
    return { name: 'home' }
  }
})

export default router
