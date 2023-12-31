<template>
    <nav>
        <NavbarItem
        v-for="item in items"
        :title="item.title"
        :link="item.link"
        >
        </NavbarItem>
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
            {title: "Дашборд", link: "#"},
            {title: "Трекер", link: "#"},
            {title: "Доска", link: "#"},
            {title: "Отчёты", link: "#"},
            {title: "Профиль", link: "#"},
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
