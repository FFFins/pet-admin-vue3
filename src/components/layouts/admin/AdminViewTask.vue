<template>
  <div style="display: flex;align-items: center; justify-content: center;">
    <el-image style="height: 300px" src="/admin-view-task.png"></el-image>
  </div>
  <div class="container1">

    <TaskBoard status="Post a task" iconColor="#4B00FF">
      <TaskCard
          v-for="task in activeTasks" :key="task.id"
          :title="task.title"
          :description="task.description"
          :payment="task.amount"
          backgroundColor="#7B77F9" />

    </TaskBoard>

    <TaskBoard status="Done" iconColor="green">
      <TaskCard
          v-for="task in completedTasks" :key="task.id"
          :title="task.title"
          :description="task.description"
          :payment="task.amount"
          backgroundColor="#67D067" />
    </TaskBoard>

    <TaskBoard status="Urgent" iconColor="red">
      <TaskCard
          v-for="task in urgentTasks" :key="task.id"
          :title="task.title"
          :description="task.description"
          :payment="task.amount"
          backgroundColor="#F46A6A" />
    </TaskBoard>

  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import request from "~/axios";
import {ElLoading} from "element-plus";
import {ElImage} from 'element-plus'
import {useUserStoreWithOut} from "~/store/modules/user";
import TaskBoard from "~/components/layouts/admin/task/TaskBoard.vue";
import TaskCard from "~/components/layouts/admin/task/TaskCard.vue";

const urgentTasks = ref([])
const activeTasks = ref([])
const completedTasks = ref([])

const fetchData = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  request.get({ url: '/task/get' }).then((res) => {
    urgentTasks.value = res.data['urgent']
    activeTasks.value = res.data['active']
    completedTasks.value = res.data['completed']

    loading.close()
  })}

console.log(useUserStoreWithOut().getToken)

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.container {
  display: flex;
  margin-top: 5vh;
  justify-content: space-between;
}
.container1{
  display: flex;
  margin-top: 5vh;
  width: 80vw;
  justify-content: space-around;
}
</style>
