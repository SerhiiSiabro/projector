// "use strict";

//1:

// detonatorTimer(3);
// // 3
// // 2
// // 1
// // BOOM!

// function detonatorTimer(delay) {
//   let timer = setInterval(() => {
//     if (delay < 1) {
//       console.log("Boom");
//       clearInterval(timer);
//       return;
//     }
//     console.log(delay);
//     delay -= 1;
//   }, 1000);
// }

//2:

// detonatorTimer(3);
// // 3
// // 2
// // 1
// // BOOM!

// function detonatorTimer(delay) {
//   let timerId = setTimeout(function tick() {
//     if (delay < 1) {
//       console.log("Boom");
//       return;
//     }
//     console.log(delay);
//     delay -= 1;
//     timerId = setTimeout(tick, 1000);
//   }, 1000);
// }

//3:
function yearNow() {
  const today = new Date();
  return today.getFullYear();
}

let me = {
  name: "Serhii",
  residency: "Dnipro",
  gender: "male",
  age: 28,
  hobby: "running",
  car: {
    brand: "skoda",
    model: "octavia",
    yearOfProdaction: 2012,
    collar: "black",
  },
  defaultStyle: "sportive",
  currentStyle: "casual",

  defaultMood: "focused",
  currentMood: "sleepy",
  friends: ["Tom", "Ben", "Kate"],
  introduce() {
    console.log(`My name is ${this.name} and I live in ${this.residency}`);
  },
  prognose() {
    console.log(`I hope that next year I'm gonna be ${this.age + 1}`);
  },
  describeMyMood() {
    console.log(
      `Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`
    );
  },
  describeMyStyle() {
    console.log(
      `Usually I wear ${this.defaultStyle} clothes, but now I'm usin ${this.currentStyle} `
    );
  },
  describeMyCar() {
    console.log(
      `My car is ${this.car.brand} ${this.car.model}, it is ${
        this.car.collar
      } and ${yearNow() - this.car.yearOfProdaction} years old now`
    );
  },
  introduceFriends() {
    console.log(`My friends is: ${this.friends.join(", ")}`);
  },
};

me.introduce();
me.prognose();
me.describeMyMood();
me.describeMyStyle();
me.describeMyCar();
me.introduceFriends();

//4:

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);
let securedSelfDescribeMyCar = me.describeMyCar.bind(me);
let securedIntroduceFriends = me.introduceFriends.bind(me);

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
setTimeout(securedSelfPrognose, 2000); // виведе коректний результат
setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат
setTimeout(securedSelfDescribeMyCar, 4000);
setTimeout(securedIntroduceFriends, 5000);
