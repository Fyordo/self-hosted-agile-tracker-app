<template>
    <div class="column">
      <h2>{{ column.name }}</h2>
      <div class="tasks">
        <Task v-for="task in column.tasks" :key="task.id" :task="task" />
      </div>
    </div>
  </template>
  
  <script>
  import Task from './Task.vue';
  
  export default {
    components: {
      Task
    },
    props: {
      column: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .column {
    background-color: #e0e0e0;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    flex: 1;
  }
  .tasks {
    margin-top: 20px;
  }
  </style>
  