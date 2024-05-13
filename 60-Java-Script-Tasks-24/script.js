// ************************************************************************************************************
// *****   The nodeType property returns an integer that ***********************************************************************************
// *****   represents the type of the node. ***********************************************************************************
// var element = document.getElementById("form-content");
// var nodeType = element.nodeType;
// console.log(nodeType);

// ************************************************************************************************************

// var elementTwo = document.getElementById("last-name");
// console.log("Node type elementwith ID 'LastName'; ", element.nodeType);

// var childNode = element.firstChild;
// console.log("Node type of the first child node:", childNode.nodeType);

// ************************************************************************************************************

// !!!!!!!!! Get the element with id "lastName" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  var lastNameElement = document.getElementById("lastName");
// !!!!!!!!! Get the first child node of the element !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!! (assuming it's a text node)  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  var childNodeTwo = lastNameElement.childNodes[0];
// !!!!!!!!! // Update the text content of the child node  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// childNode.nodeValue = "New Last Name";
// ************************************************************************************************************

// !!!!!!!!! Get the element with id "lastName"  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var mainContentElement = document.getElementById("main-content");
// !!!!!!!!! Get the next sibling element of "lastName" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var firstChild = mainContentElement.firstElementChild;
// !!!!!!!!! Get the previous sibling element of "lastName"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var lastChild = mainContentElement.lastElementChild;

// !!!!!!!!! Log the next and previous sibling elements to the console !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log("First child element of the 'main-content';", firstChild);
// console.log("Last child element of the 'main-content';", lastChild);


// ************************************************************************************************************

// // !!!!!!!!! Get the element with id "lastName"  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var lastNameElement = document.getElementById("lastName");
// // !!!!!!!!! Get the next sibling element of "lastName" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var nextSibling = lastNameElement.nextElementSibling;
// // !!!!!!!!! Get the previous sibling element of "lastName"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var previousSibling = lastNameElement.previousElementSibling;

// // !!!!!!!!! Log the next and previous sibling elements to the console !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log("Next sibling element of the 'lastName';", nextSibling);
// console.log("Previouis sibling element of the 'lastName';", previousSibling);


// ************************************************************************************************************

// !!!!!!!!! / Get the element with id "email" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var emailElement = document.getElementById("email");
// !!!!!!!!! Get the parent node of the element !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var parentNode = emailElement.parentNode;
// !!!!!!!!! Get the node type of the element !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var nodeType = emailElement.nodeType;

// !!!!!!!!! Log the parent node and node type to the console !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log("Parent node of 'email';", parentNode);
console.log("Node type of 'email';", nodeType);


// ************************************************************************************************************

















