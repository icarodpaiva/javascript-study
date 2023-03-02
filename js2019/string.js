// string with 3 white-spaces before and after content
const personName = '   Icaro   '

console.log('trimStart', personName.trimStart())
console.log('trimEnd', personName.trimEnd())

// toString transofrm anything in a string
const sum = (n1, n2) => n1 * n2
console.log(sum.toString()) // (n1, n2) => n1 * n2

// doesn't work fine with objectt, use JSON.stringify()
const person = {
  firstName: 'Icaro',
  lastName: 'Paiva',
}
console.log(person.toString()) // [object Object]

// ---------------------

console.log(JSON.stringify(person)) // {"firstName":"Icaro","lastName":"Paiva"}
