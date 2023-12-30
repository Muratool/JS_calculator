"use strict";

let disp = document.querySelector(".calculator-display");

let num1 = document.querySelector(".calculator-btn__one");
let num2 = document.querySelector(".calculator-btn__two");

let calculator_btn = document.querySelectorAll('.calculator-btn')

let sum = document.querySelector(".sum");
let subtraction = document.querySelector(".subtraction");
let multiplication = document.querySelector(".multiplication");
let division = document.querySelector(".division");

console.dir(calculator_btn);

calculator_btn.forEach((element) => element.addEventListener('click', () => {element.classList.toggle('calculator-btn__active')}));

sum.addEventListener('click', () => {disp.innerHTML = +num1.value + +num2.value});
subtraction.addEventListener('click', () => {disp.innerHTML = +num1.value - +num2.value});
multiplication.addEventListener('click', () => {disp.innerHTML = +num1.value * +num2.value});
division.addEventListener('click', () => {disp.innerHTML = +num1.value / +num2.value});






