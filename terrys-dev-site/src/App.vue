<style scoped>

.nav-list > * {
  margin-right: 1rem;
}
</style>

<template>
  <DropdownMenu :nav-items="navItems" label="Home"></DropdownMenu>
</template>
<script setup lang="ts">
import DropdownMenu from "./components/DropdownMenu.vue";
const navItems: DropdownMenuItem[] = [
  { id: '1', to: '/', text: "Terry's Dev Site" },
  { id: '2', to: '/about', text: 'About' },
  { id: '3', to: '/contact', text: 'Contact' }
]
</script>