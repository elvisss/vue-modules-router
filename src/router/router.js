import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: {
      name: 'pokemon-home'
    }
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import('../modules/pokemon/layouts/PokemonLayout.vue'),
    children: [
      {
        path: '',
        name: 'pokemon-home',
        component: () => import('../modules/pokemon/pages/ListPage.vue')
      },
      {
        path: 'about',
        name: 'pokemon-about',
        component: () => import('../modules/pokemon/pages/AboutPage.vue')
      },
      {
        path: 'pokemon/:id',
        component: () => import('../modules/pokemon/pages/PokemonPage.vue'),
        name: 'pokemon-id',
        props: (route) => {
          const pokemonId = Number(route.params.id)
          return {
            id: isNaN(pokemonId) ? 1 : pokemonId
          }
        }
      }
    ]
  },
  {
    path: '/dbz',
    name: 'dbz',
    component: () => import('../modules/dbz/layouts/DragonBallLayout.vue'),
    children: [
      {
        path: '',
        name: 'dbz-home',
        component: () => import('../modules/dbz/pages/Characters.vue')
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import('../modules/dbz/pages/About.vue')
      }
    ]
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
