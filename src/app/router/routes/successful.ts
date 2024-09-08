import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'Successful'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/successful',
    component: () => import('@/pages/SuccessfulPage/SuccessfulPage.vue')
}
