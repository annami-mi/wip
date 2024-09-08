import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'Unsuccessful'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/unsuccessful',
    component: () => import('@/pages/UnsuccessfulPage/UnsuccessfulPage.vue')
}
