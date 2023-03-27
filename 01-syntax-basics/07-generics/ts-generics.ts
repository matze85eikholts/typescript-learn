function identity<Type>(argument: Type): Type {
  return argument
}
let out1 = identity<string>('Hello world')
let out2 = identity('Hello world') //type argument inference
