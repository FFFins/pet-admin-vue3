<template>
  <div class="task-board">
    <div class="">
      <div style="display: flex;justify-content: flex-start;margin-bottom: 30px">
        <div class="icon" :style="{ backgroundColor: iconColor}"></div>
        <span>{{ status }}</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  status: String,
  iconColor: String
});
</script>

<style scoped>
.task-board {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  margin-left: 20px;
  max-width: 500px;

}
.icon {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 40px;
}

</style>
