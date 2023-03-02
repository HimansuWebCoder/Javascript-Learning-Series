// const buttonA = document.querySelector("#button_A");
// const headingA = document.querySelector("#heading_A");

// buttonA.onclick = () => {
//   const name = prompt("what is your name?");
//   alert(`Hello ${name}, nice to see you!`);
//   headingA.textContent = `Welcome ${name}`;
// };

// Without a Variable

// const buttonB = document.querySelector("#button_B");
// const headingB = document.querySelector("#heading_B");

// buttonB.onclick = () => {
//   alert(`Hello ${prompt("what is your name?")}, nice to see you!`);
//   headingB.textContent = `Welcome ${prompt("what is your name?")}`;
// };

// Declaring a Variable
// let myName;
// let myAge;
// myName;
// myAge;
// scoobyDoo;

// Initializing a variable
// myName = "himansu";
// myAge = "19";
// myName;
// myAge;

// let myDog = "Tommy";
// myDog;

// A note about var
// var myName;
// var myAge;

// var myName = "Himansu";

// function logName() {
//   console.log(myName);
// }
// logName();

// var myName;

// var myName = 'Himansu';
// var myName = 'rinky';
// you can declare many times a variable with var
// but using let not
// let myName = 'Himansu';
// let myName = 'rinky';

// you'd have to do this instead
// let myName = 'Himansu';
// myName = 'rinky';
// myName

// Updating a variable
// myName = 'rinky';
// myAge = 40;

// As aside on variable naming rules
// discuss details in MDN
// Good name examples
// age
// myAge
// init
// initialColor
// finalOutputValue
// audio1
// audio2

// Bad name examples
// 1
// a
// _12
// myage
// MYAGE
// var
// Document
// skjfndskjfndbdskjfb
// thisisareallylongvariablenameman

// Variable types

// Numbers
// let myAge = 19;
// myAge;

// Strings ('' or "")
// let dolphinGoodbye = 'So long and thanks for all the fish';
// dolphinGoodbye;

// Booleans
// let iAmAlive = true;
// iAmAlive;

// let test = 6 > 3;
// test;

// Arrays
// let myNameArray =['Himansu', 'Rinky', 'papuni'];
// let myNumberArray = [10, 15, 50];
// myNameArray;
// myNumberArray;
//* you can access each:
// console.log(myNameArray[0]);
// console.log(myNumberArray[0]);

// Objects
// let dog = {name : 'Tommy', greed : 'Dalmatian'};
// dog;
// console.log(dog.name);
// console.log(dog.greed);
// console.log(dog);

// Dynamic Typing
// let myString = 'Hello';
// myString;

// let myNumber = '509';
// oops, this is still a string
// console.log(typeof myNumber);
// myNumber = 509;
// much better - now this is a number
// console.log(typeof myNumber);

// Constants in Javascript
//* You must initialize them when you declare them
//* you can't assign them a new value after you've initialized them
//  let count;
//  const count; // error

// let count = 1;
// count;
// count = 2;
// count;

// const count = 1;
// count = 2

// but
// const bird = {species : 'Kestrel'};
// console.log(bird.species);
// you can add,remove, update like this;
// bird.species = 'Striated Caracara';
// console.log(bird.species);

// When to use const and when to use let
//* details in MDN
