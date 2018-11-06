//Create some arrays

const numbers=[43,55,67,98,44,36,5];
const numbers2=new Array(22,56,34,44,6);
const drinks=['soda','beer','water','juice'];
const mixed=[22,'hello',true,null,undefined,{a:1,b:1},new Date()];

let val;

//Get array length
val=numbers.length;

//Check if it is array
val=Array.isArray(numbers);

//Get single value
val=numbers[3];

//Insert into Array
numbers[2]=100;

//Find index of value
val=numbers.indexOf(36);

//Mutating Arrays
numbers.push(250); //add on to end
numbers.pop(); //Take off from end
numbers.unshift(120); //add to beginning
numbers.shift(); //Take off from front
numbers.splice(1,1); //Splice values, first item is the index location to start at, second item is the amount to remove from array
numbers.reverse(); //reverse the array


//Concatenate Arrays
val = numbers.concat(numbers2); //adds the numbers2 array to the end of the numbers array.

//Sorting arrays
val = drinks.sort(); //will sort in alphabetical order by default

//Use the compare function
val=numbers.sort(function(x,y){
    return x-y;
}) //sort from lowest number to highest

val=numbers.sort(function(x,y){
    return y-x
}) //sort from highest number to lowest


//Find
function under50(num){
    return num<50;
}
val=numbers.find(under50) //will find the first number under 50

console.log(numbers)
console.log(val)