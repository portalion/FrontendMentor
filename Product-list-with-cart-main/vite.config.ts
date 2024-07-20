import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/FrontendMentor/Product-list-with-cart-main/',

  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[name]_[local]_[hash:5]",
    },
  },
})
