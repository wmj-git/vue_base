import Vue from 'vue'
import Router from 'vue-router'
import BasePinter from '@/components/basePinter/index'
import CorePart from '@/components/corePart/index'
import myRouter from '@/components/myRouter/index'
import RouteParam from '@/components/routeParam/index'
import NestedRoute from '@/components/nestedRoute/index'
import ShopCart from '@/components/shopCart/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/BasePinter',
      name: 'BasePinter',
      component: BasePinter
    },
    {
      path: '/CorePart',
      name: 'CorePart',
      component: CorePart,
    },
    {
      path: '/myRouter',
      name: 'myRouter',
      component: myRouter
    },
    {
      path: '/RouteParam',
      name: 'RouteParam',
      component: RouteParam
    },
    {
      path: '/',
      name: 'NestedRoute',
      component: NestedRoute,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: ()=> import('@/components/nestedRoute/home.vue')
        },
        {
          path: 'news',
          name: 'News',
          component:()=> import('@/components/nestedRoute/news.vue')
        },
        {
          path: 'mine',
          name: 'Mine',
          component:()=> import('@/components/nestedRoute/mine.vue')
        }
      ]
    },
    {
      path: '/ShopCart',
      name: 'ShopCart',
      component: ShopCart
    },
  ]
})
