<template>
    <el-container style="background-color: #f8f9fa; width:100%; display: flex; justify-content: center; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
  
        <el-form :model="form" :rules="rules" ref="formRef" label-position="top" style="width: 100%;">
          <el-form-item label="New Password:" prop="password">
            <el-input type="password" v-model="form.password" placeholder="Enter your new password" />
          </el-form-item>
          <el-form-item label="Confirm your new password:" prop="confirmPassword">
            <el-input
                type="password"
                v-model="form.confirmPassword"
                placeholder="Enter your new password again"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">Save Change</el-button>
          </el-form-item>
        </el-form>
  
    </el-container>
  </template>
  
  <script>
  import { ref, reactive } from "vue";
  import { ElMessage } from "element-plus";
  import request from "~/axios";
  
  export default {
    setup() {
      const form = reactive({
        password: "",
        confirmPassword: "",
      });
  
      const rules = {
        password: [
          { required: true, message: "New password is required.", trigger: "blur" },
          { min: 8, message: "Password must be at least 8 characters!", trigger: "blur" },
        ],
        confirmPassword: [
          { required: true, message: "Please enter your password again.", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (value !== form.password) {
                callback(new Error("Passwords do not match!"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      };
  
      const formRef = ref(null);
  
      const submitForm = () => {
        formRef.value.validate((valid) => {
          if (valid) {
            request.post({ url: '/user/updatePassword', data: form }).then((res) => {
              ElMessage.success("Password changed successfully!");
              form.password = '';
              form.confirmPassword = '';
            })
          } else {
            console.log("Validation failed!");
            ElMessage.error("The password you entered is not correct!");
          }
        });
      };
  
      return {
        form,
        rules,
        formRef,
        submitForm,
      };
    },
  };
  </script>
  
  <style scoped>
  h2 {
    font-size: 1.5rem;
    color: #333;
  }
  </style>
  