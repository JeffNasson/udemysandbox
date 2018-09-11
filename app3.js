let val;

//Number to string
val=String(555);
val=String(4+4);

//Bool to string
val=String(true);

//Date to string
val = String(new Date());

//Array to string
val = String([1,2,3,4])

// toString()
val=(5).toString();
val=(true).toString();

//String to number
val=Number('5'); //returns 5
val=Number(true); //returns 1
val=Number(false); //returns 0
val=Number(null); //returns 0
val=Number('hello'); //returns NaN
val=Number([1,2,3]); //returns NaN

val=parseInt('100'); // parses as an integer(whole number)
val=parseFloat('100.30'); //will parse with decimals

//Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());


const val1=5;
const val2=6;
const sum= val1+val2;

console.log(sum);
console.log(typeof sum);