const firstName='Jeff';
const lastName='Nasson';
const age=27;
const str='Ello my name is Bob';
const tags='web design,web development,programming';
let val;

val=firstName+lastName

//Concatenation
val = firstName+' '+lastName;

//Append
val='Bob ';
val+='Smith';

val='Hello, my name is '+firstName+' and I am '+age;


//Escaping
val='That\'s awesome, I can\'t wait';//the slash indicates the single quote is being used for a word/sentence and will not mess with the string itself.

//Length
val=firstName.length;

//Concat()
val=firstName.concat(' ', lastName);

//Change Case
val=firstName.toUpperCase();
val=firstName.toLowerCase();

val=firstName[2];

//indexOf()
val=firstName.indexOf('f'); //gives first index location of the given letter
val=firstName.lastIndexOf('f'); //gives the last index location of the given letter

//charAt()
val=firstName.charAt('2'); //gives the character at the requested index location
val=firstName.charAt(firstName.length-1); //Gives the last character in the index

//substring()
val=firstName.substring(0,4); //pulls the items in the string from index 0 to index 4

//slice()
val=firstName.slice(-3,4); //does the same thing as substring, however you can put a negative number and it will start at the end of the string then loop through the beginning

//split()
val=str.split(' ') //will split the string into separate arrays at the spaces
val=tags.split(','); //will split the string into separate arrays at each comma

//replace()
val=str.replace('Bob','Jared') //will search str for the first value 'Bob' and replace it with the second value 'Jared'

//includes()
val=str.includes('name') //will search str for the given value 'name' and if the value is included, will return true. If value is not included, will return false.

console.log(val)