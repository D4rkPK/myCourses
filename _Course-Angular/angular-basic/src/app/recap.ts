const username: string = "bjpc";
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,2);

class person {
  constructor(public age: number, public lastName: string){}
}
const bj = new person(23, 'Pc');
bj.age = 23;

