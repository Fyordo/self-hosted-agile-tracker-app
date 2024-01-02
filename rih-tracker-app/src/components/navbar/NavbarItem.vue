<template>
  <div class="navbar-item">
    <RouterLink :to="{name: this.link}">{{ this.title }}</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    components: { RouterLink }
}
</script>

<style>
a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 18px;
}

.navbar-item{
    border-radius: 5px;
    padding: 10px;
}

.navbar-item:hover{
    background-color: #0000002a;
}
</style>
