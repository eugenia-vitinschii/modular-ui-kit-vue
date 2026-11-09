/* AUTH ROUTES */

import type { RouteRecordRaw } from "vue-router";

export const authRoutes: RouteRecordRaw[] = [
   {
      path: '/auth',
      redirect: { name: 'login' },
      children: [
         {
            path: 'login',
            name: 'login',
            meta: { title: 'Login' },
            component: () => import('@/auth/pages/LoginPage.vue')
         },
         {
            path: 'register',
            name: 'register',
            meta: { title: 'Auth' },
            component: () => import('@/auth/pages/RegisterPage.vue')
         },
      ]
   },
   {
      path: '/profile',
      name: 'profile',
      meta: { title: 'Profile', requiresAuth: true },
      component: () => import('@/auth/pages/ProfilePage.vue')
   }

]