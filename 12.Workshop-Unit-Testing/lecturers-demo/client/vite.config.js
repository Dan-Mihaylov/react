import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    environment: 'jsdom',
    globals: false,
    setupFiles: ['./src/tests/setup.js'],
    coverage: {
      provider: 'istanbul'
    }
  }
})
