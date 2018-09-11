const num1=100;
const num2=50;
let val;

// simple math with numbers
val=num1+num2;
val=num1*num2;
val=num1-num2;
val=num1/num2;
val=num1%num2;

// Math Object
val=Math.PI; //gives us pi (3.14)
val=Math.round(2.4) //rounds the number
val=Math.ceil(2.4); //rounds the number up
val=Math.floor(2.8); //rounds the number down
val=Math.sqrt(64); //gives us the square root
val=Math.abs(-3); //gives us the absolute value
val=Math.pow(8,2); //gives us the power value, ex:(8,2) is 8x8
val=Math.min(2,6,9,33,54); //returns the minimum/smallest value from the given numbers
val=Math.max(2,6,9,33,54); //returns the maximum/largest value from the given numbers
val=Math.random(); //will give a random decimal
val=Math.floor(Math.random() * 20+1); //in order to get whole numbers you must use Math.floor before your Math.random. Placing a number after the multiplication sign will give a number from 1 to the number minus 1(in this instance it will go from 1-19). In order for it to go to the assigned value, you must use +1 after the given number.  

console.log(val)