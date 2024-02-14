<script setup lang="ts">
const emit = defineEmits();
import Navigation from '../components/shared/Navigation.vue';
import InputSearch from '../components/user/InputSearch.vue';
import MedicineResults from '../components/user/MedicineResults.vue';

</script>

<template>
  <Navigation />
  <InputSearch />
  <MedicineResults />
</template>

<style lang="scss" scoped>

</style>
