(module

  (func $add (param $p0 i32) (param $p1 i32) (result i32)
    local.get $p0
    local.get $p1
    i32.add
  )

  (func $addAndMul (param $p0 i32) (param $p1 i32) (param $p2 i32) (result i32)
    local.get $p0
    local.get $p1
    call $add
    local.get $p2
    i32.mul
  )

  (export "add" (func $add))
  (export "addAndMul" (func $addAndMul))
)
