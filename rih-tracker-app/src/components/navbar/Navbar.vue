<template>
    <nav>
        <NavbarItem
            v-for="item in items"
            :title="item.title"
            :link="item.link"
        />
    </nav>
</template>

<script>
import NavbarItem from "./NavbarItem.vue";

export default {
    components: {
        NavbarItem,
    },
    data() {
        return {
            items: [
                { title: "Dashboard", link: "DashboardPage" },
                { title: "Time-Tracker", link: "TrackerPage" },
                { title: "Agile-Board", link: "BoardPage" },
                { title: "Reports", link: "ReportsPage" },
                { title: "Profile", link: "ProfilePage" },
            ],
        };
    },
};
</script>

<style>
nav {
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
