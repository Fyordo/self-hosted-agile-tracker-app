<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
};
</script>

<style scoped>
input {
  width: fit-content;
  font-family: "Nunito", sans-serif;
  background-color: #5cdb95;
  border-radius: 15px;
  padding: 10px;
  font-size: 20px;
  color: #05386b;
  border: 0;
  transition-duration: 0.2s;
}

input:focus {
  background-color: #edf5e1;
  border: 0;
  color: #05386b;
}

input:hover {
  background-color: #edf5e1;
  border: 0;
  color: #05386b;
}
</style>
