<template xmlns="">
  <div class="task-card"  :style="{ backgroundColor: backgroundColor }">
    <h2 class="title" :style="{backgroundColor:titleBackgroundColor}">{{ title }}</h2>
    <p class="details">{{ description }}</p>

    <div class="images" style="height: 20vh;width: 20vh; ">
      <el-image :src="imgUrl" style=""></el-image>
    </div>

    <div class="info">
      <p>Payment: {{ payment }}</p>
      <p>Publish time: {{ targetDate }}</p>
    </div>

    <div class="actions">
      <button class="archive" v-if="taskStatus !== 1" @click="archive(id)">Archive</button>

      <button  class="delete" @click="deleteTask(id);">Delete</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { ElLoading, ElMessage } from "element-plus";
import request from "~/axios";
import router from "~/router/router";

const props = defineProps({
  title: String,
  id:Number,
  description: String,
  imgUrl:String,
  payment: String,
  targetDate: String,
  location: String,
  backgroundColor:String,
  titleBackgroundColor:String,
  taskStatus:Number
});

const archive = (id) => {
  request.post({ url: '/task/complete?id='+id },).then((res) =>{
    ElMessage.success("Complete task success!")
    //router.go(0)
  })
};

const deleteTask = async (id) =>{
  request.delete({ url: '/task/delete?id='+id },).then((res) =>{
  })
  ElMessage.success("Delete success!")
  //router.go(0)
}

</script>

<style scoped>
.task-card {
  padding: 20px;
  border-radius: 20px;
  width: 60vw;
  display: flex;
  flex-direction: column;
}

.title {
  width: auto;
  align-self: flex-start;
  font-size: 24px;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
}

.details {
  margin: 10px 0;
  color: white;
  font-size: 16px;
}

.images {
  display: flex;
  gap: 10px;
}

.info {
  color: white;
  margin: 20px 0;
}

.actions {
  align-self: flex-end;
  display: flex;
  gap: 10px;
}

.archive {
  background-color: #75ca75;
  color: white;
  padding: 10px;
  border-radius: 10px;
}

.delete {
  background-color: #f44;
  color: white;
  padding: 10px;
  border-radius: 10px;
}
</style>
