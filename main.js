// Basic Maths in Javascript
// Types of Numbers
// Integers e.g. 10, 400, or -5.
// Floating point numbers(floats) ex:- 12.5, 45.234544;
// Doubles spedific type of floating

// Number: BigInt64Array, Octal, Hexadecimal;

// It's all numbers to me
// const myInt = 5;
// const myFloat = 6.622;
// myInt;
// myFloat;
// console.log(typeof myInt);
// console.log(typeof myFloat);

// Useful Number methods
// const lotsOfDecimal = 1.75545689389449;
// lotsOfDecimal;
// const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
// twoDecimalPlaces;

// Converting to number data types
// let myNumber = "45";
// myNumber += 3;
// myNumber;
// console.log(typeof myNumber);
// to fix
// let myNumber = "45";
// myNumber = Number(myNumber) + 3;
// myNumber;
// console.log(typeof myNumber);

// Arithmetic Operators
// console.log(4 + 3);
// console.log(20 - 12);
// console.log(3 * 3);
// console.log(12/4);
// console.log(8%3);
// console.log(4**2);

// const num1 = 10;
// const num2 = 50;
// console.log(9 * num1);
// console.log(num1 ** 3);
// console.log(num2 / num1);

// console.log(4 + 3 + 10);
// console.log(num2 % 9) * num1;
// console.log(num2 + num1 / 8 + 2);

// Operator Precedence
// const num1 = 10;
// const num2 = 50;
// console.log(num2 + num1 / 8 + 2)
//* multiply and divide are always done first then add and subtract(calculation is always evaluated from left to right);
//* you can put ();
// console.log((num2 + num1) / (8 + 2));

// Increment and decrement operators
// guessCount++;
// 3++;
// let num1 = 4;
// num1++;
// num1;

// let num2 = 6;
// num2--;
// num2;

// Assignment Operators
// let x = 3; // x contains value of 3
// let y = 4; // y contains value of 4
// x = y; // x now contains the same value of y contains, 4
// x
// y

//  let x = 3;
//  let y = 4;
//  x += 4; // x = x + 4
//  x
//  x -= 3; // x = x - 4
//  x
// x *= 3; // x = x * 3
// x
// x /= 5; // x = x / 5
// x

// Active learning: sizing a canvas box
// see in MDN page for understand only math parts
// let x = 50;
// let y = 50;

// x = 50;
// y = 50;
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, x, y);

// Comparison Operators
// console.log(5 === 2 + 4);
// console.log(5 === 2 + 3);
// console.log(5 !== 2 + 3);
// console.log(5 !== 2 + 4);
// console.log(10 < 2);
// console.log(10 > 2);
// console.log(10 <= 2);
// console.log(10 >= 2);

//* Another Active Learning
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "start machine") {
    btn.textContent = "stop machine";
    txt.textContent = "the machine has started!";
  } else {
    btn.textContent = "start machine";
    txt.textContent = "the machine is stopped";
  }
}
