// *********************************************************************************************************
// var mainContent = document.getElementById("main-content");

// *********************************************************************************************************

// var mainContent;
// mainContent = document.getElementById("main-content");
// var childElement = mainContent.children;
// console.log(childElement);

// *********************************************************************************************************

// var renderElements = document.querySelectorAll(".render");

// for (var element of renderElements) {
//     console.log(element.innerHTML);
// };


// *********************************************************************************************************

// var renderElements = document.querySelectorAll(".render");

// renderElements.forEach(element => {
//     var paragraph = document.createElement("p");
//     paragraph.textContent = `InnerHTML of.render element: ${element.innerHTML}`;
//     document.body.appendChild(paragraph);
// });

// *********************************************************************************************************

// var lastNameElement = document.getElementById("last-name");
// var emailElement = document.getElementById("email");

// console.log(lastNameElement.innerHTML);
// console.log(emailElement.innerHTML);

// var paragraph1 = document.createElement("p"); 
// paragraph1.textContent = `InnerHTML of last-name element: ${lastNameElement.innerHTML}`;
// document.body.appendChild(paragraph1); 

// var paragraph2 = document.createElement("p"); 
// paragraph2.textContent = `InnerHTML of email element: ${emailElement.innerHTML}`;
// document.body.appendChild(paragraph2); 

// *********************************************************************************************************

// var formContentElement = document.getElementById("form-content");

// var button = document.createElement("button");
// button.textContent = "Append Data";
// button.id = "append-button";

// formContentElement.appendChild(button);

// *********************************************************************************************************
const appendButton = document.getElementById("append-button");
const firstNameElement = document.getElementById("first-name");
const lastNameElement = document.getElementById("last-name");
const emailElement = document.getElementById("email");

appendButton.addEventListener("click", () => {
  const paragraph = document.createElement("p");
  paragraph.textContent = `First Name: ${lastNameElement.value}`;
  document.body.appendChild(paragraph);

appendButton.addEventListener("click", () => {
  const paragraph1 = document.createElement("p");
  paragraph1.textContent = `Last Name: ${lastNameElement.value}`;
  document.body.appendChild(paragraph1);

  const paragraph2 = document.createElement("p");
  paragraph2.textContent = `Email: ${emailElement.value}`;
  document.body.appendChild(paragraph2);
})});

console.log(firstNameElement.value);
console.log(lastNameElement.value);
console.log(emailElement.value);

// *********************************************************************************************************