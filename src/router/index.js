import { createRouter,  createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/create1',
        component: () => import('@/views/create1/index')
    },
    {
        path: '/',
        redirect: 'home'
    },
    {
        path: '/home',
        component: () => import('@/views/home/index')
    },
    {
        path: '/ended',
        component: () => import('@/views/ended/index')
    },
    {
        path: '/create',
        component: () => import('@/views/create/index')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
