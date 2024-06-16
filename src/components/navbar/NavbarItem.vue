<template>
  <RouterLink :to="{ name: this.link }">
    <div class="navbar-item">
      {{ this.title }}
    </div>
  </RouterLink>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  components: { RouterLink },
};
</script>

<style>
a {
  text-decoration: none;
  color: #05386b;
  font-weight: bold;
  font-size: 30px;
}

.navbar-item {
  border-radius: 5px;
  padding: 10px;
  transition-duration: 0.2s;
}

.navbar-item:hover {
  color: #5cdb95;
}
</style>
