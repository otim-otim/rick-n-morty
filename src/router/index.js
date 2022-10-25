import { createRouter, createWebHistory } from 'vue-router'
import CharacterView from '../views/CharacterView.vue'
import EpisodeView from '../views/EpisodeView.vue'
import LocationView from '../views/LocationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'characters',
      component: CharacterView
    },
    {
      path: '/locations',
      name: 'locations',
      component: LocationView
    },
    {
      path: '/episodes',
      name: 'episode',
      component: EpisodeView
    }
    // ,
    // {
    //   path: '/',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
