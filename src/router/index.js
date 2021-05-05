import Vue from 'vue'
import VueRouter from 'vue-router'
import ByCurrency from '../views/ByCurrency.vue'
import ByCountry from  '../views/ByCountry.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ByCurrency
  },
  {
    path: '/currency',
    name: 'By Currency',
    component: ByCurrency
  },
  {
    path: '/country',
    name: 'By Country',
    component: ByCountry
  }
]

const router = new VueRouter({
  routes
})

export default router
