<script setup lang="ts">
import { ref } from 'vue';
const showSearchResults = ref(true);
</script>

<template>
  <div class="result-section" v-if="showSearchResults">
    <div class="result-container">
      <h4 class="result-title">Available Pharmacies With TOTO</h4>

      <div class="result-items">

        <div class="item">
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
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
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

        <div class="item">
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
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
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

        <div class="item">
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
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
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

        <div class="item">
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
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
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

        <div class="item">
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
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
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

        <div class="item">
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
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
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
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

</style>
