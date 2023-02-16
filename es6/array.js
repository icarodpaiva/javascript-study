const emptyArray = Array.from('')
const noEmptyArray = Array.from('ABC')
const noEmptyArrayFromObject = Array.from({ length: 3 }, (_, index) => index)

console.log('emptyArray', emptyArray) // []
console.log('noEmptyArray', noEmptyArray) // ['A', 'B', 'C']
console.log('noEmptyArrayFromObject', noEmptyArrayFromObject) // [ 0, 1, 2 ]

//  ---------------------------

// people array
const people = [
  { lastName: 'Priolli', age: 29 },
  { lastName: 'Pacheco', age: 27 },
  { lastName: 'Martins', age: 27 },
  { lastName: 'Paiva', age: 26 },
  { lastName: 'Barreto' },
]

const personWithoutAge = people.find((person) => !person.age)
console.log('personWithoutAge', personWithoutAge) // { lastName: 'Barreto' }

const indexFromPacheco = people.findIndex(
  (person) => person.lastName === 'Pacheco'
)
console.log('indexFromPacheco', indexFromPacheco) // 1
