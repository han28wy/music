import  { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from "@/views/Home.vue";
import gedanList from "@/views/components/gedanList.vue"
import login from "@/views/login/index.vue"

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        component: home
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/gedanList',
        component: gedanList
    },
    {
        path: '/login',
        component: login
    },
]
 
const router = createRouter({
    history: createWebHistory(),
    routes
}) 
export default router