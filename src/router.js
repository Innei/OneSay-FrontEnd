import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          component: () => import('./views/Api.vue')
        },
        {
          path: '/notice',
          component: () => import('./views/Notice.vue')
        },
        {
          path: '/one-say',
          component: () => import('./views/OneSay.vue')
        }
      ]
    }
  ]
})
