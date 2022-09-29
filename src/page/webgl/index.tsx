import vert from './main.vert?raw'
import frag from './main.frag?raw'

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  return shader
}

function initProgram(gl: WebGLRenderingContext, vss: string, fss: string) {
  const vs = createShader(gl, gl.VERTEX_SHADER, vss)
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fss)
  const program = gl.createProgram()
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)
  gl.useProgram(program)
  return program
}

function draw(gl: WebGLRenderingContext) {
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.drawArrays(gl.POINTS, 0, 1)
}

export default () => {
  const canvas = <canvas width="512" height="512" /> as HTMLCanvasElement
  const gl = canvas.getContext('webgl')
  gl.clearColor(0, 0, 0, 1)
  initProgram(gl, vert, frag)
  draw(gl)
  return (
    <div
      flex flex-col
      items-center
      space-y-8
    >
      {canvas}
    </div>
  )
}
