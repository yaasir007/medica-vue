<script setup lang="ts">
</script>

<template>
  <div class="homepage-container">
    <img src="../assets/images/bg-main.jpg" alt="" srcset="" class="bg-img">
    <div class="homepage-content">
      <div class="login-text">Welcome to MedPlus</div>
        <div class="homepage-btns">
          <v-btn variant="tonal" class="homepage-btn">user</v-btn>
          <v-btn variant="tonal" class="homepage-btn">admin</v-btn>
        </div>
    </div>
  </div>
</template>

<style scoped>
.homepage-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  color: whitesmoke;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: relative;
  filter: brightness(40%) blur(4px);
}
.homepage-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
}

.homepage-btns {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.homepage-btn {
  padding-inline: 6rem;
}

</style>
