import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? '/VLS/' : '/',
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
