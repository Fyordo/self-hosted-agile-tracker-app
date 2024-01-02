<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
    props: {
        modelValue: String
    },
}
</script>

<style scoped>
input {
    font-family: 'Nunito', sans-serif;
    background-color: grey;
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;
    width: 300px;
    height: 50px;
    font-size: 20px;
    color: white;
}

input:hover{
    background-color: #55B78E87;
}
</style>