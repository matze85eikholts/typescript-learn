interface Pingable {
  ping(): void
}

class Sonar implements Pingable {
  ping() {
    console.log('Sonar is pinging')
  }
}
const sonar = new Sonar()
sonar.ping()
//---------------------------------//
interface A {
  x: number
  y?: number
}
class B implements A {
  x = 0
  y = 0
}
class C implements A {
  x = 5
}
const c = new C()
//C.y = 10
//It is wrong because y parameter was not implemented
console.log(c.x)

//-----similar example----------//
interface IRectangle {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}
const rect1: IRectangle = {
  id: '01',
  size: {
    width: 30,
    height: 30,
  },
  color: '#abc',
}
const rect2: IRectangle = {
  id: '02',
  size: {
    width: 30,
    height: 20,
  },
}
console.log(rect1.color)
console.log(rect1.size.width)
rect2.color = '#abb'
console.log(rect2.color)
