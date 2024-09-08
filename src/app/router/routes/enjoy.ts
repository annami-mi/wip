import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'Enjoy'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/enjoy',
    component: () => import('@/pages/EnjoyPage/EnjoyPage.vue')
}
