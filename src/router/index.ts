import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrewmateView from '../views/CrewmateView.vue'
import NotFound from '@/views/NotFound.vue'

const crewIds = ['1', '2', '3']

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/crewmate/:id',
      name: 'crewmate',
      component: CrewmateView,
      beforeEnter: (to, from, next) => {
        if (crewIds.includes(to.params.id as string)) {
          next()
        } else {
          next('/not-found')
        }
      },
    },
    {
      // not found route
      path: '/not-found',
      name: 'notFound',
      component: NotFound,
    },
    {
      // catch all undefined routes to show not found
      path: '/:pathMatch(.*)*',
      name: 'notFoundAll',
      component: NotFound,
    },
  ],
  // makes sure page scroll position resets to top when navigating between pages
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
