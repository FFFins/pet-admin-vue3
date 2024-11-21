<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const onClickLeft = () => {
  if (history.state?.back) {
    router.back()
  } else {
    router.push('/home')
  }
}
</script>

<template>
  <el-result icon="warning" title="404 Not Found" sub-title="This page is Not Found.">
    <template #extra>
      <el-button type="primary" @click=onClickLeft>Back</el-button>
    </template>
  </el-result>
</template>

<style scoped>
</style>