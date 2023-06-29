class Person {
  name = "Max";
  constructor() {
    this.age = 30;
  }
  greet() {
    console.log("hi,i'm" + this.name + this.age);
  }
}

const person = new Person();
person.greet();
