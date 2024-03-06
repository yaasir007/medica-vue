<script lang="ts" setup>

</script>

<template>
  <div class="nav-container">
    <p><router-link to="/">MEDICA</router-link></p>
  </div>
</template>

<style lang="scss" scoped>
.nav-container {
  background-color: rgb(201, 205, 208);
  height: 8vh;
  padding-inline: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    font-size: large;
    font-weight: 600;

    a {
      text-decoration: none;
      color: black;
    }
  }
}
</style>
