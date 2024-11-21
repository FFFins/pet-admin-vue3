<script setup lang="ts">

</script>

<template>

  <div class="image-container">
    <img src="../../../assets/homepage-background.png" alt="Your Image">
    <div class="text-overlay">We treat your pet like family</div>
  </div>
</template>

<style scoped>

.image-container {
  position: relative;
  display: inline-block;
}

.image-container img {
  display: block;
  width: 100%;
  height: auto;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  width: 100%;
}

</style>