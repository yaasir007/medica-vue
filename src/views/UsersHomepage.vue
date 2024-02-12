<script setup lang="ts">
import Navigation from '../components/Navigation.vue'
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
          <v-btn>Combodart</v-btn>
          <v-btn>Contiflo</v-btn>
          <v-btn>Detruisitol</v-btn>
          <v-btn>Urimax</v-btn>
          <v-btn>Canova</v-btn>
          <v-btn>Duron</v-btn>
          <v-btn>Powergra</v-btn>
          <v-btn>Silagra</v-btn>
          <v-btn>Tagra</v-btn>
          <v-btn>Viagra</v-btn>
          <v-btn>Neotigason</v-btn>
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
