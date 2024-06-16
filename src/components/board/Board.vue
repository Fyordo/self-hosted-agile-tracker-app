<template>
    <div class="board">
      <Column v-for="column in columns" :key="column.id" :column="column" />
    </div>
  </template>
  
  <script>
  import Column from './Column.vue';
  
  export default {
    components: {
      Column
    },
    data() {
      return {
        columns: [
          {
            id: 1,
            name: 'To Do',
            tasks: [
              { id: 1, name: 'Task 1' },
              { id: 2, name: 'Task 2' }
            ]
          },
          {
            id: 2,
            name: 'In Progress',
            tasks: [
              { id: 3, name: 'Task 3' }
            ]
          },
          {
            id: 3,
            name: 'Done',
            tasks: [
              { id: 4, name: 'Task 4' }
            ]
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .board {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  </style>
  