<script setup lang="ts">
</script>

<template>
  <div class="content">

    <section class="why-choose-us">
      <h2>Why choose us</h2>
    </section>

    <div class="container">
      <div class="left">
        <div class="box">Flexible and Personalized Service</div>
        <div class="box">Easy Communication</div>
        <div class="box">Trusted sitters</div>
        <div class="box">Time-Saving</div>
      </div>
      <div class="right">
        <img src="../../../assets/homepage-why.png" alt="Woman and Dog">
      </div>
    </div>

    <div class = "join">
      <span>Join Our Pet Care Community</span>
    </div>

  </div>

  <div class="footer-container">
    <div class="text-area">
      Whether you're a pet owner looking for reliable care or a sitter seeking flexible opportunities, our platform makes it easy. Sign up today to experience hassle-free, personalized pet services, and become part of a growing community that puts pets first.
    </div>

    <div class="create">
      <span>Ready to get started? Create your account now and connect with trusted pet sitters in your area.
        <button class="signup"><a href="/signup" >Sign Up</a></button>
      </span>
    </div>
  </div>
</template>

<style scoped>
.content{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.container{
  display: flex;
  width: 100vw;
  height: 100%;
  justify-content: space-between;
}
.why-choose-us {
  text-align: center;
  background-color:#a39284;
  color: white;
  height: 10vh;
  margin-bottom: 30px;
  margin-top: 30px;
}
.why-choose-us h2 {
  font-size: 2rem;
  margin-bottom: 40px;
}
.left {
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-left: -5vw;
}
.right {
  flex: 0 0 60%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 20px;
  margin-right: -5vw;
}
.join {
  text-align: center;
  margin: 5vh;
  font-size: 20px;
  color: #A49384;
}
.box {
  margin: 10px;
  padding: 20px;
  height: 10vh;
  line-height: 5px;
  width: 40vw;
  background-color: #b8a89c;
  color: white;
  text-align: right;
  border-radius: 15px;
}
img {
  max-width: 80%;
  height: auto;
  border-radius: 10px;
}
.footer-container{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-container .text-area{
  width: 60vw;
  height: auto;
  margin-top: 10px;
  color: white;
  padding: 15px;
  background-color: #A49384;
  border-radius: 25px;
}
.footer-container .create{
  margin-top: 5vh;
  margin-bottom: 5vh;
  color: #A49384;
}
.footer-container .create .signup {
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #A68966;
}
.footer-container .create .signup:hover{
  background-color: #6E5543;
}
</style>