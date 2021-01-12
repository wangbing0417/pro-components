import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BaseLayout from '../layout/Layout.vue'
// import Home from '../views/Home.vue'
// import Test from '../views/Test.vue'
import TProButton from '../views/t-pro-button.vue'

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   redirect: '/index',
  //   component: BaseLayout,
  //   meta: { title: 'Home', icon: 'el-icon-house' },
  //   children: [
  //     {
  //       path: '/index',
  //       component: Home,
  //       meta: { title: 'Home' }
  //     },
  //     {
  //       path: '/testsub',
  //       component: Test,
  //       meta: { title: 'TestSub' }
  //     }
  //   ]
  // },
  {
    path: '/t-pro-layout',
    component: BaseLayout,
    // meta: { title: 'Test1', icon: 'el-icon-house' },
    // children: [
    //   {
    //     path: '/',
    //     component: Test
    //   }
    // ]
  },
  {
    path: '/t-pro-button',
    component: TProButton,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
