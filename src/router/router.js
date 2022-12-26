import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../modules/pokemon/pages/ListPage.vue')
  },
  {
    path: '/about',
    component: () => import('../modules/pokemon/pages/AboutPage.vue')
  },
  {
    path: '/id',
    component: () => import('../modules/pokemon/pages/PokemonPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../modules/shared/pages/NotFoundPage.vue')
  }
]

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes
})

export default router
