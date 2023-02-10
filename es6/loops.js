const list = ['a', 'b', 'c']
const person = {
  firstName: 'Icaro',
  lastName: 'Paiva',
}

console.log('-- for in array --')

// for in (it is not from es6) - iterate the index of an object iterable
for (let i in list) {
  console.log('i', i) // '0' '1' '2'
  console.log('i value', list[i]) // 'a' 'b' 'c'
}
console.log('-- for in object --')

for (let i in person) {
  console.log('i', i) // 'firstName' 'lastName'
  console.log('i value', person[i]) // 'Icaro' 'Paiva'
}

console.log('-- for of array --')

// for of - iterate the values of an object iterable
for (let i of list) {
  console.log('i', i) // 'a' 'b' 'c'
}

console.log('-- for of object --')

for (let i of Object.values(person)) {
  console.log('i', i) // 'Icaro' 'Paiva'
}
