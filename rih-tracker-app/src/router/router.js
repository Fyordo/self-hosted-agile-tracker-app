import AuthPage from "@/pages/Auth/AuthPage.vue";
import RegisterPage from "@/pages/Auth/RegisterPage.vue";
import Board from "@/pages/Board.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Profile from "@/pages/Profile/Profile.vue";
import ProfileEdit from "@/pages/Profile/ProfileEdit.vue";
import Reports from "@/pages/Reports.vue";
import TrackerPage from "@/pages/TrackerPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/dashboard',
        component: Dashboard,
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
        component: Profile,
        name: 'ProfilePage'
    },
    {
        path: '/profile/edit',
        component: ProfileEdit,
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