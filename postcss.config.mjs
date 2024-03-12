// postcss.config.mjs
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss({
      config: './src/css/tailwind.config.js'
    }),
    autoprefixer()
  ],
};
