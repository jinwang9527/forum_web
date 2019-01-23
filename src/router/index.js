import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


/* Layout */
import test from './test'

export const constantRouterMap = [
  test,
  { path: '/', component: () => import('@/views/login/index'), hidden: true },
]
export default new Router({


  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap

})
