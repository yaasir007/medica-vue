<script setup lang="ts">
import { ref, defineProps, onUpdated } from 'vue'
import stores from '../../data/stores.json'

const props = defineProps(['medicineName'])
const showSearchResults = ref(false)

// get the input search value
// use it to search in which store the medicine is available
// show only the stores that holds the medicine

onUpdated(() => {
  if (props.medicineName != "") {
    showSearchResults.value = true;
  }
})
</script>

<template>
  <div class="result-section" v-if="showSearchResults">
    <div class="result-container">
      <h4 class="result-title">Available Pharmacies With {{ props.medicineName }}</h4>

      <div class="result-items">
        <div class="result-item">
          <v-expansion-panels class="mb-6 exp-items" >
            <v-expansion-panel
              v-for="i in stores"
              :key="i.name"
            >
              <v-expansion-panel-title expand-icon="mdi-menu-down">
                <div class="store-content">
                  <div class="store-name">{{ i.name }}</div>
                  <div class="store-description">{{ i.location }}</div>
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text>{{ i.description }}</v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
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
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.exp-items {
  display: flex;
  gap: 0.25rem;
}

.store-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

</style>
