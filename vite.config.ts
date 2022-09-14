import path from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import Unocss from 'unocss/vite'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
  plugins: [
    // https://github.com/solidjs/vite-plugin-solid
    solidPlugin(),
    // https://github.com/unocss/unocss
    Unocss(),
    // https://github.com/UstymUkhman/vite-plugin-glsl
    glsl(),
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
