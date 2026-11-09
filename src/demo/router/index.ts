
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from "vue-router";

/* ==== DEMO ROUTES ==== */
import { demoRoutes } from '../routes/demo.routes';

/* === ERROR ROUTES === */
import { errorRoutes } from '@/errors/routes/error.routes';

/* === LANDING ROUTES === */
import { landingRoutes } from '@/landing/routes/landing.routes';

/* === LANDING ROUTES === */
import { authRoutes } from '@/auth/routes/auth.routes';

const routes: RouteRecordRaw[] = [
   ...demoRoutes,
   ...errorRoutes,
   ...landingRoutes,
   ...authRoutes,
]

const router = createRouter({
   history: createWebHistory(),
   routes,
})

export default router