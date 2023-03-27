interface Pingable {
  ping() :void;
}

class Sonar implements Pingable {
  ping(){
    console.log("Sonar is pinging");
  }
}
const sonar = new Sonar();
sonar.ping();
//---------------------------------//
interface A {
  x: number;
  y?: number;
}
class B implements A {
  x = 0;
  y = 0;
}
class C implements A {
  x = 5;
}
const c = new C();
//C.y = 10 
//It is wrong because y parameter was not implemented
console.log(c.x);