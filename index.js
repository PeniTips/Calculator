"use strict";
const display = document.querySelector(".output");
function inputValue(input) {
  display.value += input;
}
function deleteDisplay() {
  display.value = String(display.value).slice(0, -1);
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}
