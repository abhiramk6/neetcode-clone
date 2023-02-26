import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir:"../frontend" // tell vite when you compile the app go one folder behind  put all static files there 
  }
})
