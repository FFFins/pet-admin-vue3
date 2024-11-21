<template>
    <div class="center-box">
      <p class="title">Terms and Conditions</p>
    </div>
  <div class="article">
    <p class="subtitle">1. User Account and Security</p>
    <p>By registering for an account, you agree to provide accurate and complete information as prompted by the registration process. You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security. We are not liable for any loss or damage arising from your failure to protect your account credentials.</p>
    <p class="subtitle">2. Use of Personal Information</p>
    <p>We collect personal information, such as your name, email address, and contact details, to provide services and improve your experience on our platform. By registering, you consent to the collection, use, and storage of your personal information in accordance with our privacy policy. We take reasonable measures to protect your personal data but cannot guarantee absolute security.</p>
    <p class="subtitle">3. Termination and Suspension</p>
    <p>We reserve the right to suspend or terminate your account at any time, without prior notice, if we determine that you have violated any of the terms and conditions. Upon termination, your access to the platform will be revoked, and any data associated with your account may be deleted. You may also choose to terminate your account at any time by contacting customer support, subject to our data retention policies.</p>
    <p class="subtitle">4. User Account and Security</p>
    <p>By registering for an account, you agree to provide accurate and complete information as prompted by the registration process. You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security. We are not liable for any loss or damage arising from your failure to protect your account credentials.</p>
    <p class="subtitle">5. Use of Personal Information</p>
    <p>We collect personal information, such as your name, email address, and contact details, to provide services and improve your experience on our platform. By registering, you consent to the collection, use, and storage of your personal information in accordance with our privacy policy. We take reasonable measures to protect your personal data but cannot guarantee absolute security.</p>
    <p class="subtitle">6. Termination and Suspension</p>
    <p>We reserve the right to suspend or terminate your account at any time, without prior notice, if we determine that you have violated any of the terms and conditions. Upon termination, your access to the platform will be revoked, and any data associated with your account may be deleted. You may also choose to terminate your account at any time by contacting customer support, subject to our data retention policies.</p>
  </div>
  <div class="back">
    <el-button type="primary" @click=onClickLeft style="font-family:cursive,serif; font-size: 2vh; color: white; font-weight: bold; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)">
      Back
    </el-button>
  </div>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.center-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color:#a39284;
  height: 10vh;
  width: 100vw;
  font-size: 10vh;
  margin-top: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
.title {
  font-family:cursive,serif;
  font-size: 0.5em;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.subtitle {
  font-weight: bold;
}
.article {
  margin-top: 8vh;
  padding: 4vh;
}
.article p {
  margin: 15px;
  line-height: 1.6;
}
.back {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 5vh;
}
</style>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const onClickLeft = () => {
  if (history.state?.back) {
    router.back()
  } else {
    router.push('/signup')
  }
}
</script>