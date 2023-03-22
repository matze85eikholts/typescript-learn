class Greater {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet(): string {
    return this.greeting
  }
};
let greeter = new Greater("Hello world!!!");
console.log(greeter.greet());