<template>
    <button>{{ this.title }}</button>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
        
}
</script>

<style>
button {
    font-family: 'Nunito', sans-serif;
    background-color: #2fb474;
    border-radius: 15px;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
    color: white;
    border: 0.2rem solid white;
}

button:hover{
    background-color: #2fb47487;
}
</style>