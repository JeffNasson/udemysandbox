//FOR LOOPS 
// for(let i=0; i<10; i++){
//     // console.log(i)
//     if(i===2){
//         console.log(`2 is my favorite number`)
//         continue;
//     }
//     if(i===5){
//         console.log('Stop the loop')
//         break
//     }
//     console.log('Number '+i)
// }


//WHILE LOOP
// let z=0

// while(z<10){
//     console.log(`Number `+z)
//     z++
// }


//DO WHILE LOOP
// let i =0

// do {
//     console.log('Number ' + i);
//     i++;
// }

// while(i<10)

const cars=['Ford','Honda','Toyota','Mazda']

// for(let i=0; i<cars.length;i++){
//     console.log(cars[i]);
// }

//FOR EACH 
// cars.forEach(function(car,index,array){
//     console.log(`${index} : ${car}`);
//     console.log(array)
// })

//MAP
// const users =[
//     {id:1,name:'John'},
//     {id:2,name:'Mike'},
//     {id:3,name:'Steve'},
// ]

// const ids = users.map(function(user){
//     return user.id
// })

// console.log(ids)




//FOR IN LOOP
const user = {
    firstName: 'Bob',
    lastName: 'Loblaw',
    age:40
}
for(let x in user){
    console.log(`${x}: ${user[x]}`)
}
