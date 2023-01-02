const person = {
  name: "Icaro",
  lastName: "Paiva",
  age: 26,
  company: null,

  get fullName() {
    return `${this.name} ${this.lastName}`
  },
  get comp() {
    return this.company
  },
  set comp(value) {
    this.company = value
  }
}
console.log("person fullName", person.fullName)

person.comp = "ACCT By Quality"
console.log("person company", person.comp)
