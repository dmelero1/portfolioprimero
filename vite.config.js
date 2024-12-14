import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        index: resolve(__dirname, './src/index.html'),
        about: resolve(__dirname, './src/about.html'),
        skill: resolve(__dirname, './src/skill.html'),
        project: resolve(__dirname, './src/project.html'),
        contact: resolve(__dirname, './src/contact.html'),
      },
    },
  },
  base: './', 
  scss: {
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