import { createRouter, createWebHistory } from 'vue-router'
import UsersHomePage from '../views/UsersHomepage.vue'
import AdminHomepageVue from '../views/AdminHomepage.vue'
import HomepageVue from '../views/Homepage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomepageVue
    },
    {
      path: '/user',
      component: UsersHomePage
    },
    {
      path: '/admin',
      component: AdminHomepageVue
    }
  ]
})

export default router
