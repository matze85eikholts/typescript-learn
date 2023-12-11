let user: [string, number] = ["Ivan", 25];
console.log(user[1]);
user[1] = 30;
console.log(user[1]);
//---------------------------------------
let newUser: [string, number] = ["Marina", 25];
for (const prop of user) {
  console.log(prop);
}
//-------------tuples in functions--------------------
function printUser(user: [string, number]) {
   console.log(user[0]);
   console.log(user[1]);
}
let tom: [string, number] = ["Tom", 36];
printUser(tom);

//----------tuple as a function returning result
function createUser(name: string, age: number): [string, number] {
  return [name, age];
}
user = createUser("Barbara", 23);
console.log(user[0] +" "+user[1]);
