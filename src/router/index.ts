import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShortUrlView from '../views/ShortUrlView.vue'
import { storeToRefs } from 'pinia'

import Authentication from '../components/Authentication.vue'

import { useAuthStore } from '../stores/auth'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/short',
      name: 'short urls',
      component: ShortUrlView
    },
    {
      path: '/login',
      name: 'login',
      component: Authentication
    }
  ]
})

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/about', '/']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  const { user, isLoggedIn } = storeToRefs(authStore)

  if (authRequired && !isLoggedIn) {
    authStore.returnUrl = to.fullPath
    return '/login'
  }
})
