<template>
  <div class="admin-login-container">
    <div class="bar">Create your Account</div>
    <div class="admin-login">
      <div class="admin-login-banner">
        <a href="/home"><img src="../assets/login-banner.png" alt="" /></a>
      </div>
      <div class="admin-login-form">
        <div class="title">Join our platform.</div>
        <div style="margin-bottom: 20px">
          <span style="font-size: 16px; color:#818181">
            Create your account in just a second.
          </span>
        </div>

        <el-form :model="postData" :rules="rules" @submit.prevent="submit" ref="postForm" style="text-align: center">
          <el-form-item label="" prop="firstName" style="margin-bottom: 20px">
            <el-input size='large' autocomplete="off" v-model="postData.firstName" placeholder="First Name:"></el-input>
          </el-form-item>

          <el-form-item label="" prop="lastName" style="margin-bottom: 20px">
            <el-input size='large' v-model="postData.lastName" placeholder="Last Name:"></el-input>
          </el-form-item>

          <el-form-item label="" prop="email" style="margin-bottom: 20px">
            <el-input size='large' v-model="postData.email" placeholder="Email Address:"></el-input>
          </el-form-item>

          <el-form-item label="" prop="password" style="margin-bottom: 20px">
            <el-input size='large' type="password" v-model="postData.password" placeholder="Enter your password:"></el-input>
          </el-form-item>

          <el-form-item label="" prop="confirmPassword" style="margin-bottom: 20px">
            <el-input size='large' type="password" v-model="postData.confirmPassword" placeholder="Confirm your password:"></el-input>
          </el-form-item>

          <el-radio-group v-model="postData.radioSelect" text-color="#818181">
            <div style="display: flex; justify-content: space-between; margin-top: 20px">
              <div>
                <el-radio :value="1">Pet sitter</el-radio>
              </div>
              <div style="margin-left: 200px">
                <el-radio :value="2" v-model="postData.role">Pet owner</el-radio>
              </div>
            </div>
          </el-radio-group>

          <div>
            <el-checkbox v-model="checkTc" label="" size="large" />
            <a>
              I agree to the <strong><a href="/signup/terms">terms and privacy policy.</a></strong>
            </a>
          </div>

          <el-form-item>
            <el-button size="large" @click="submitRequest" style="font-family:cursive,serif; font-weight: bold; margin-top: 10px; height: 40px; width: 60vw; display: inline-block" type="primary">
              Let's go!
            </el-button>
          </el-form-item>
          <a>
            Already a member? <strong><a href="/login">Log In Here</a></strong>
          </a>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.el-radio__input.is-checked + .el-radio__label {
  color: #fd7624 !important;
}
.el-radio__input.is-checked .el-radio__inner {
  background: #fd7624 !important;
  border-color: #fd7624 !important;
}

.admin-login-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;

  .bar {
    background-color:#A49384;
    width: 100vw;
    height:10vh;
    line-height: 10vh;
    font-family:cursive,serif;
    font-size: 44px;
    color: white;
    text-align: center;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .admin-login {
    background: #ffffff;
    border-radius: 10px;
    padding: 30px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80vw;
    height: 100vh;
    box-sizing: border-box;
  }

  .admin-login-banner {
    overflow: hidden;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: left;
    border-radius: 40px;

    img {
      height: 60vh;
    }
  }

  .login-btn {
    height: 54px;
    line-height: 54px;
    font-size: 20px;
    padding: 0;
  }

  .admin-login-form {
    width: 40vw;
    padding: 0 6px;

    .title {
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
import { ElMessage } from 'element-plus'
import request from '~/axios'
import { reactive, ref } from 'vue'
import router from "~/router/router";
import { useUserStoreWithOut } from "~/store/modules/user";

const postData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: ref(0),
  radioSelect: ref(0)
})

const postForm = ref()
const checkTc = ref(false)
const loading = ref(false)

const rules = reactive({
  firstName: [{ required: true, message: 'First name is required.', trigger: 'blur' }],
  lastName: [{ required: true, message: 'Last name is required.', trigger: 'blur' }],
  email: [
    { required: true, message: 'Email is required.', trigger: 'blur' },
    { type: 'email', message: 'Please enter a valid email address.', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Password is required.', trigger: 'blur' },
    { min: 8, message: 'Password must be at least 8 characters.', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: 'Please confirm your password.', trigger: 'blur' },
    { validator: (rule, value, callback) => {
        if (value !== postData.password) {
          callback(new Error('Passwords do not match.'))
        } else {
          callback()
        }
      }, trigger: 'blur' }
  ],
})

function submitRequest() {
  postForm.value.validate((valid) => {
    if (valid) {
      if (!checkTc.value) {
        ElMessage.error('You must accept the terms and conditions.')
      } else {
        request.post({ url: '/user/signup', data: postData }).then((res) => {
          ElMessage.success('Register success!')
          const userStore = useUserStoreWithOut()
          userStore.setToken(res.data)
          router.push('/admin')
        })
      }
    } else {
      ElMessage.error('Please fill in the required fields correctly.')
    }
  })
}

function submit() {
  postForm.value.validate((valid) => {
  })
}
</script>