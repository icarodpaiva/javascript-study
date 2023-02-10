const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
])

console.log('fruits', fruits) // Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }
console.log('apples value like an object', fruits.apples) // undefined
console.log('apples value using get method', fruits.get('apples')) // 500
