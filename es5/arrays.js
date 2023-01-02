// people array
const people = [
  { lastName: "Priolli", age: 29 },
  { lastName: "Pacheco", age: 27 },
  { lastName: "Martins", age: 27 },
  { lastName: "Paiva", age: 26 },
  { lastName: "Barreto" }
]

// is array
console.log("people is Array", Array.isArray(people))
console.log("not array isArray", Array.isArray("another thing"))

// for each - enter in each position of array
people.forEach(person => console.log("person", person))

// map - change each position
const peopleWithCompany = people.map(person => ({
  ...person,
  company: "ACCT By Quality"
}))
console.log("peopleWithCompany", peopleWithCompany)

// filter - create a new array with each item if condition is true
const peopleAgeGT26 = people.filter(({ age }) => age > 26)
console.log("peopleAgeGT26", peopleAgeGT26)

// reduce - join infos
const peopleAgeSum = people.reduce(
  (acc, curr) => (curr.age ? acc + curr.age : acc),
  0
)
console.log("peopleAgeSum", peopleAgeSum)

// reduce - join infos and create a object
const peopleObject = people.reduce(
  (acc, curr) => ({
    ...acc,
    [curr.lastName]: curr.age ? `${curr.age} years old` : null
  }),
  {}
)
console.log("peopleObject", peopleObject)

// every - return if all positions has the condition true
const allPeopleHasAge = people.every(({ age }) => age)
console.log("allPeopleHasAge", allPeopleHasAge)

// some - return if some positions has the condition true
const somePeopleHasAge = people.some(({ age }) => age)
console.log("somePeopleHasAge", somePeopleHasAge)

// indexOf - return the position has value passed in argument
const firstPersonWith27YPosition = people.map(({ age }) => age).indexOf(27)
console.log("firstPersonWith27YPosition", firstPersonWith27YPosition)

// indexOf - return the last position has value passed in argument
const lastPersonWith27YPosition = people.map(({ age }) => age).lastIndexOf(27)
console.log("lastPersonWith27YPosition", lastPersonWith27YPosition)
