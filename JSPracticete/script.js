// const btn = document.querySelector("button");
// const buttonn = document.querySelector("button");

// function myFunction() {
//   document.body.style.backgroundColor = "red";
// }

// btn.addEventListener("click", () => {
//   myFunction();
//   buttonn.toggleAttribute("disabled");
// });

// const btn = document.querySelector("button");

// function myHimansu() {
//   document.style.Color = "red";
// }

// btn.addEventListener("click", () => {
//   myHimansu();
// });

// const change = document.querySelector(".change");

// change.style.backgroundColor = "black";
// change.style.color = "white";
// change.style.border = "10px solid red";

// change.addEventListener("click", myChange);

const myButton = document.querySelector("button");
myButton.addEventListener("click", myFunction);

function myFunction() {
  const body = document.body;
  const himansu = document.createElement("div");
  body.appendChild(himansu);

  const msgBox = document.createElement("p");
  msgBox.textContent = "Hello Programmers can you helop me?";
  himansu.appendChild(msgBox);
}
