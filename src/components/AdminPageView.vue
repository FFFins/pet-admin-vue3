<template>
  <div class="common-layout">
    <el-container style="height: 100vh">
      <AdminMenuBar></AdminMenuBar>
      <el-container>
        <AdminHeader></AdminHeader>
        <el-main>
          <router-view />
        </el-main>
        <el-footer style="background-color: #A49384;text-align: center;line-height: 60px">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
</script>