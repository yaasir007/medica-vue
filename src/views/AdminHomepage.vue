<script setup lang="ts">
import Navigation from '../components/shared/Navigation.vue';
import Footer from '../components/shared/Footer.vue';
</script>

<template>
  <Navigation />
  <div class="content">
    <span class="text-lg">Welcome to the Admin Page</span>
    <router-link class="underline text-[black]" to="/add-medicine">Add Medicine</router-link>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.content {
  height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
}
</style>../components/admin/SideMenu.vue
