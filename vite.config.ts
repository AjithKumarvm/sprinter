import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import * as path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), tsconfigPaths()],
  server: {
    port: 4000
  },
  resolve: {
    alias: {
      src: path.resolve('src/'),
    },
  },
  base: './'
})
