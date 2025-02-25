import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrewmateView from '../views/CrewmateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:id',
      name: 'crewmate',
      component: CrewmateView,
    },
  ],
  // makes sure page scroll position resets to top when navigating between pages
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
