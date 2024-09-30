/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

//Inserir o requireAuth em todas as rotas dentro da pasta admin
routes.forEach (route => {
  if (route.path.startsWith('/admin')) {
    route.meta = { requiresAuth: true }
  }
})



// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router

//atribuir quais sãos as rotas a serem protegidas por autenticação
router.beforeEach( (to , from , next) => {
  const loggedIn = useUserStore().isLogin;
  if (to.path.includes('/admin') && !loggedIn){
    console.log('rota protegida')
    next('/login')
  }
  next();
});
