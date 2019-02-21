//function declarations
function greet(firstName='John',lastName='Doe'){
    // console.log('hello')
    return 'Hello ' + firstName + ' ' +lastName
}
console.log(greet('John','Smith'));



//function expression
const square = function(x){
    return x*x
}

console.log(square(8))


// immediately invokable function expressions - IFFEs
(function(){
    console.log('IFFE Ran..')
})()

(function(name){
    console.log('Hello '+name)
})('Brad')



//property methods
const todo = {
    add: function(){
        console.log('Add todo...')
    },
    edit: function(id){
        console.log(`Edit to do ${id}`)
    }
}

todo.delete=function(){
    console.log('Delete todo...')
}

todo.add();
todo.edit(22);
todo.delete();