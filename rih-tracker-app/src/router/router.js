import Dashboard from "@/pages/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/dashboard',
        component: Dashboard,
        name: "DashboardPage"
    },
    {
        path: '/tracker',
        component: Dashboard,
        name: "TrackerPage"
    },
    {
        path: '/board',
        component: Dashboard,
        name: "BoardPage"
    },
    {
        path: '/reports',
        component: Dashboard,
        name: "ReportsPage"
    },
    {
        path: '/profile',
        component: Dashboard,
        name: "ProfilePage"
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})

export default router;