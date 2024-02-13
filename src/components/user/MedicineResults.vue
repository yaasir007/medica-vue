<script setup lang="ts">
import { ref } from 'vue';
const showSearchResults = ref(false);
</script>

<template>
  <div class="result-section" v-if="showSearchResults">
    <div class="result-container">
      <h4 class="result-title">Available Pharmacies With</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.result-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2.5rem;
}

.result-container {
  width: 900px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

</style>
