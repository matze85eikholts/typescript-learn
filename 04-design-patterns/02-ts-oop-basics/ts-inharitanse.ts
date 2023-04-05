interface IAnimal {
  name: string
  age: number
  legs: number
  species: string
  status: string
  introduce: () => string
}
export abstract class Animal implements IAnimal {
  constructor(
    public name,
    public age,
    public legs,
    public species,
    public status,
  ) {}

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
}
export class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark', status)
  }
}
export class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status)
  }
  introduce(): string {
    return `${super.introduce()}  Meow meow!`
  }
}
export class Dog extends Animal {
  constructor(name, age, status, public master: string) {
    super(name, age, 4, 'dog', status)
  }
  greetMaster(): string {
    return `Hello ${this.master}`
  }
}

var dog = new Dog('Sushi', 21, 'lazy', 'Billy')
console.log(dog.introduce())
console.log(dog.greetMaster())
