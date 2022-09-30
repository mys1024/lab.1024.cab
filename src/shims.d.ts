// GLSL
declare module '*.vert' {
  const s: string
  export default s
}
declare module '*.frag' {
  const s: string
  export default s
}

// wat
declare module '*.wat?init' {
  const initWasm: (
    options: WebAssembly.Imports
  ) => Promise<WebAssembly.Instance>
  export default initWasm
}
