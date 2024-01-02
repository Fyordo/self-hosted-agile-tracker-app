<template>
  <Navbar/>
  <RouterView/>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import axios from 'axios';

export default {
  created () {
    //axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  },
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
body {
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    background-color: rgb(185, 185, 185);
}
</style>