import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            layout: 'main'
        },
        component: () => import ('@/views/HomePage.vue')
    }

]
const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router