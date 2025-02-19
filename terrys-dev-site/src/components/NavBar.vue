<script setup lang="ts">
import NavItem from './NavItem.vue'
import DropdownMenu from './DropdownMenu.vue'
</script>

<template>
  <nav class="nav-bar">
    <ul class="nav-list">
      <nav-item to="/" text="Home"></nav-item>
      <nav-item to="/about" text="About"></nav-item>
      <dropdown-menu text="Projects">
        <nav-item to="/service1" text="Vue Website"></nav-item>
        <nav-item to="/service2" text="React Website"></nav-item>
        <nav-item to="/service2" text="Angular Website"></nav-item>
      </dropdown-menu>
      <nav-item to="/contact" text="Contact"></nav-item>
    </ul>
  </nav>
</template>

<style scoped>
.nav-bar {
  background-color: #333;
  padding: 1rem;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list > * {
  margin-right: 1rem;
}
</style>