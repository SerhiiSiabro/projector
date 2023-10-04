"use strict";

const button = document.querySelector(".button");
const backgroundCollar = document.querySelector(".wrapper");
console.log(backgroundCollar);

button.addEventListener("click", (event) => {
  button.textContent === "Turn off"
    ? (button.textContent = "Turn on")
    : (button.textContent = "Turn off");
  //   if ((button.textContent = "Turn off")) {
  //   }
});
