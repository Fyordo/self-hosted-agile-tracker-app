<template>
  <div class="navbar-item">
    <a href="{{ this.link }}">{{ this.title }}</a>
  </div>
</template>

<script>
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
