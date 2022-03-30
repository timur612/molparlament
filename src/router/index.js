import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CarouselEdit from '../views/CarouselEdit.vue'
import AllNews from '../views/AllNews.vue'
import Paper from '../views/Paper.vue'
import AllMembers from '../views/AllMembers.vue'
import AllReports from '../views/AllReports.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/carousel/edit',
    name: 'CarouselEdit',
    component: CarouselEdit
  },
  {
    path: '/news/all',
    name: 'News',
    component: AllNews
  },
  {
    path: '/news/read/:paperId',
    name: 'Paper',
    component: Paper
  },
  {
    path: '/members/all',
    name: "Members",
    component: AllMembers
  },
  {
    path: '/reports/all',
    name: "Reports",
    component: AllReports
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
