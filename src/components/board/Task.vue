<template>
    <div class="task">
      {{ task.name }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      task: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .task {
    background-color: #f4f4f4;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
  }
  </style>
  