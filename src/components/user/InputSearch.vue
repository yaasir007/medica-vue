<script setup lang="ts">
import { ref } from 'vue';

const popularResults = ["Combodart", "Contiflo", "Detruisitol", "Urimax", "Canova", "Duron", "Powergra", "Silagra", "Tagra", "Viagra", "Neotigason"]
const medicineNameInput = ref("");

const getMedicines = (medicine: any) => {
  console.log(medicine);
  console.log(medicineNameInput.value);
  medicineNameInput.value = medicine;
}
</script>

<template>
  <div class="user-section">
    <div class="user-container">
      <h3>Find a pharmacy</h3>
      <v-text-field label="Please enter the medicine name" v-model="medicineNameInput" @keyup.enter="getMedicines" />

      <div class="popular-results" v-if="!medicineNameInput">
        <h4>Popular Results</h4>
        <div class="popular-result-btns">
          <v-btn v-for="result in popularResults" @click="getMedicines(result)">
            {{ result }}
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
}

.user-container {
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.popular-results {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .popular-result-btns {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
}

</style>
