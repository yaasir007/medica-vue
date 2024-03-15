<script setup lang="ts">
import Navigation from '../components/shared/Navigation.vue';
import Footer from '../components/shared/Footer.vue';
</script>

<template>
  <Navigation />
  <router-link to="/add-medicine" class="no-underline text-[black]">Add Medicine</router-link>
  <Footer />
</template>

<style lang="scss" scoped>
</style>
