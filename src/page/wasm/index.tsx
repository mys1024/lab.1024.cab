import { createSignal } from 'solid-js'
import initAddModule from './add.wat?init'

interface AddModuleExports {
  add(a: number, b: number): number
  addAndMul(a: number, b: number, c: number): number
}

const { add, addAndMul } = (await initAddModule({})).exports as unknown as AddModuleExports
const [num1, setNum1] = createSignal(1)
const [num2, setNum2] = createSignal(1)

export default () => (
  <div space-y-4 text-center>
    <div>
      {num1()} + {num2()} = {add(num1(), num2())}
    </div>
    <div>
      ({num1()} + {num2()}) x 10 = {addAndMul(num1(), num2(), 10)}
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
