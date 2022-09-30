import path from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import Unocss from 'unocss/vite'
import Wat from 'vite-plugin-wat'

export default defineConfig({
  plugins: [
    // https://github.com/solidjs/vite-plugin-solid
    solidPlugin(),
    // https://github.com/unocss/unocss
    Unocss(),
    // https://github.com/mys1024/vite-plugin-wat
    Wat(),
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
