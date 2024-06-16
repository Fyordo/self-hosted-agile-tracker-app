<template>
  <img :src="this.src" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  border-radius: 25px;
  backgroud-color: #111111;
  width: 500px;
  height: 500px;
  margin: 50px;
  border: 0;
}
img:hover {
  backgroud-color: #0000002a;
}
</style>
