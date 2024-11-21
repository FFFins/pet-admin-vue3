<template>
    <transition name="fade">
      <div class="password-change-container">
        <h2>Change Your Password</h2>
        <el-input
          v-model="passwords.current"
          placeholder="Current Password"
          type="password"
          prefix-icon="el-icon-lock"
          class="password-input"
        />
        <el-input
          v-model="passwords.new"
          placeholder="New Password"
          type="password"
          prefix-icon="el-icon-lock"
          class="password-input"
        />
        <el-input
          v-model="passwords.confirm"
          placeholder="Confirm New Password"
          type="password"
          prefix-icon="el-icon-lock"
          class="password-input"
        />
        <el-button
          @click="changePassword"
          type="primary"
          class="submit-button"
        >
          Save Changes
        </el-button>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    data() {
      return {
        passwords: {
          current: '',
          new: '',
          confirm: '',
        },
      };
    },
    methods: {
      changePassword() {
        console.log("Password change attempted:", this.passwords);
      },
    },
  };
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  .password-change-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #f3f3f3;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 500px; /* Adjust width as needed */
    margin: 0 auto;
    gap: 20px; /* Space between elements */
  }
  
  .password-input {
    margin-bottom: 20px;
  }
  
  .submit-button {
    margin-top: 20px;
    background-color: #8c7b75; /* Consistent button color */
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  .submit-button:hover {
    background-color: #6e5a54; /* Button hover effect */
    transform: translateY(-2px);
  }
  </style>