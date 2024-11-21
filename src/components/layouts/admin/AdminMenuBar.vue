<script setup lang="ts">

import {Avatar, HomeFilled, InfoFilled, Lock, Management, Message, Setting} from "@element-plus/icons-vue";
</script>

<template>

  <el-aside width="200px" height="100vh">
    <el-scrollbar>
      <el-menu router active-text-color="#ffd04b"  background-color="#A49384" style="height: 100vh">
        <el-menu-item index="/admin/viewTask">
          <template #title>
            <el-icon><HomeFilled /></el-icon>Home
          </template>
        </el-menu-item>

        <el-sub-menu index="/admin/viewTask">
          <template #title>
            <el-icon><Management /></el-icon>Task Management
          </template>
          <el-menu-item index="createTask" >Post a task</el-menu-item>
          <el-menu-item index="viewTask">View a task</el-menu-item>
          <el-menu-item index="history">Task History</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/admin/message">
          <template #title>
            <el-icon><message /></el-icon>Message
          </template>
        </el-menu-item>

        <el-sub-menu index="4">
          <template #title>
            <el-icon><Avatar /></el-icon>Pet sitters
          </template>
          <el-menu-item>View pet sitters</el-menu-item>
          <el-menu-item>Favourite</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="5">
          <template #title>
            <el-icon><Setting /></el-icon>Setting
          </template>
        </el-menu-item>

        <el-menu-item index="6">
          <template #title>
            <el-icon><InfoFilled /></el-icon>Personal Information
          </template>
        </el-menu-item>

        <el-menu-item index="7">
          <template #title>
            <el-icon><Lock /></el-icon>Change Password
          </template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>

</template>

<style scoped>
el-menu-item{
  margin-bottom: 150px;
}
</style>