import { createRouter, createWebHashHistory } from 'vue-router'
import { isAuthenticatedGuard } from './auth-guard'

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
    beforeEnter: [ isAuthenticatedGuard ],
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

// Guard global - sincrono

/* router.beforeEach((to, from, next) => {
  const random = Math.random() * 100

  if (random > 50) {
    next()
  } else {
    console.log(random, 'blocked')
    next({ name: 'pokemon-home' })
  }
}) */

/* const canAccess = () => {
  return new Promise((resolve) => {
    const random = Math.random() * 100

    setTimeout(() => {
      if (random > 50) {
        console.log('passed')
        resolve(true)
      } else {
        console.log(random, 'blocked')
        resolve(false)
      }
    }, 1000)
  })
}

router.beforeEach(async (to, from, next) => {
  const authorized = await canAccess()
  authorized ? next() : next({ name: 'pokemon-home' })
}) */

export default router
