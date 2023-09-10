import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  plugins: [handlebars({
    partialDirectory: 'src/partials',
  })],
});
