import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'portfolioprimero',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'portfolioprimero/index.html'),
        about: resolve(__dirname, 'portfolioprimero/about.html'),
        skill: resolve(__dirname, 'portfolioprimero/skill.html'),
        project: resolve(__dirname, 'portfolioprimero/project.html'),
        contact: resolve(__dirname, 'portfolioprimero/contact.html'),
      },
    },
  },
  base: './', 
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_footer.scss";`,
        additionalData: `@import "./src/styles/_globals.scss";`, 
        additionalData: `@import "./src/styles/_header.scss";`, 
        additionalData: `@import "./src/styles/_layouts.scss";`, 
        additionalData: `@import "./src/styles/_mixins.scss";`, 
        additionalData: `@import "./src/styles/_variables.scss";`, 
        additionalData: `@import "./src/styles/main.scss";` 
      },
    },
  },
});