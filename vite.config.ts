import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Support aliasing for absolute imports
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
