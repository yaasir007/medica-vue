<script setup lang="ts">
</script>

<template>
  <div class="homepage-container">
    <div class="login-text">Login as</div>
    <div class="homepage-btns">
      <v-btn variant="tonal">user</v-btn>
      <v-btn variant="tonal">admin</v-btn>
    </div>
  </div>
</template>

<style scoped>
.homepage-container {
  width: 100%;
  height: 100vh;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.login-text {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.homepage-btns {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}


</style>
