<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ text: string }>()

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <li class="dropdown" @mouseenter="toggleMenu" @mouseleave="toggleMenu">
    <span class="dropdown-text">{{ text }}</span>
    <ul v-if="isOpen" class="dropdown-menu">
      <slot></slot>
    </ul>
  </li>
</template>

<style scoped>
.dropdown {
  position: relative;
}

.dropdown-text {
  cursor: pointer;
  padding: 0.5rem 1rem;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(100, 108, 255, 0.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1000;
}

.dropdown-menu > * {
  padding: 0.5rem 1rem;
}
</style>
