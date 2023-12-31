import Dashboard from "@/pages/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/dashboard',
        component: Dashboard
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})

export default router;