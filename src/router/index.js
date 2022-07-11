import { createRouter,  createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: 'home'
    }, 
    {
        path: '/home',
        component: () => import('@/views/home/index')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
