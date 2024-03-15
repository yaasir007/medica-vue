<script setup lang="ts">
import { ref, onMounted } from "vue";
import stores from "../../data/stores.json";

interface Store {
  name: string;
  description: string;
  location: string;
}

const locations = ref<Store[]>([]);
const medName = ref("");
const medDescription = ref("");
const selectedLocations = ref([]);

const getLocations = async () => {
  stores.forEach((store: Store) => {
    let medicineLocation: any = store.location;
    locations.value.push(medicineLocation);
  });
};

onMounted(async () => {
  await getLocations();
});
</script>

<template>
  <section class="mt-15">
    <v-sheet class="mx-auto" width="600">
      <div class="flex justify-center mb-10 font-semibold text-lg">
        Add Medicine Section
      </div>
      <v-form fast-fail @submit.prevent>
        <v-text-field v-model="medName" label="Medicine Name"></v-text-field>

        <v-text-field
          v-model="medDescription"
          label="Medicine Description"
        ></v-text-field>

        <v-select
          clearable
          chips
          v-model="selectedLocations"
          label="Select Location(s)"
          :items="locations"
          multiple
        ></v-select>

        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
      </v-form>
    </v-sheet>
  </section>
</template>

<style>
#input-4 {
  background: transparent;
}
</style>
