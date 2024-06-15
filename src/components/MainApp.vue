<template>
    <div v-if="authorized">
        <Navbar />
    </div>
    <div class="main-container">
        <RouterView />
    </div>
    <div v-if="authorized">
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";
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
            authorized: false, // Флаг для отрисовки компонента Navbar и Footer
        };
    },
    created() {},
    components: {
        Navbar,
        Footer
    },
};
</script>

<style scoped>
.main-container{
    padding: 20px;
}
</style>
