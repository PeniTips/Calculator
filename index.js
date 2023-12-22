"use strict";
const display = document.querySelector(".output");

//display input value
function inputValue(input) {
  display.value += input;
}
// making the del button functional
function deleteDisplay() {
  if (display.value === "error" || !display.value) {
    display.value = "";
  } else {
    display.value = String(display.value).slice(0, -1);
  }
}

//making the C button functional
function clearDisplay() {
  display.value = "";
}
//Evaluating values
function calculate() {
  if (!display.value) {
    display.value = "";
  } else {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "error";
    }
  }
}
