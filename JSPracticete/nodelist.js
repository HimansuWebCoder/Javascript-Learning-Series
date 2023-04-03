const parent = document.getElementById("parent");
let childNodes = parent.childNodes;
console.log(childNodes.length); // let's assume "2"

// let anotherChildNodes = parent.anotherChildNodes;
// console.log(anotherChildNodes.length);

parent.appendChild(document.createElement("div"));
console.log(childNodes.length); // outputs "3"

// const parent = document.getElementById("parent");
// let child = parent.child;
// console.log(child.length);
// parent.appendChild(document.createElement("div"));
// console.log(child.length);
