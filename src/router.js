import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/pc/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mob',
      name: 'mob',
      redirect: '/mob/home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/mob/mob.vue'),
      children: [
        {
          path: '/mob/home',
          name: 'pchome',
          component: () => import(/* webpackChunkName: "about" */ './views/mob/test.vue')
        }
      ]
    }
  ]
})
