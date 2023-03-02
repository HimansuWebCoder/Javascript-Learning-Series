//? Strings the basics
//* Creating a string
// const string = "The revolution will not be televised.";
// string;

// const badString1 = This is a test;
// const badString2 = 'This is a test;
// const badString3 = This is a test';

//* work if :-
// const string = "I am a programmer";
// const badString = string;
// badString;

//* Single quotes ('') vs. Double quotes ("")
// const sgl = 'Single quotes.';
// const dbl = "Double quote";
// sgl;
// dbl;

// const badQuotes = 'What on earth?";

// const sglDbl = 'Would you eat a "fish supper"?';
// const dblSgl = "I'm feeling blue.";
// sglDbl;
// dblSgl;

// const bigmouth = 'I've got no right to take my place..'; // wrong

// *Escaping characters in a string
// const bigmouth = 'I\'ve got no right to take my place..';
// bigmouth;

// *Concatenating Strings
// const greeting =`Hello`; // it is a string like normal string Template literal

// const one = "Hello, ";
// const two = "how are you?";
// const joined = `${one}${two}`;
// joined;

//* Concatenation in context
// const button = document.querySelector("button");

// function greet() {
//   const name = prompt("What is your name?");
//   alert(`Hello ${name}, nice to see you!`);
// }
// button.addEventListener("click", greet);

// *Concatenation using "+"
// const greeting = "Hello";
// const name = "Himansu";
// console.log(greeting + " " + name);

//* Using Template literal
// const greeting = "Hello";
// const name = "Himansu";
// console.log(`${greeting},${name}`);

//* Numbers vs. Strings
// const name = "Front ";
// const number = 232;
// console.log(`${name}${number}`);

//*Number().
// const myString = "123";
// const myNum = Number(myString);
// console.log(typeof myNum);

//*toString().
// const myNum2 = 123;
// const myString2 = myNum2.toString();
// console.log(typeof myString2);

//* Including expressions in strings

// const song = "Fight the Youth";
// const score = 9;
// const highestScore = 10;
// const output = `I like the song ${song}. I gave it a score of ${(score / highestScore)* 100}%.`;
// output;

// * Multiline Strings
// const output = `I like the song. I gave it a score of 90%.`;
// output;

//* using (\n)
// const output = "I like the song. \nI gave it a score of 90%.";
// output;
// console.log(output);

//* Useful String Methods
//* Strings as Objects
// const string = 'This is my string';

//* Finding the lenght of a string
// const browserType = 'mozilla';
// console.log(browserType.length);

//* Retrieving a specific string character
// const browserType = 'mozilla';
// console.log(browserType[0]);
// console.log(browserType[browserType.length-1]);

//* Testing if a string contains a substring
//*includes()
// const browserType = 'mozilla';
// if (browserType.includes('zilla')) {
// 	console.log('Found zilla!');
// } else {
// 	console.log('No zilla here!');
// }

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

//*startsWith()
// const browserType = 'mozilla';

// if (browserType.startsWith('zilla')) {
// 	console.log('Found zilla!');
// } else {
// 	console.log('No zilla here!');
// }

// const browserType = 'mozilla';

// if (browserType.endsWith('zilla')) {
// 	console.log('Found zilla!');
// } else {
// 	console.log('No zilla here!');
// }

//* Finding the position of a substring in a string
//* indexOf()
// const tagline = 'MDN - Resources for developer, by developers';
// console.log(tagline.indexOf('developers'))
// console.log(tagline.indexOf('x'));
// because x is not present in string

// const tagline = "MDN - Resources for developer, by developers";
// const firstOccurrence = tagline.indexOf("developers");
// const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

// console.log(firstOccurrence);
// console.log(secondOccurrence);

//* Extracting a substring from a string
//* slice()
// const browserType = 'mozilla';
// console.log(browserType.slice(1,4));
// first include but not last
// console.log(browserType.slice(2));

//* Changing case
//* toUpperCase()
//* toLowerCase()
// const radData = 'My NaMe Is MuD';
// console.log(radData.toLowerCase());
// console.log(radData.toUpperCase());

//* Updating parts of a string
//* replace()
// const browserType = 'mozilla';
// const updated = browserType.replace('moz', 'van');

// console.log(updated);
// console.log(browserType);

// let browserType = 'mozilla';
// browserType = browserType.replace('moz', 'van');

// console.log(browserType);

//*replaceAll()
// let quote = 'To be or not to be';
// quote = quote.replaceAll('be', 'code');

// console.log(quote);

//* Active Learning Examples
//* Filtering greeting messages
//*Fixing capitalization
//*Making new strings from old parts
//* All above in MDN DOCS
//* Read and see those
