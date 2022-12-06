import { createRouter, createWebHistory } from 'vue-router'
// app.js 로 만들어진다.
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // import HomeView from '../views/HomeView.vue' 와 차이가 있다.
    // about.js 로 만들어진다.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
