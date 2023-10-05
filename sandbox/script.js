"use strict";

const buttonLight = document.getElementById("buttonLight");
const buttonDark = document.getElementById("buttonDark");

buttonLight.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});

buttonDark.addEventListener("click", () => {
  document.body.style.backgroundColor = "darkblue";
});
