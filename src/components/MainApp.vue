<template>
    <div v-if="authorized">
        <Navbar />
    </div>
    <RouterView />
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
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
</style>
