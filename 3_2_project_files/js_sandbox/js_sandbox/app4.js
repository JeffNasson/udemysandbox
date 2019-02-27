let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem
val = list

// Get child nodes
val = list.childNodes; //gives us a NodeList of all child nodes

// Get children element nodes
val = list.children; //returns an HTML collection
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

//Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children; //gives us the children of index3

// First Child
val = list.firstChild; //returns the element type
val = list.firstElementChild; //returns the entire element

// Last Child
val = list.lastChild; //returns the element type
val = list.lastElementChild; //returns the entire element

// Count child elements
val = list.childElementCount; //returns the number of child elements



// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement; //grabs the parents, parent

// Get next sibling
val = listItem.nextSibling; 
val = listItem.nextElementSibling.nextElementSibling; 

// Get previous sibling
val = listItem.previousSibling; 
val = listItem.previousElementSibling;


console.log(val);