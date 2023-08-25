import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  plugins: [handlebars()],
};