import type { AttributifyAttributes } from '@unocss/preset-attributify'

// JSX
declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}
