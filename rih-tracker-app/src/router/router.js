import Board from "@/pages/Board.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Profile from "@/pages/Profile.vue";
import ProfileEdit from "@/pages/ProfileEdit.vue";
import Reports from "@/pages/Reports.vue";
import Tracker from "@/pages/Tracker.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/dashboard',
        component: Dashboard,
        name: "DashboardPage"
    },
    {
        path: '/tracker',
        component: Tracker,
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
        name: "ProfilePage"
    },
    {
        path: '/profile/edit',
        component: ProfileEdit,
        name: "ProfileEditPage"
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})

export default router;