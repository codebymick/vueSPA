import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './theme/Login.vue'
import About from './theme/About.vue'
import Game from './theme/Game.vue'
import Category from './theme/Category.vue'
import NotFound from './theme/NotFound.vue'

// const Category = () => System.import('./theme/Category.vue')
// const Login = () => System.import('./theme/Login.vue')
// const NotFound = () => System.import('./theme/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehaviour: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    {path: '/login', component: Login},
    {path: '/about', component: About},
    {path: '/game', component: Game},
    {path: '/category/:id', name: 'category', component: Category},
    {path: '/', redirect: '/game'},
    {path: '*', component: NotFound}
  ]
})

export default router
