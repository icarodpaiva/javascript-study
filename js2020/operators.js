// nullish (??) - just work with null or undefined
console.log('nullish boolean:', false ?? 'default value') // true
console.log('nullish boolean:', true ?? 'default value') // false
console.log('nullish null:', null ?? 'default value') // default value
console.log('nullish undefined:', undefined ?? 'default value') // default value

console.log('------------------------------')

// chaining operator
const person = {
  firstName: 'Icaro',
  lastName: 'Paiva',
}

console.log(person?.company?.name) // undefined - prevent errors in access properties from undefined
console.log(person?.firstName) // Icaro - works normally when the propertie exist
