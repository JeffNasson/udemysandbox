// if(something){
//     do something
// } else {
//     do something else
// }


const id = 100

//equal to
if(id==100){
    console.log('CORRECT')
}

//not equal to
if(id != 101){
    console.log('CORRECT');
} else {
    console.log('INCORRECT')
}

//equal to value and type
if(id === 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT')
}


//not equal to value and type
if(id !== 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT')
}

//testing the variable
if(typeof id!=='undefined'){
    console.log(`the id is ${id}`)
} else {
    console.log('no id')
}
//test if undefined
if(typeof id!== 'undefined'){
    console.log(`The id is ${id}`)
} else {
    console.log('No id')
}


//Greate or less than
if (id>=200){
    console.log('correct')
} else{
    console.log('incorrect')
}

//IF ELSE
const color = 'yellow';

if(color === 'red'){
    console.log('Color is red')
} else if(color==='blue'){
    console.log('Color is blue')
} else {
    console.log('color is not red or blue')
}



//Logical Operators

const name = 'steve'
const age=20;
//and &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`)
} else if(age>=13 && age <= 19){
    console.log(`${name} is a teenager`)
} else{
    console.log(`{$name} is an adult.`)
}

//or ||

if(age < 16 || age>65){
    console.log(`${name} cannot run in the race`)
} else{
    console.log(`${name} is registered for the race`)
}


//Ternary Operator
console.log(id === 100 ? 'Correct' : 'Incorrect')

//Without braces
if(id===100)
    console.log('Correct')
else
    console.log('incorrect')