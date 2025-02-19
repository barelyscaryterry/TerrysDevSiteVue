<style scoped>
.nav-bar {
  background-color: #333;
  padding: 1rem;
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 100%;
  z-index: 1000;
}

.nav-list > * {
  margin-right: 1rem;
}
</style>

<template>
  <NavBar class="nav-bar">
      <nav-item to="/" text="Home"></nav-item>
      <nav-item to="/about" text="About"></nav-item>
      <nav-item to="/contact" text="Contact"></nav-item>
  </NavBar>
</template>
<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>