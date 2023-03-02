//* Basic if...else syntax
// if (condition) {
/* code to run if condition is true */
// } else {
/* run some other code instead */
// }

// the following code is also perfectly legal code
// if (condition) {
/* code to run if condition is true */
// }
/* run some other code */
// not recommended

// this syntax is perfectly valid but not recommended
// if (condition) /* code to run if condition is true */
// else /* run some other code instead */

//* A real example
// let shoppingDone = false;
// let childAllowance;

// if (shoppingDone === true) {
//   childAllowance = 10;
// } else {
//   childAllowance = 5;
// }
// childAllowance

//* Else if
// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   const choice = select.value;

//   if (choice === "sunny") {
//     para.textContent = "It is nice and sunny outside today.";
//   } else if (choice === "rainy") {
//     para.textContent = "Rain is falling outside;";
//   } else if (choice === "snowing") {
//     para.textContent = "The snow is coming down.";
//   } else if (choice === "overcast") {
//     para.textContent = "It isn't raining.";
//   } else {
//     para.textContent = "";
//   }
// }

//* A note on comparison operators
// let cheese = "Cheddar";
// let cheese;

// if (cheese) {
//   console.log("Yay! Cheese available for making cheese on toast.");
// } else {
//   console.log("No cheese on toast for you today.");
// }

// let shoppingDone = false;
// let shoppingDone = true;
// let childAllowance;

//* we don't need to explicityly specify 'shoppingDone === true'
// if (shoppingDone) {
// childAllowance = 10;
// } else {
// childAllowance = 5;
// }
// childAllowance;

//* Nesting if...else
// let choice = "sunny";
// let temperature = 78;
// let temperature = 89;
// if (choice === "sunny") {
//   if (temperature < 86) {
//     console.log(`it is ${temperature} degrees outside - nice and sunny.`);
//   } else if (temperature >= 86) {
//     console.log(`It is ${temperature} degrees outside - REALLY HOT!`);
//   }
// }

//*Logical operators: AND, OR & NOT
// test multiple conditions without nested if..else
// let choice = "sunny";
// let temperature = 85;
// let temperature = 95;

// if (choice === "sunny" && temperature < 86) {
//   console.log(`It is ${temperature} degrees outside - nice and sunny.`);
// } else if (choice === "sunny" && temperature >= 86) {
//   console.log(`It is ${temperature} degrees outside - REALLY HOT!`);
// }

//* OR
// let iceCreamVanOutside = "on fire";
// let houseStatus = "on fire";
// let houseStatus;
// if (iceCreamVanOutside || houseStatus === "on fire") {
//   console.log("You should leave the house quickly.");
// } else {
//   console.log("Probably should just stay in then.");
// }

//* NOT
// let iceCreamVanOutside = "on fire";
// let houseStatus = "on fire";
// let houseStatus;
// if (!(iceCreamVanOutside || houseStatus === "on fire")) {
// 	console.log('Probably should just stay in then.');
// } else {
// 	console.log('You should leave the house quickly.');
// }

//* mix
// if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
// run the code
// }

// it is logically not what we want!
// if (x === 5 || 7 || 10 || 20) {
// run my code
// }

// this is a complete test
// if (x === 5 || x === 7 || x === 10 || x === 20) {
// run my code
// }

//* Switch Statements
// switch (expression) {
// case choice1:
// run this code
// break;

// case choice2:
// run this code instead
// break;

// include as many cases as you like

// default:
// actually, just run this code
// }

//* A switch Example
// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   const choice = select.value;

//   switch (choice) {
//     case "sunny":
//       para.textContent = "It is nice and sunny outsie today.";
//       break;
//     case "rainy":
//       para.textContent =
//         "Rain is falling outside; take a rain coat and an umbrella.";
//       break;
//     case "snowing":
//       para.textContent = "The snow is coimg down!";
//       break;
//     case "overcast":
//       para.textContent = "It isn't raining.";
//       break;
//     default:
//       para.textContent = " ";
//   }
// }

//* Ternary Operator
// condition ? run this code : run this code instead

// const greeting = isBirthday
//   ? "Happy birthday Mrs. Himansu - we hope you have a great day!"
//   : "Good morning Mrs. Himansu.";

//* Ternary operator example
// const select = document.querySelector("select");
// const html = document.querySelector("html");
// document.body.style.padding = "10px";

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

// select.addEventListener("change", () =>
//   select.value === "black" ? update("black", "white") : update("white", "black")
// );

// const age = 25;
// const age = 20;
// const beverage = age >= 21 ? "Beer" : "Juice";
// console.log(beverage);
