import { Link } from '@solidjs/router'

export default () => (
  <div
    flex flex-col
    items-center
    space-y-8
    text-center
  >
    <h1 text-4xl>
      Pages
    </h1>
    <ul space-y-4>
      <li text="xl hover:sky" transition>
        <Link href="/webgl">WebGL</Link>
      </li>
      <li text="xl hover:sky" transition>
        <Link href="/wasm">WebAssembly</Link>
      </li>
    </ul>
  </div>
)
