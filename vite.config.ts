import { defineConfig } from 'vite'
import ResolveAlias from 'vite-plugin-easy-resolve-alias'
import SolidPlugin from 'vite-plugin-solid'
import Unocss from 'unocss/vite'
import Wat from 'vite-plugin-wat'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    // https://github.com/mys1024/vite-plugin-easy-resolve-alias
    ResolveAlias({ '~/': 'src/' }),
    // https://github.com/solidjs/vite-plugin-solid
    SolidPlugin(),
    // https://github.com/unocss/unocss
    Unocss(),
    // https://github.com/mys1024/vite-plugin-wat
    Wat(),
    // https://github.com/antfu/vite-plugin-inspect
    Inspect(),
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
