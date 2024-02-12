<script setup lang="ts">
import HomeImage from '../assets/images/bg-main.jpg'
</script>


<template>
  <div class="home-container">
    <div class="home-image">
      <v-img
        :width="1600"
        cover
        :src="HomeImage"
      ></v-img>
    </div>

    <div class="home-nav">
      <pre class="home-welcome">Welcome to Medica</pre>
      <v-col cols="auto" class="home-btns">
        <v-btn size="large">
          <router-link to="/user">Enter As A User</router-link>
        </v-btn>
        <v-btn size="large">
          <router-link to="/admin">Enter As A Admin</router-link>
        </v-btn>
      </v-col>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
