import  { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from "@/views/Home.vue";

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        component: home
    },
]
 
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router