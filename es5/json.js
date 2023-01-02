// transform json in object
const json =
  '[{ "lastName": "Priolli", "age": 29 },{ "lastName": "Pacheco", "age": 27 },{ "lastName": "Martins", "age": 27 },{ "lastName": "Paiva", "age": 26 },{ "lastName": "Barreto" }]'
console.log("json to object", JSON.parse(json))

// transform object in json
const object = [
  { lastName: "Priolli", age: 29 },
  { lastName: "Pacheco", age: 27 },
  { lastName: "Martins", age: 27 },
  { lastName: "Paiva", age: 26 },
  { lastName: "Barreto" }
]
console.log("object to json", JSON.stringify(object))
