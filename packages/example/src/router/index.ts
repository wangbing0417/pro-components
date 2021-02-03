import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BaseLayout from '../layout/Layout.vue'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
// import BeerTest from '../views/BeerTest.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index',
    component: BaseLayout,
    meta: { title: '首页', icon: 'pro-icon-house', hidden: false },
    children: [
      {
        path: '/index',
        component: Home,
        meta: { title: 'Home' }
      }
    ]
  },
  {
    path: '/test',
    component: Test
  },
  // {
  //   path: '/beer-test',
  //   component: BeerTest
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
