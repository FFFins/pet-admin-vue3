<template>
<div class="content">

  <HomePageBaseHeader></HomePageBaseHeader>
  <HomePageIBanner></HomePageIBanner>

  <section class="how-it-works">
    <h2>How it works</h2>
    <div class="steps">

      <div class="step">
        <div class="icon">🐾</div>
        <div class="text-box">
          <p>If you're a pet owner, simply sign up and post the services your pet needs.</p>
        </div>
      </div>

      <div class="step">
        <div class="icon">🐾</div>
        <div class="text-box">
          <p>If you're a pet owner, simply sign up and post the services your pet needs.</p>
        </div>
      </div>

      <div class="step">
        <div class="icon">🐾</div>
        <div class="text-box">
          <p>If you're a pet owner, simply sign up and post the services your pet needs.</p>
        </div>
      </div>
    </div>
  </section>

  <div style="height: 5px;width: 100%;margin-bottom: 15vh;background-color: #a39283"></div>
  <section class="personalized-care">
    <div class="image-text-container">
      <div class="image-box">
        <img src="../assets/dog-sitter.png" alt="Pet Care">
      </div>
      <div class="text-box">
        <h2>Personalized Pet Care Made Easy</h2>
        <div class="parent">
          <div class="son">
            <p>This platform connects pet owners with trusted sitters, allowing owners to post care tasks and receive multiple offers from sitters, ensuring flexible, personalized pet care services.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <HomePageWhy></HomePageWhy>

</div>
</template>

<style scoped>
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: cursive;
}

.how-it-works {
  text-align: center;
  padding: 50px;
  background-color: #fff;
}

.how-it-works h2 {
  font-size: 2rem;
  margin-bottom: 40px;
}

.steps {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.step {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin: 10px;
}

.step .text-box{
  margin-top: 30px;
  background-color: #a39283;
  height: 20vh;
  width: 25vw;
  border-radius: 35px;
  padding-top: 30px;
}

.step .icon {
  padding: 15px;
  padding-bottom: 30px;
  background-color: #bbb;
  border-radius: 50%;
  font-size: 60px;
  display: inline-block;
}

.personalized-care {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #fafafa;
  font-family: cursive;
}

.personalized-care .text-box .parent{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45vw;
  height: 25vh;
  background-color: #a39283;
  border-radius: 35px;
}

.personalized-care .text-box .son{
  width: 40vw;
  height: 100px;
  color: white;
  font-size: 20px;
}

.image-text-container {
  display: flex;
  justify-content: space-between;
  width: 200%;
}

.image-box img {
  width: 80%;
  height: auto;
}

.image-text-container .text-box {
  padding-left: 20px;
}

.text-box h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.reasons {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.reason-box {
  width: 20%;
  background-color: #f9f9f9;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.join-community {
  text-align: center;
  padding: 50px;
  background-color: #fafafa;
}

.join-community h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.join-community p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.join-community button {
  padding: 15px 30px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
</style>

<script setup lang="ts">
</script>

