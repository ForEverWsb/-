import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/page/index.vue'
import Disvover from '@/page/discover.vue'
import Order from '@/page/order.vue'
import Mine from '@/page/mine.vue'
import Serch from '@/page/serch.vue'
export default new Router({
  routes: [
    {
      path: '/index',
      alias: '/',
      name: 'index',
      component: Home,
      children : [{
          path : '/serch',
          name : 'serch' ,
          component : Serch
      }]
    },
    {
      path: '/discover',
      name: 'discover',
      component: Disvover
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      // path: '/',
      path: '**',
      //重定向
      redirect: '/index'
    }
  ]
})
