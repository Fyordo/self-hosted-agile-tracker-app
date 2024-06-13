<template>
    <button>{{ this.title }}</button>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
button {
    font-family: "Nunito", sans-serif;
    background-color: #05386b;
    border-radius: 15px;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
    color: white;
    border: 0;
    transition-duration: 0.2s;
}

button:hover {
    background-color: #5cdb95;
    color: #05386b;
}
</style>
