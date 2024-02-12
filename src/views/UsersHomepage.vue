<script setup lang="ts">
import Navigation from '../components/Navigation.vue'

const popularResults = ["Combodart", "Contiflo", "Detruisitol", "Urimax", "Canova", "Duron", "Powergra", "Silagra", "Tagra", "Viagra", "Neotigason"]
</script>

<template>
  <Navigation />
  <div class="user-section">
    <div class="user-container">
      <h3>Find a pharmacy</h3>
      <v-text-field label="Please enter the medicine name"></v-text-field>

      <div class="popular-results">
        <h4>Popular Results</h4>
        <div class="popular-result-btns">
          <v-btn
            v-for="result in popularResults"
          >
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
  margin-top: 2rem;
}

.user-container {
  width: 900px;
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
