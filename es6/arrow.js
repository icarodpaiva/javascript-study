const defaultFunction = function (n1, n2) {
  return n1 + n2
}

const shortArrowFunction = (n1, n2) => n1 + n2

const longArrowFunction = (n1, n2) => {
  return n1 + n2
}

console.log(defaultFunction(1, 1)) // 2
console.log(shortArrowFunction(1, 1)) // 2
console.log(longArrowFunction(1, 1)) // 2
