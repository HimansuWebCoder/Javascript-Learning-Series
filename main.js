// function checkGuess() {
//   alert("I am a placeholder");
// }
// checkGuess();

console.log(2 + 2);
console.log(2 - 2);
console.log(10 * 10);
console.log(10 / 2);

const name = "Bingo";
name;
const hello = " says hello!";
hello;
const greeting = name + hello;
greeting;

let name1 = "Bingo";
name1 += " says hello!";

//  or

let name2 = "Bingo";
name2 = name2 + " says hello!";

5 === 2 + 4; // false
"Chris" === "Bob"; // false
5 === 2 + 3; // true
2 === "2"; // false; number versus string
console.log(5 === 2 + 4);
console.log("Chris" === "Bob");
console.log(5 === 2 + 3);
console.log(2 === "2");

5 !== 2 + 4; // true
"Chris" !== "Bob"; // true
5 !== 2 + 3; // false
2 !== "2"; // true; number versus string
console.log(5 !== 2 + 4);
console.log("Chris" !== "Bob");
console.log(5 !== 2 + 3);
console.log(2 !== "2");

6 < 10; // true
20 < 10; // false
console.log(6 < 10);
console.log(20 < 10);

6 > 10; // false
20 > 10; // true
console.log(6 > 10);
console.log(20 > 10);

const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
