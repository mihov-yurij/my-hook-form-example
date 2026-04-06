import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import '@testing-library/jest-dom';







// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: 'boolean',
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})

