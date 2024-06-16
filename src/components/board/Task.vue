<template>
  <div class="task">
    <div class="task-header">
      <div class="task-title">{{ task.title }}</div>
      <div class="task-type" :style="{ backgroundColor: task.taskType.color }">{{ task.taskType.title }}</div>
    </div>
    <div class="task-deadline">Deadline: {{ (new Date(task.deadline)) }}</div>
    <div class="task-responsible">
      <img :src="task.maintainer.avatar" alt="Avatar" class="avatar" />
      <span>{{ task.maintainer.username }}</span>
    </div>
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
  background-color: #05386B;
  color: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-title {
  font-size: 1.2em;
  font-weight: bold;
}

.task-type {
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
}

.task-deadline {
  margin-top: 5px;
}

.task-responsible {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
