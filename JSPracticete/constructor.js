function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
console.log();

blueBird.name;
blueBird.color;
blueBird.numLegs;

blueBird.name = "Elvira";
blueBird.name;

console.log(blueBird.name);

function fruits() {
  this.name = "Mango";
  this.color = "Yellow";
  this.year = "20 years";
}

let newFruits = new fruits();
console.log(newFruits.name);
console.log(newFruits.color);
console.log(newFruits.year);

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

Bird.prototype.numLegs = 2;
console.log(duck.numLegs);
console.log(canary.numLegs);
