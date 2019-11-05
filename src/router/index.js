import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/pages/Home')
  },
  {
    path: '/transmit',
    component: () => import('@/pages/transmit/Index')
  }
]


export default new Router({
  mode: 'hash',
  // base: webPrefix,
  routes
})