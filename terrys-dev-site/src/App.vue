<template>
  <NavBar :navigation-components="navigationComponents" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import NavBar from './components/NavBar.vue'
import NavItem from './components/NavItem.vue'
import DropdownMenu from './components/DropdownMenu.vue'
import config from '../config/app-config.json'
import { RenderableComponent } from './types/RenderableComponent.ts'

const navigationComponents: RenderableComponent[] = [
  {
    render: () => h(NavItem, { to: '/', text: 'Home' })
  },
  {
    render: () => h(DropdownMenu, { label: config.dropdownLabel, 'nav-items': config.navItems })
  }
]
</script>

<style scoped>
.nav-list > * {
  margin-right: 1rem;
}
</style>