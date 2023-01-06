const person = {
  firstName: 'Icaro',
  lastName: 'Paiva',
}

// changing or creating a new propertie in object
Object.defineProperty(person, 'age', {
  value: '26',
  enumerable: true, // need it to be listed
})

console.log('person', person)

// loop with objects - the iterator get the object key
for (let i in person) {
  console.log('i', i)
  console.log(person[i])
}

// Returns object keys how an array
console.log(Object.keys(person))

// Returns object values how an array
console.log(Object.values(person))
