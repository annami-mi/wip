import {createRouter, createWebHashHistory} from 'vue-router'
import { routes } from './routes'

export const router = createRouter({
    history: createWebHashHistory(),
    routes,

    scrollBehavior(_, __, savedPosition) {
        return savedPosition || { top: 0 , behavior: 'smooth'}
    },
})
