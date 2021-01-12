import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BaseLayout from '../layout/Layout.vue'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import TProButton from '../views/t-pro-button.vue'
import TProDiv from '../views/t-pro-div.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index',
    component: BaseLayout,
    meta: { title: 'Home', icon: 'el-icon-house', hidden: false },
    children: [
      {
        path: '/index',
        component: Home,
        meta: { title: 'Home' }
      },
      {
        path: '/test',
        component: Test,
        meta: { title: 'Test' }
      }
    ]
  },
  {
    path: '/t-pro-button',
    component: TProButton
  },{
    path: '/t-pro-div',
    component: TProDiv
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
