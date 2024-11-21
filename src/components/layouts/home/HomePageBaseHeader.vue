<template>
  <header class="header">
    <div class="logo">
      <img src="../../../assets/logo.png" alt="Logo">
    </div>

    <nav class="nav-menu">
      <a href="#">Become a pet sitter</a>
      <a href="#">Are you pet owner</a>
      <a href="#">Contact us</a>
      <a href="#">About us</a>
      <div class="auth-buttons">
        <button class="login"><a href="/login">Log In</a></button>
        <button class="signup"><a href="/signup" >Sign Up</a></button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import '../../../styles/reset.min.css'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e1bda3;
  opacity: 0.5;
  height: 8vh;
  padding: 10px 20px;

  position: absolute;
  width: 100%;
  top: 0;
  font-size: 20px;
  z-index: 1;
}

.logo img {
  height: 50px;
}

.nav-menu {
  display: flex;
  gap: 20px;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding-top: 1vh;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.auth-buttons button {
  background-color: #8B6B52;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.auth-buttons .signup {
  background-color: #A68966;
}

.auth-buttons button:hover {
  background-color: #6E5543;
}

</style>
