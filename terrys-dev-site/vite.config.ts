import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { configDefaults } from "vitest/config"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: [...configDefaults.exclude, '**/node_modules/**', '**/dist/**']
  }
})
