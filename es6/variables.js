const v = 'v'
let v2 = 'v2'

console.log(v2) // v2
;(function exampleFunction() {
  const v = 'v internal'
  let v2 = 'v2 internal'

  console.log(v) // v internal
  console.log(v2) // v2 internal

  v2 = 'v2 internal changed'

  console.log(v2) // v2 internal changed
})()

v2 = 'v2 changed'

console.log(v) // v
console.log(v2) // v2 changed
