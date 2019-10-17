import Vue from 'vue'
import Router from 'vue-router'
import BasePinter from '@/components/basePinter/index'
import CorePart from '@/components/corePart/index'
import myRouter from '@/components/myRouter/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/BasePinter',
      name: 'BasePinter',
      component: BasePinter,
      children:[
        {
          path: '/',
          name: 'HelloWorld',
          component: () => import('@/components/basePinter/HelloWorld')
        }
      ]
    },
    {
      path: '/CorePart',
      name: 'CorePart',
      component: CorePart,
    },
    {
      path:'/',
      name:'myRouter',
      component:myRouter
    }
  ]
})
