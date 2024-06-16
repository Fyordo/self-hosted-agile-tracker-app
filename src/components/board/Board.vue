<template>
    <div class="board">
      <Column v-for="column in columns" :key="column.id" :column="column" />
    </div>
  </template>
  
  <script>
  import Column from './Column.vue';
  
  export default {
    props: {
        columns: Array
    },
    components: {
      Column
    },
    data() {
      return {
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
  