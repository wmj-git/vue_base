import Vue from 'vue'
import Router from 'vue-router'
import Base from '@/components/base/index'
import Core from '@/components/Core/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Base',
      name: 'Base',
      component: Base,
      children:[
        {
          path: '/',
          name: 'HelloWorld',
          component: () => import('@/components/base/HelloWorld')
        }
      ]
    },
    {
      path: '/',
      name: 'Core',
      component: Core,
    }
  ]
})
