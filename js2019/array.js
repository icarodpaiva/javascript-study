const personInside1array = [['lastName', 'Paiva', 'age', 26]]
const personInside4arrays = [[[[['lastName', 'Paiva', 'age', 26]]]]]

// remove nested arrays, the default value is 1
console.log(personInside1array.flat()) // [ 'lastName', 'Paiva', 'age', 26 ]
console.log(personInside4arrays.flat(4)) // [ 'lastName', 'Paiva', 'age', 26 ]

const list = [4, 1, 3, 2]
console.log(list.sort()) // [ 1, 2, 3, 4 ]
