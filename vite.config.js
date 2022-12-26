import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    manualChunksPlugin()
  ],
})
