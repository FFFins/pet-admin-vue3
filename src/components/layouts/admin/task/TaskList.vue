<template>
  <div class="task-list">
    <PostTaskButton />
    <div class="task-cards">
      <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PostTaskButton from './PostTaskButton.vue';
import TaskCard from './TaskCard.vue';

defineProps({
  tasks: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.task-list {
  background-color: #f5f5f5;
  border-radius: 15px;
  padding: 20px;
  width: 100%;
}

.task-cards {
  margin-top: 20px;
}
</style>
