<script setup lang="ts">
import NavItem from './NavItem.vue'
</script>

<template>
  <nav class="nav-bar">
    <ul v-if="isOpen" class="dropdown-menu">
      <NavItem v-for="item in navItems" :key="item.id" :to="item.to" :text="item.text" :id="item.id"></NavItem>
    </ul>
  </nav>
</template>

<style scoped>
.nav-bar {
  background-color: #333;
  padding: 1rem;
}

.nav-list > * {
  margin-right: 1rem;
}
</style>