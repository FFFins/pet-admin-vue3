<template>
  <div class="admin-login-container">

    <div class="admin-login">

      <div class="admin-login-banner ">
        <a href="/home"><img style="height: 400px" src="../assets/dog-sitter.png"  alt=""/></a>
      </div>

      <div class="admin-login-form">
        <div class="title">Into our platform.</div>
        <hr class="rounded">

        <div style="margin-bottom: 20px">
          <span style="font-size: 16px; color:#818181 "> </span>
        </div>

        <el-form :model="postData" :rules="rules"  @submit.prevent="submit" ref="postForm" style="text-align: center">

          <el-form-item label="" prop="UserEmail" style="margin-bottom: 20px">
            <el-input size='large' v-model="postData.email" placeholder="Enter your email address: "></el-input>
          </el-form-item>

          <el-form-item label="" prop="EnterPassword" style="margin-bottom: 20px">
            <el-input size='large'  type="password"  v-model="postData.password" placeholder="Enter your password: "></el-input>
          </el-form-item>

          <div style="margin-left: 179px">
            <el-checkbox v-model="checkTc" label="" size="large"  />
            <a>
              Remember Me
            </a>
          </div>

          <el-form-item>
            <el-button size="large" @click="submitRequest" style="margin-top: 10px;height: 50px;font-size: 20px; ;width: 100vw;display: inline-block" type="primary">Log In </el-button>
          </el-form-item>

          <a>
            Don't have an account? <strong><a href="/signup" >Sign Up</a></strong>
          </a>

        </el-form>

      </div>
    </div>

  </div>
</template>

<style lang="scss">

.admin-login-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;

  .admin-login {
    background: #ffffff;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80vw;
    height: 100vh;
    box-sizing: border-box;
  }

  .admin-login-banner {
    overflow: hidden;
    height: auto;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: left;
    border-radius: 40px;

    img {
      border-radius: 20px;
    }
  }

  .login-btn {
    height: 54px;
    line-height: 54px;
    font-size: 20px;
    padding: 0;
  }

  .admin-login-form {
    justify-items: right;
    width: 30vw;
    padding: 0 6px;
    margin-left: 5vw;

    .title {
      //text-align: center;
      margin-bottom: 10px;
      font-size: 50px;
      color: black;
      font-family: Inter,serif;
    }

    .el-input__inner {
      border-color: #9dc0fc;
      height: 54px;
      line-height: 54px;
      font-size: 18px;
    }
  }
}
</style>

<script setup>
import { reactive, ref } from 'vue'
import request from '~/axios'
import { ElMessage } from 'element-plus'
import router from "~/router/router";
import {useUserStoreWithOut} from "~/store/modules/user";

const postData = reactive({
  email:'',
  password:'',
  role:ref(1),
  radioSelect:ref(0),
})

const postForm = ref()
const checkTc = ref()
const rules = reactive({
  })

function submitRequest() {
  console.log(postData)
  request.post({ url: '/user/login', data: postData })
      .then((res) => {
        // if (res === undefined) {
        //   ElMessage.error('Unexpected error occurred.')
        // }
        if (res && res.data) {
          ElMessage.success('Login success!')
          const userStore = useUserStoreWithOut()
          userStore.setToken(res.data)
          console.log(userStore.getToken)
          router.push('/admin')
        } else {
          ElMessage.error('Unexpected error occurred.')
        }
      })

      .catch((error) => {
        if (error.response && error.response.status === 500) {
          ElMessage.error('Internal server error. Please try again later.')
        } else if (!navigator.onLine) {
          ElMessage.error('No network connection. Please check your internet.')
        } else {
          ElMessage.error('An error occurred. Please try again.')
        }
      })
}

function submit() {
  postForm.value.validate((valid) => {
  })
}
</script>