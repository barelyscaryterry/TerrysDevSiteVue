<script setup lang="ts">
import NavItem from './NavItem.vue'
</script>

<template>
  <nav class="nav-bar">
    <ul class="nav-list">
      <slot slot="slot1"></slot>
      <slot name="slot2"></slot>
      <slot name="slot3"></slot>
      <slot name="slot4"></slot>
      <slot name="slot5"></slot>
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