import { createRouter,  createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: 'home'
    },
    {
        path: '/create1',
        component: () => import('@/views/create1/index')
    },
    {
        path: '/select',
        component: () => import('@/views/home/details')
    },
    {
        path: '/home',
        component: () => import('@/views/home/index'),
        meta: {
            keepAlive: true // need to keepAlive
        }

    },
    {
        path: '/ended',
        component: () => import('@/views/ended/index')
    },
    {
        path: '/create',
        component: () => import('@/views/create/index')
    },
    {
        path: '/profile',
        component: () => import('@/views/profile/index')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
