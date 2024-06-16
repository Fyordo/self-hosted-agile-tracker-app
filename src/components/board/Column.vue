<template>
  <div class="column">
    <div
      class="column-header"
      :style="'background-color: ' + this.column.color"
    ></div>
    <h2>{{ column.title }}</h2>
    <div class="tasks">
      <Task v-for="task in column.tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  components: {
    Task,
  },
  props: {
    column: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.column {
  background-color: #edf5e1;
  padding: 10px;
  margin: 10px;
  border-radius: 15px;
  flex: 1;
}
.column-header {
  border-radius: 15px;
  height: 20px;
}
.tasks {
  margin-top: 20px;
}
</style>
