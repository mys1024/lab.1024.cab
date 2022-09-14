import { Link } from '@solidjs/router'

export default () => (
  <div
    flex flex-col
    items-center
    space-y-8
  >
    <h1 text-4xl>
      Pages
    </h1>
    <ul space-y-4>
      <li text="xl hover:sky" transition>
        <Link href="/webgl">WebGL</Link>
      </li>
    </ul>
  </div>
)
