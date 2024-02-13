<script setup lang="ts">
const emit = defineEmits();
import Navigation from '../components/shared/Navigation.vue';
import InputSearch from '../components/user/InputSearch.vue';
import MedicineResults from '../components/user/MedicineResults.vue';

const medicineName = (userSearch: any) => {
  emit('medicine-send', userSearch)
}

</script>

<template>
  <Navigation />
  <InputSearch @medicinename="medicineName" />
  <MedicineResults />
</template>

<style lang="scss" scoped>

</style>
