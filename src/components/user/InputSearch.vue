<script setup lang="ts">
import { ref } from 'vue';
const emits = defineEmits(['get-medicine'])

const popularResults = ["Optive", "Lumigan", "Esocip", "Urimax", "Lacrinorm", "Duron", "Powergra", "Silagra", "Tagra", "Viagra", "Neotigason"]
const medicineNameInput = ref("");

const handleMedicines = () => {
  emits('get-medicine', medicineNameInput.value.toLowerCase());
}

const handleButtonMedicine = (data: any) => {
  medicineNameInput.value = data.toLowerCase();
  handleMedicines();
}


</script>

<template>
  <div class="user-section">
    <div class="user-container">
      <h3>Find a pharmacy</h3>
      <v-text-field label="Please enter the medicine name" v-model="medicineNameInput" @keyup="handleMedicines" />

      <div class="popular-results" v-if="!medicineNameInput">
        <h4>Popular Results</h4>
        <div class="popular-result-btns">
          <v-btn v-for="result in popularResults" @click="handleButtonMedicine(result)">
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
