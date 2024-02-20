<script setup lang="ts">
import { ref } from 'vue'
import stores from '../../data/stores.json'
const showSearchResults = ref(true)


</script>

<template>
  <div class="result-section" v-if="showSearchResults">
    <div class="result-container">
      <h4 class="result-title">Available Pharmacies With TOTO</h4>

      <div class="result-items">

        <div v-for="store in stores" class="item">
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
              cover
            ></v-img>

            <v-card-title>
              {{ store.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ store.description }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange-lighten-2"
                variant="text"
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
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

.result-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

</style>
