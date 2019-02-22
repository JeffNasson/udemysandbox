let val;

val=document;
val = document.all;
val = document.all[0]; //access items in the collection/array like you would an array
val = document.all[1];
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images; //will place images into an array

val = document.scripts;
val = document.scripts[2].getAttribute('src'); //grabs the 'src' attribute of the third script

let scripts = document.scripts;

// scripts.forEach(function(script){
//   console.log(script); //errors out because .forEach is for arrays only
// })

let scriptsArray = Array.from(scripts)
scriptsArray.forEach(function(script){
  console.log(script.getAttribute('src')) //works because we formatted scripts into an array
})



console.log(val)