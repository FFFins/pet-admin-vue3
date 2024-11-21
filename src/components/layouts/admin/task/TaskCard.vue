<template>
  <div class="task-card" :style="{ backgroundColor: backgroundColor }">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div v-if="showDetail">show detail</div>
    <p><strong>Payment:</strong> {{ payment }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  payment: String,
  backgroundColor: String,
  imgUrl:String,
  showDetail:Boolean
});
</script>

<style scoped>
.task-card {
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 20px;
  color: white;
  font-family: 'Arial', sans-serif;
}
h3 {
  margin-top: 0;
  font-size: 18px;
}
</style>
