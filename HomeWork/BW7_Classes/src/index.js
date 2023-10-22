"use strict";

class Animal {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
  #calculatingBerthYear() {
    let date = new Date();
    return date.getFullYear() - this.age;
  }
  yearOfBerth() {
    console.log(
      `${this.name} народилась у ${this.#calculatingBerthYear()} році`
    );
  }
  eat(food) {
    console.log(`${this.name} їсть ${food}`);
  }
}

class DomesticAnimal extends Animal {
  constructor(age, name, owner) {
    super(age, name);
    this.owner = owner;
  }
  getOwner() {
    console.log(`${this.owner} є власником ${this.name}`);
  }
  status() {
    console.log(`${this.name} є домашньою твариною `);
  }
}
class Cat extends DomesticAnimal {
  constructor(age, name, owner, prey) {
    super(age, name, owner, prey);
    this.prey = prey;
  }
  hunt() {
    console.log(`${this.name} полює на ${this.prey}`);
  }
}
class Dog extends DomesticAnimal {
  constructor(age, name, owner, command) {
    super(age, name, owner, command);
    this.command = command;
  }
  obeyCommand() {
    console.log(`${this.name} виконує команду: ${this.command}`);
  }
}
class WildAnimal extends Animal {
  constructor(age, name, habitat) {
    super(age, name);
    this.habitat = habitat;
  }
  status() {
    console.log(`${this.name} є дикою твариною`);
  }
}
class Tiger extends WildAnimal {
  constructor(age, name, habitat, subspecies) {
    super(age, name, habitat);
    this.subspecies = subspecies;
  }
  displayInfo() {
    console.log(
      `Ім'я: ${this.name}, Вік: ${this.age} років, Підвид: ${this.subspecies}`
    );
  }
  makeSound() {
    console.log(`${this.name} реве: Гррр!`);
  }
  hunt() {
    console.log(`${this.name} полює на здобич`);
  }
}
class Bear extends WildAnimal {
  constructor(age, name, habitat, subspecies, weight) {
    super(age, name, habitat);
    this.subspecies = subspecies;
    this.weight = weight;
  }
  displayInfo() {
    console.log(
      `Ім'я: ${this.name}, Вік: ${this.age} років, Підвид: ${this.subspecies}, Вага: ${this.weight} кг`
    );
  }
  makeSound() {
    console.log(`${this.name} реве: Арррр!`);
  }
  forage() {
    console.log(`${this.name} шукає їжу`);
  }
}
class Bird extends Animal {
  constructor(age, name, food) {
    super(age, name);
    this.food = food;
  }
  status() {
    console.log(`${this.name} є птицею`);
  }
  diet() {
    console.log(`${this.name} споживає - ${this.food}`);
  }
}
class Eagle extends Bird {
  #farsightedness = 300;
  constructor(age, name, food, color) {
    super(age, name, food);
    this.color = color;
  }
  displayInfo() {
    console.log(
      `Ім'я: ${this.name}, Вік: ${this.age} років, Колір: ${this.color}`
    );
  }
  farsightedness() {
    console.log(`${this.name} може бачити на ${this.#farsightedness} метрів`);
  }
}
class Owl extends Bird {
  #farsightedness = 200;
  constructor(age, name, food, features) {
    super(age, name, food);
    this.features = features;
  }
  displayInfo() {
    console.log(
      `Ім'я: ${this.name}, Вік: ${this.age} років, Особливості: ${this.features}`
    );
  }
  farsightedness() {
    console.log(`${this.name} може бачити на ${this.#farsightedness} метрів`);
  }
}

const myCat = new Cat(12, "Сіма", "Марічка", "rats");
console.log(myCat);
myCat.status();
myCat.hunt();
myCat.getOwner();
myCat.eat("fish");
myCat.yearOfBerth();

const myDog = new Dog(9, "Rex", "Kate", "sit");
console.log(myDog);
myDog.status();
myDog.obeyCommand();
myDog.yearOfBerth();

const myTiger = new Tiger(3, "Leo", "Africa", "white tiger");
console.log(myTiger);
myTiger.status();
myTiger.displayInfo();
myTiger.makeSound();

const myBear = new Bear(6, "Balu", "Carpathian mountains", "brown bear", 168);
console.log(myBear);
myBear.status();
myBear.displayInfo();
myBear.forage();

const myOwl = new Owl(
  4,
  "Глафіра",
  "пшениця, ячмінь, просо, овес, рис",
  "Дзьобає оточуючих"
);
console.log(myOwl);
myOwl.status();
myOwl.diet();
myOwl.displayInfo();

const myEagle = new Eagle(8, "Grifon", "пацюки, хомяки, мілка діч", "brown");
console.log(myEagle);
myEagle.status();
myEagle.displayInfo();
myEagle.farsightedness();
myEagle.yearOfBerth();
