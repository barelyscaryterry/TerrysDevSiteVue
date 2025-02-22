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
    <NavItem slot="slot1" to="/" text="Terry's Dev Site"></NavItem>
      <NavItem slot="slot3" to="/about" text="About"></NavItem>
      <NavItem slot="slot4" to="/contact" text="Contact"></NavItem>
    <DropdownMenu text="Services" slot="slot5">
      <NavItem to="/services/web-development" text="Web Development"></NavItem>
      <NavItem to="/services/graphic-design" text="Graphic Design"></NavItem>
      <NavItem to="/services/marketing" text="Marketing"></NavItem>
    </DropdownMenu>
  </NavBar>
</template>
<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import NavItem from "./components/NavItem.vue";
import DropdownMenu from "./components/DropdownMenu.vue";
</script>