class Car {
  constructor(model, year) {
    this.model = model
    this.year = year
  }
}

// creating a car
const monza = new Car('monza', 1970)
const argo = new Car('argo', 2023)

console.log('monza', monza)
console.log('argo', argo)
