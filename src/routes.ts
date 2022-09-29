import { lazy } from 'solid-js'

const routes = [
  {
    path: '/',
    component: lazy(() => import('~/page/index.js')),
  },
  {
    path: '/webgl',
    component: lazy(() => import('~/page/webgl/index.js')),
  },
  {
    path: '/wasm',
    component: lazy(() => import('~/page/wasm/index.js')),
  },
  {
    path: '/*all',
    component: lazy(() => import('~/page/[...all].js')),
  },
]

export default routes
