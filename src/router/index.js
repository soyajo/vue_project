import { createRouter, createWebHistory } from 'vue-router'
// app.js 로 만들어진다.
import HomeView from '../views/HomeView.vue'
// router component 설정 세가지 방법.( 중요!!!! ) - 성능
// 1. import HomeView from '../views/HomeView.vue' - app.js로 만들어져서 바로 실행
// 2. webpackPrefetch:true - (name).js 으로 만들어져서 미리 가져 올 수 있음.
// 3. webpackPrefetch:false - 클릭 시, (name).js 으로 만들어져서 가져 올 수 있음.
// * 같은 webpackChunkName이면 같은 (name).js로 만들어진다.
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
    // webpackPrefetch:true - prefetch cache 에 미리 저장 - 장점 : 메뉴 클릭했을 때 더 빨리 나옴, 단점 : 처음 화면이 느리게 뜸.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue')
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingSelectView.vue')
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckboxView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingCheckboxView.vue')
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingRadioView.vue')
  },
  {
    path: '/databinding/attr',
    name: 'DataBindingAttributeView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingAttributeView.vue')
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingListView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
