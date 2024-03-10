<script setup lang="ts">
import HomeImage from '../assets/images/bg-main.jpg'
</script>


<template>
  <div class="w-screen h-screen overflow-hidden relative">
    <div class="absolute bg-cover filter brightness-[0.4] backdrop-filter backdrop-brightness-[80%]">
      <v-img
        :width="1600"
        cover
        :src="HomeImage"
      ></v-img>
    </div>

    <div class="absolute [width:inherit] [height:inherit] flex justify-center items-center flex-col">
      <pre class="text-[2rem] text-[white]">Welcome to Medica</pre>
      <v-col cols="auto" class="flex gap-6">
        <v-btn size="large" class="border-[1px] border-[solid] border-[hotpink] text-[0.85rem] tracking-[2px]">
          <router-link to="/user" class="no-underline text-[black]">Enter As A User</router-link>
        </v-btn>
        <v-btn size="large" class="border-[1px] border-[solid] border-[hotpink] text-[0.85rem] tracking-[2px]">
          <router-link to="/admin" class="no-underline text-[black]">Enter As A Admin</router-link>
        </v-btn>
      </v-col>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
