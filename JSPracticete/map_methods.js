// const users = [
//   { name: "John", age: 34 },
//   { name: "Amy", age: 20 },
//   { name: "camperCat", age: 10 },
// ];

// const names = users.map((user) => user.name);
// console.log(names);
// console.log(names);
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[0])

const users = [
	{ name: 'John', age: 34 },
	{ name: 'Amy', age: 20 },
	{ name: 'camperCat', age: 10 }
  ];
  
  const usersUnder30 = users.filter(user => user.age < 30);
  console.log(usersUnder30); 
  console.log(usersUnder30[0]);

const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
console.log(otherString);
console.log(byDigits);
