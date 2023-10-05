"use strict";

const button = document.querySelector(".button");
const wrapper = document.querySelector(".wrapper");

function turnOn() {
  return (button.textContent = "Turn on");
}

function turnOff() {
  return (button.textContent = "Turn off");
}

button.addEventListener("click", function () {
  if (button.textContent === "Turn off") {
    turnOn();
    wrapper.classList.toggle("wrapper-black");
  } else if (button.textContent === "Turn on") {
    turnOff();
    wrapper.classList.toggle("wrapper-black");
  }
});
