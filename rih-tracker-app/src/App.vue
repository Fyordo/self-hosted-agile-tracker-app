<template>
    <div v-if="authorized">
        <Navbar />
    </div>
    <RouterView />
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import axios from "axios";
import router from "@/router/router.js";

export default {
    mounted() {
        // Проверяем наличие JWT в localStorage
        const jwtToken = localStorage.getItem("jwt");

        // Если JWT есть, отрисовываем компонент Navbar
        if (jwtToken) {
            this.authorized = true;
        } else {
            router.push("/login");
        }
    },
    data() {
        return {
            authorized: false, // Флаг для отрисовки компонента Navbar
        };
    },
    created() {},
    components: {
        Navbar,
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");
body {
    font-family: "Nunito", sans-serif;
    margin: 0;
    padding: 0;
    background-color: #379683;
}

h1 {
    font-size: 50px;
    color: #05386b;
}

h2 {
    color: #05386b;
}
</style>
