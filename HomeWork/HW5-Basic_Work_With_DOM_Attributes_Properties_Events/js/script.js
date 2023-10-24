"use strict";

const button = document.querySelector(".button");
const wrapper = document.querySelector(".wrapper");
const infoClick = document.getElementById("infoClick");

button.addEventListener("click", function () {
  const timeNow = new Date();
  infoClick.style.display = "block";
  if (button.textContent === "Turn off") {
    turnOn(timeNow);
    setInfo();
  } else if (button.textContent === "Turn on") {
    turnOff(timeNow);
    setInfo();
  }
});

if (localStorage.getItem("pageSettings")) {
  const pageSettings = JSON.parse(localStorage.getItem("pageSettings"));
  button.textContent = pageSettings.buttonText;
  infoClick.style.display = "block";
  infoClick.textContent = pageSettings.time;
  wrapper.classList.toggle("wrapper-black", pageSettings.collorWrapper);
}

function turnOn(timeNow) {
  button.textContent = "Turn on";
  wrapper.classList.toggle("wrapper-black");
  infoClick.textContent = `Last turn off: ${formatDate(timeNow)}`;
}

function turnOff(timeNow) {
  button.textContent = "Turn off";
  wrapper.classList.toggle("wrapper-black");
  infoClick.textContent = `Last turn on: ${formatDate(timeNow)}`;
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
  const pageSettings = {
    time: infoClick.textContent,
    buttonText: button.textContent,
    collorWrapper: wrapper.classList.contains("wrapper-black"),
  };
  localStorage.setItem("pageSettings", JSON.stringify(pageSettings));
}
