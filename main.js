//* Arrays
//* Creating arrays
// const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// console.log(shopping);

// const sequence = [1, 1, 2, 3, 5, 8, 14];
// const random = ['tree', 254, [0, 1, 2]];
// sequence;
// random;

//* Finding the length of an array
//* length
// const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// console.log(shopping.length)

//* Accessing and Modifying array items
// const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// console.log(shopping[0]);

// const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// shopping[0] = 'tahini';
// console.log(shopping);

//* Finding the index of items in an array
// //* indexOf();
// const birds = ['Parrot', 'Falcon', 'Owl'];
// console.log(birds.indexOf('Owl'));
// console.log(birds.indexOf('Rabbit'))

//* Adding items
//* push()
// const cities = ["Manchester", "Liverpool"];
// cities.push("Cardiff");
// console.log(cities);
// cities.push('Bradford', 'Brighton');
// console.log(cities);

// const cities = ['Manchester', 'Liverpool'];
// const newLength = cities.push('Bristol');
// console.log(cities);
// console.log(newLength);

//* unshift()
// const cities = ['Manchester', 'Liverpool'];
// cities.unshift('Edinburgh');
// console.log(cities);

// * Removing items
//* pop() remove last item
// const cities = ['delhi', 'bhubaneswar'];
// cities.pop();
// console.log(cities);

// const cities = ['delhi', 'pune'];
// const removedCity = cities.pop();
// console.log(removedCity);

//* shift() remove 1st item
// const cities = ['delhi', 'pune'];
// cities.shift();
// console.log(cities);

//* splice() remove item using indexOf
// const cities = ['pune', 'delhi', 'mumbai', 'bihar'];
// const index = cities.indexOf('delhi');
// if (index !== -1) {
// 	cities.splice(index, 1);
// }
// console.log(cities);

// const cities = ['pune', 'delhi', 'mumbai', 'bihar'];
// const index = cities.indexOf('delhi');
// if (index !== -1) {
// 	cities.splice(index, 2);
// }
// console.log(cities);

//* Accessing every item
//* for...of
// const birds = ['Parrot', 'crow', 'Owl'];

// for (const bird of birds) {
// 	console.log(bird);
// }

//*map()
// function double(number) {
// 	return number * 2;
// }
// const numbers = [5, 2, 7, 6];
// const doubled = numbers.map(double);
// console.log(doubled);

//*filter()
// function isLong(city) {
// 	return city.length > 5;
// }
// const cities = ['London', 'India', 'Pune', 'Mumbai'];
// const longer = cities.filter(isLong);
// console.log(longer);

//* Converting between strings & arrays
//* split()
// const data = 'pune, mumbai, bihar, delhi, punjab, odisha';
// split it at each comma:
// const cities = data.split(',');
// cities;
// console.log(cities.length);
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[cities.length - 1]);

//* join()
// const commaSeparated = cities.join(',');
// commaSeparated;

//* toString()
// const dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger'];
// console.log(dogNames.toString());

//? Active Learning: Printing those products#
//? Active Learning: Top 5 searches#
//? These are in MDN read and understand
