abstract class Base {
  abstract getName(): string;
  printName() {
    console.log("Hello" + this.getName());
  }
}
//const b = new Base(); //Error example
class Derived extends Base {
  getName() {
    return "World";
  }
}
const d  = new Derived();
d.printName();