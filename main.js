//* loops

//* The for...of loop
// const cats = ["Leopard", "serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (const cat of cats) {
//   console.log(cat);
// }

//* map() and filter()
// function toUpper(string) {
// 	return string.toUpperCase();
// }

// const cats = ["Leopard", "serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const upperCats = cats.map(toUpper);

// console.log(upperCats);

// function lCat(cat) {
// 	return cat.startsWith('L');
// }

// const cats = ["Leopard", "serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const filtered = cats.filter(lCat);
// console.log(filtered);

// const cats = ["Leopard", "serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const filtered = cats.filter((cat) => cat.startsWith('L'));
// console.log(filtered);

//* The Standard for loop
// for (initializer; condition; final-expression) {
// code to run
// }

// let str = "";
// for (let i = 0; i < 9; i++) {
// str = str + i;
//   str += i;
// }
// console.log(str);

// for (let i = 0; i < 9; i++) {
// console.log(i);
// more statements
// }

//* Looping through collections with a for loop
// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// for (const cat of cats) {
// 	console.log(cat);
// }
//* we could write above code like this:
// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// for ( let i = 0; i < cats.length; i++) {
// 	console.log(cats[i]);
// }

// const cats = ['Pete', 'Biggles', 'Jasmine'];

// let myFavoriteCats = 'My cats are called ';

// for (const cat of cats) {
// 	myFavoriteCats += `${cat},`
// }

// console.log(myFavoriteCats);

// const cats = ['Pete', 'Biggles', 'Jasmine'];

// let myFavoriteCats = 'My cats are called ';

// for (let i = 0; i < cats.length; i++) {
// 	if (i === cats.length - 1) {
// We are at the end of the array
// 		myFavoriteCats += `and ${cats[i]}.`
// 	} else {
// 		myFavoriteCats += `${cats[i]},`
// 	}
// }

// console.log(myFavoriteCats);

//* Exiting loops with break
// const contacts = [
//   "Himansu:9861194145",
//   "Rinky:9827852631",
//   "bou:7894041941",
//   "bapa:9777273769",
// ];
// const para = document.querySelector("p");
// const input = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   const searchName = input.value.toLowerCase();
//   input.value = "";
//   input.focus();
//   para.textContet = "";
//   for (const contact of contacts) {
//     const splitContact = contact.split(":");
//     if (splitContact[0].toLowerCase() === searchName) {
//       para.textContent = `${splitContact[0]}' s number is ${splitContact[1]}.`;
//       break;
//     }
//   }
//   if (para.textContent === "") {
//     para.textContent = "Contact not found.";
//   }
// });

//* Skipping iterations with continue
// const para = document.querySelector("p");
// const input = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   para.textContent = "Output: ";
//   const num = input.value;
//   input.focus();
//   for (let i = 1; i <= num; i++) {
//     let sqRoot = Math.sqrt(i);
//     if (Math.floor(sqRoot) !== sqRoot) {
//       continue;
//     }
//     para.textContent += `${i} `;
//   }
// });

//* while and do... while
//Syntax
// initializer
// while (condition) {
// code to run

// 	final-expression
// }

// const cats = ["Pete", "Biggles", "Jasmine"];

// let myFavoriteCats = "My cats are called ";

// let i = 0;

// while (i < cats.length) {
//   if (i === cats.length - 1) {
//     myFavoriteCats += `and ${cats[i]}.`;
//   } else {
//     myFavoriteCats += `${cats[i]}, `;
//   }

//   i++;
// }

// console.log(myFavoriteCats);

//* do while
// initializer;
// do {
// code to run

//   final - expression;
// } while (condition);

// const cats = ['Pete', 'Biggles', 'Jasmine'];

// let myFavoriteCats = 'My cats are called ';

// let i = 0;

// do {
// 	if (i === cats.length - 1) {
// 		myFavoriteCats += `and ${cats[i]}.`;
// 	} else {
// 		myFavoriteCats += `${cats[i]}, `;
// 	}

// 	i++;
// } while (i < cats.length);

// console.log(myFavoriteCats);

//* which loop type should you use?
//* see in MDN in Details

//* for...of:
// for (const item of array) {
// 	code to run
// }

//* for:
// for (initializer; CSSConditionRule; final-expression) {
// 	code to run
// }

//* while:
// initializer
// while (condition) {
// 	code to run

// 	final-expression
// }

//* and finally do...while
// initializer
// do {
// 	code to run
// 	final-expression
// } while (condition)
