import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: () => import('../views/layouts/LandingPage.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/landing_page/Home.vue')
        },
        {
          path: 'product',
          name: 'Product',
          component: () => import('../views/landing_page/Product.vue')
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('../views/landing_page/AboutCompany.vue')
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('../views/landing_page/Contact.vue')
        }
      ]
    }
  ]
})

export default router
