import AuthPage from "@/pages/Auth/AuthPage.vue";
import RegisterPage from "@/pages/Auth/RegisterPage.vue";
import Board from "@/pages/Board.vue";
import DashboardPage from "@/pages/DashboardPage.vue";
import ProfilePage from "@/pages/Profile/ProfilePage.vue";
import ProfileEditPage from "@/pages/Profile/ProfileEditPage.vue";
import Reports from "@/pages/Reports.vue";
import TrackerPage from "@/pages/TrackerPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/dashboard',
        component: DashboardPage,
        name: "DashboardPage"
    },
    {
        path: '/tracker',
        component: TrackerPage,
        name: "TrackerPage"
    },
    {
        path: '/board',
        component: Board,
        name: "BoardPage"
    },
    {
        path: '/reports',
        component: Reports,
        name: "ReportsPage"
    },
    {
        path: '/profile',
        component: ProfilePage,
        name: 'ProfilePage'
    },
    {
        path: '/profile/edit',
        component: ProfileEditPage,
        name: "ProfileEditPage"
    },
    {
        path: '/login',
        component: AuthPage,
        name: "AuthPage"
    },
    {
        path: '/register',
        component: RegisterPage,
        name: "RegisterPage"
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})

export default router;