<script setup lang="ts">
import { ref, onUpdated } from 'vue'
import stores from '../../data/stores.json'

const props = defineProps(['medicineName'])
const showSearchResults = ref(false)
let itemsArray:any = ref([])

const handleFilteringStores = () => {
  let filteredStores:any = [];
  stores.forEach((store) => {
    store.medicines.forEach((med) => {
      med = med.toLowerCase();
      if (med.match(props.medicineName)) {
        filteredStores.push(store)
      }
    })
  })
  filteredStores = [...new Set(filteredStores)];
  itemsArray.value = filteredStores;
}

onUpdated(()=> {
  if (props.medicineName !== "") {
    showSearchResults.value = true;
    handleFilteringStores()
  } else {
    showSearchResults.value = false;
  }
})

// get the input search value
// use it to search in which store the medicine is available
// show only the stores that holds the medicine
</script>

<template>
  <div class="w-full flex justify-center items-center flex-col mt-10" v-if="showSearchResults">
    <div class="w-[1000px] flex flex-col gap-4">
      <h4 class="result-title">Available Pharmacies With <i>"{{ props.medicineName.toUpperCase() }}"</i></h4>

      <div class="result-items">
        <div class="result-item">
          <v-expansion-panels class="mb-6 flex gap-1" >
            <v-expansion-panel
              v-if="itemsArray.length > 0"
              v-for="(i,index) in itemsArray"
              :key="index"
            >
              <v-expansion-panel-title expand-icon="mdi-menu-down">
                <div class="w-full flex justify-between items-center gap-8">
                  <div class="store-name">{{ i.name }}</div>
                  <div class="store-description">{{ i.location }}</div>
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text>{{ i.description }}</v-expansion-panel-text>
            </v-expansion-panel>

            <div v-else style="margin-top: 1rem; font-size: 1.4rem;">
              {{ props.medicineName }} is not available
            </div>
          </v-expansion-panels>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
