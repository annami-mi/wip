import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'Transaction Page'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/',
    component: () => import('@/pages/TransactionPage/TransactionPage.vue')
}
