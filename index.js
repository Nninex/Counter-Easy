let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}
function decrement() {
  count -= 1;
  countEl.innerText = count;
}

function save() {
  let countDash = count + ";";
  saveEl.innerText += " " + countDash;
  count = 0;
  countEl.innerText = count;
}

let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let resultEl = document.getElementById("result-el");
function addition() {
  let sum = num1 + num2;
  resultEl.textContent = "Result: " + sum;
}
function subtraction() {
  let sub = num1 - num2;
  resultEl.textContent = "Result: " + sub;
}
function division() {
  let div = num1 / num2;
  resultEl.textContent = "Result: " + div;
}
function multiplication() {
  let mul = num1 * num2;
  resultEl.textContent = "Result: " + mul;
}
