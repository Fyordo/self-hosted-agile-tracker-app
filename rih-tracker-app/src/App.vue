<template>
  <Navbar/>
  <RouterView/>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import Dashboard from "@/pages/Dashboard.vue";

export default {
  components: {
    Navbar,
    Dashboard
  },
  data () {
    return {
        
    }
  },
  
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