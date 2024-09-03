import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['redux-thunk', 'redux-devtools-extension'],  // redux-devtools-extension'ı da önceden çözümle
  },
})
