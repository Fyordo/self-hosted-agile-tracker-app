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
    NavbarItem
  },
  data () {
    return {
        items: [
            {title: "Дашборд", link: "DashboardPage"},
            {title: "Трекер", link: "TrackerPage"},
            {title: "Доска", link: "BoardPage"},
            {title: "Отчёты", link: "ReportsPage"},
            {title: "Профиль", link: "ProfilePage"},
        ]
    }
  },
  
}
</script>

<style>
nav {
    background-color: #55B78E;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
}
</style>
