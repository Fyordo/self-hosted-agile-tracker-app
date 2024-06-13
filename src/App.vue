<template>
    <MainApp />
</template>

<script>
import MainApp from "@/components/MainApp.vue";

export default {
    components: {
        MainApp,
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
