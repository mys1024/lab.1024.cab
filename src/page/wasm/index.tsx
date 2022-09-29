import { createSignal } from 'solid-js'
import initWasm from './w.wasm?init'

interface WasmExports {
  add(a: number, b: number): number
}

const wasmInstance = await initWasm({})
const wasmExports = wasmInstance.exports as unknown as WasmExports
const { add } = wasmExports

const [num1, setNum1] = createSignal(1)
const [num2, setNum2] = createSignal(1)
const sum = () => add(num1(), num2())

export default () => (
  <div space-y-4 text-center>
    <div>
      {num1()} + {num2()} = {sum()}
    </div>
    <div space-x-4>
      <button px-2 rounded-1 bg-sky onClick={() => setNum1(num1() + 1)}>
        +1
      </button>
      <button px-2 rounded-1 bg-sky onClick={() => setNum2(num2() + 1)}>
        +1
      </button>
    </div>
  </div>
)
