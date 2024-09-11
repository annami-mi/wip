import {createRouter, createWebHashHistory} from 'vue-router'
import { routes } from './routes'

export const router = createRouter({
    history: createWebHashHistory('/wip'),
    routes,

    scrollBehavior(_, __, savedPosition) {
        return savedPosition || { top: 0 , behavior: 'smooth'}
    },
})

export default router
