<script setup lang="ts">
import { RenderableComponent } from '../types/RenderableComponent.ts'

const props = defineProps<{
  navigationComponents: RenderableComponent[]
}>()
</script>

<template>
  <nav>
    <component v-for="(component, index) in navigationComponents" :is="component.render" :key="index" />
  </nav>
</template>

<style scoped>

.nav-list > * {
  margin-right: 1rem;
}
</style>