// function call() {
//   const body = document.body;

//   const panel = document.createElement("div");
//   panel.setAttribute("class", "msgBox");
//   body.appendChild(panel);

//   const msg = document.createElement("p");
//   msg.textContent = "This is a message box";
//   panel.appendChild(msg);

//   const closeBtn = document.createElement("button");
//   closeBtn.textContent = "x";
//   panel.appendChild(closeBtn);

//   closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
// }

let doc = new Document();
let html = document.createElement("html");
doc.append(html);

doc.children; // HTMLCollection [<html>]
