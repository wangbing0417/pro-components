import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BaseLayout from '../layout/Layout.vue'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import TProButton from '../views/t-pro-button.vue'

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
    path: '/t-pro',
    redirect: '/t-pro/button',
    component: BaseLayout,
    meta: { title: '按钮测试', icon: 'pro-icon-takeaway-box', hidden: false },
    children: [
      {
        path: '/t-pro/button',
        component: TProButton
      }
    ]
  },
  {
    path: '/test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
