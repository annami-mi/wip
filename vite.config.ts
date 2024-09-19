import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      defaultImport: 'url',
      svgo: false,
    })],
  resolve: {
    alias: [ { find: '@', replacement: resolve(__dirname, './src/') } ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/app/styles/variables.scss";`,
      },
    },
  },
  server: {
    port: 5174, // Вы также можете настроить порт, если нужно
  },
});
