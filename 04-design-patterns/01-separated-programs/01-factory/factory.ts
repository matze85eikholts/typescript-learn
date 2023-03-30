interface IProduct {
  name: string
}

class Shoe implements IProduct {
  name = 'some kind of old nasty shoe'
  cost: number | undefined
}
class AbibaShoe extends Shoe {
  constructor() {
    super()
    this.name = 'It is abiba shoe'
    this.cost = 50
  }
}
class NiseShoe extends Shoe {
  constructor() {
    super()
    this.name = 'It is nise shoe'
    this.cost = 100
  }
}
class ShoeFactory {
  static createShoe(shoeName: string): IProduct {
    if (shoeName === 'abiba') {
      return new AbibaShoe()
    }
    if (shoeName === 'nise') {
      return new NiseShoe()
    } else {
      return new Shoe()
    }
  }
}
const Product = ShoeFactory.createShoe(' ')
console.log(Product.name)
