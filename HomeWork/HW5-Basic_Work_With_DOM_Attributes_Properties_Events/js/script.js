"use strict";

const button = document.querySelector(".button");
const wrapper = document.querySelector(".wrapper");
const infoClick = document.getElementById("infoClick");

button.addEventListener("click", function () {
  const timeNow = new Date();
  infoClick.style.display = "block";
  if (button.textContent === "Turn off") {
    turnOn();
    wrapper.classList.toggle("wrapper-black");

    infoClick.textContent = `Last turn off: ${formatDate(timeNow)}`;

    setInfo();
  } else if (button.textContent === "Turn on") {
    turnOff();
    wrapper.classList.toggle("wrapper-black");

    infoClick.textContent = `Last turn on: ${formatDate(timeNow)}`;

    setInfo();
  }
});

if (localStorage.getItem("collorWrapper")) {
  const storedTime = JSON.parse(localStorage.getItem("time"));
  const storedButtonText = JSON.parse(localStorage.getItem("buttonText"));
  const storedCollorWrapper = JSON.parse(localStorage.getItem("collorWrapper"));

  button.textContent = storedButtonText;
  infoClick.style.display = "block";
  infoClick.textContent = storedTime;
  wrapper.classList.toggle("wrapper-black", storedCollorWrapper);
}

function turnOn() {
  return (button.textContent = "Turn on");
}

function turnOff() {
  return (button.textContent = "Turn off");
}

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return (
    [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("-") +
    " " +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(":")
  );
}

function setInfo() {
  localStorage.setItem("time", JSON.stringify(infoClick.textContent));
  localStorage.setItem("buttonText", JSON.stringify(button.textContent));
  localStorage.setItem(
    "collorWrapper",
    JSON.stringify(wrapper.classList.contains("wrapper-black"))
  );
}
