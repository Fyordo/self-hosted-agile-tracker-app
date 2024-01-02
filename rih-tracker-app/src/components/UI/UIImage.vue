<template>
    <img :src="this.src"/>
</template>

<script>
    export default {
    props: {
        src: {
            type: String,
            required: true
        }
    },
        
    }
</script>

<style scoped>
img {
    border-radius: 25px;
    width: 500px;
    height: 500px;
    margin: 50px;
    border: 0.4rem solid #e2aa0e;
}
img:hover {
    border: 0.4rem solid #bf941e;
}
</style>