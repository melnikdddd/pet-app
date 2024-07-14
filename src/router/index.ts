import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import SignIn from '@/views/auth/sign-in-view.vue'

const routes: Array<RouteRecordRaw> = [
    {
        component: SignIn,
        path: '/auth/sign-in',
        name: 'sign-in',
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
