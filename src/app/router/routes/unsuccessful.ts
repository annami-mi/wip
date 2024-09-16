import type { RouteRecordRaw } from 'vue-router'

export const routeName = 'Unsuccessful'

export const route: RouteRecordRaw = {
    name: routeName,
    path: '/error',
    component: () => import('@/pages/UnsuccessfulPage/UnsuccessfulPage.vue')
}
