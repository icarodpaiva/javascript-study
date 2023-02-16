const person = {
  firstName: 'Icaro',
  lastName: 'Paiva',
}

const personWithMoreInfos = { ...person, age: 26 }

console.log('person', person) // { firstName: 'Icaro',  lastName: 'Paiva'}
console.log('personWithMoreInfos', personWithMoreInfos) // { firstName: 'Icaro',  lastName: 'Paiva', age: 26}

const list = [1, 2]
const listWithMorePositions = [...list, 3, 4]

console.log('list', list) // [1, 2]
console.log('listWithMorePositions', listWithMorePositions) // [1, 2, 3 ,4]

const paramsWithSpread = (...args) => args
console.log('paramsWithSpread', paramsWithSpread(1, 2, 3, 4)) // [1, 2, 3 ,4]
