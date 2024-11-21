<template>
  <div class="input_box">
  <el-input
      style="width: 240px;height: 30px;border-radius: 130px"
      size="small"
      placeholder="Search anything"
      :suffix-icon="Search"
  />
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {Search} from "@element-plus/icons-vue";

let input = ref()
</script>

<style lang="less">
</style>
