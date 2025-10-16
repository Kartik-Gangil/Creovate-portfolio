import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/google-sheet': {
        target: 'https://script.google.com/macros/s/AKfycby37Vwu1zhXhnpxkKWqVIPJ3TGysVmd7EhlT3esTtSfre5FH51Qzqlb00B24gIRNU66/exec',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/google-sheet/, ''),
      },
    },
  }
});
