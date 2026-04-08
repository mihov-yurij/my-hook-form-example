import { defineConfig as defineViteConfig } from 'vite';
import { defineConfig as defineVitestConfig, mergeConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// 1. Базовый конфиг Vite
const viteConfig = defineViteConfig({
  plugins: [react()],
});

// 2. Конфиг с тестами
export default mergeConfig(
  viteConfig,
  defineVitestConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
  })
);
