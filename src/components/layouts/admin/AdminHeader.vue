<template>
  <el-header style="text-align: right; font-size: 22px;background-color: #A49384">
    <div class="toolbar">
      <AdminSearchBar></AdminSearchBar>

      <div>
        <el-avatar :size="40" :src="circleUrl"/>
        <div style="display: flex;float: right;margin-top: 10px;margin-left: 20px">
          <el-dropdown>

            <span class="el-dropdown-link">
              <span style="font-size: 20px">Tom</span>
              <el-icon class="el-icon--right">
                <arrow-down/>
              </el-icon>
            </span>

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item @click="signOut">Sign Out</el-dropdown-item>
              </el-dropdown-menu>
            </template>

          </el-dropdown>
        </div>
      </div>

    </div>
  </el-header>
</template>

<script setup lang="ts">

import {Search, Setting} from "@element-plus/icons-vue";
import {ArrowDown} from "@element-plus/icons-vue";
import {ref} from "vue";
import { useUserStoreWithOut } from '~/store/modules/user';
import router from '~/router/router';
import {ElMessage} from "element-plus";

let circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')

const signOut = () => {
  const userStore = useUserStoreWithOut();
  userStore.removeToken();
  router.push('/login');
  ElMessage.success('You have logged out.')
};
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  right: 20px;
}
</style>