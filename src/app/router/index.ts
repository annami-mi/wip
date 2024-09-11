import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export const router = createRouter({
    // history: createWebHistory('/wip'),
    history: createWebHistory(),
    routes,

    scrollBehavior(_, __, savedPosition) {
        return savedPosition || { top: 0 , behavior: 'smooth'}
    },
})

