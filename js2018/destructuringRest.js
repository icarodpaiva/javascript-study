const person = {
  name: 'Icaro',
  lastName: 'Paiva',
  age: 26,
  company: null,
}

const { name, lastName, ...rest } = person

console.log('name', name)
console.log('lastName', lastName)
console.log('rest', rest)
