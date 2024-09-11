import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'Transaction Page'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/start',
    component: () => import('@/pages/TransactionPage/TransactionPage.vue'),
    children:[
        {
            path: ':id',
            component: () => import('@/pages/TransactionPage/TransactionPage.vue'),
        }
    ]
}
