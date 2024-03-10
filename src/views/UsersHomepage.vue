<script setup lang="ts">
import { ref } from 'vue';
import Navigation from '../components/shared/Navigation.vue';
import Footer from '../components/shared/Footer.vue'
import InputSearch from '../components/user/InputSearch.vue';
import MedicineResults from '../components/user/MedicineResults.vue';

const medicineName = ref("");

const handleMedicineName = (data: any) => {
  medicineName.value = data;
}

</script>

<template>
  <Navigation />
  <InputSearch @get-medicine="handleMedicineName" />
  <MedicineResults :medicineName="medicineName" />
  <Footer />
</template>

<style lang="scss" scoped>

</style>
