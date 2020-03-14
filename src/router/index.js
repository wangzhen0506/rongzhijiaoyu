import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'
Vue.use(VueRouter)
const routes = [
  {
    // 强制跳转到主页
    path: '/',
    redirect: '/login'
  },
  {
    // 主页路由
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    //  登录页路由
    path: '/login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
