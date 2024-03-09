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
  <div class="w-full flex justify-center items-center flex-col mt-8">
    <div class="w-[1000px] flex flex-col gap-4">
      <h3 class="font-bold">Find a pharmacy</h3>
      <v-text-field label="Please enter the medicine name" v-model="medicineNameInput" @keyup="handleMedicines" />

      <div class="flex flex-col gap-4" v-if="!medicineNameInput">
        <h4 class="font-bold">Popular Results</h4>
        <div class="flex flex-wrap gap-4">
          <v-btn v-for="result in popularResults" @click="handleButtonMedicine(result)">
            {{ result }}
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
