import  { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from "@/views/Home.vue";
import gedanList from "@/views/components/gedanList.vue"

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
]
 
const router = createRouter({
    history: createWebHistory(),
    routes
}) 
export default router