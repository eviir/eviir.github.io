import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/] // enables both .vue and .md files
    }),
    Markdown()
  ],
  base: '/'
})
