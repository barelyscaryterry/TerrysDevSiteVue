<script setup lang="ts">
import { NavItem } from '../types/NavItem'
import { RenderableComponent } from '../types/RenderableComponent.ts'

defineProps<NavItem>()


const render: RenderableComponent['render'] = () => (`
 <div class="nav-item">
    <router-link :to="to" class="nav-link">
        <span v-if="icon" class="nav-icon">
            <img :src="icon" alt="" />
        </span>
      <span class="nav-text">{{ text }}</span>
    </router-link>
</div>
`)

</script>

<template>
  <div class="nav-item">
    <router-link :to="to" class="nav-link">
      <span v-if="icon" class="nav-icon">
        <img :src="icon" alt="" />
      </span>
      <span class="nav-text">{{ text }}</span>
    </router-link>
  </div>
</template>

<style scoped>
.nav-item {
  margin: 0 1rem;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  padding: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: rgba(100, 108, 255, 0.1);
  color: #535bf2;
}

.nav-icon {
  margin-right: 0.5rem;
}

.nav-icon img {
  width: 1rem;
  height: 1rem;
}

.nav-text {
  font-weight: 500;
}
</style>