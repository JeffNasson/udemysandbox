// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item')
console.log(items);
console.log(items[0]); //gives us the first list item
items[0].style.color='red' //styles the first items class
items[3].textContent = 'Hello' //changes the text at items index3

const listItems = document.querySelector('ul').getElementsByClassName('collection-item')
console.log(listItems)


// document.getElementsByTagName
let lis = document.getElementsByTagName('li') //selecting by the tagname instead of the class
console.log(lis);
console.log(lis[0]); //gives us the first lis item
lis[0].style.color='blue' //styles the first lis class
lis[3].textContent = 'Goodbye' //changes the text at lis index3

// Convert HTML Collection into array

lis = Array.from(lis)

lis.reverse();

lis.forEach(function(li){
    console.log(li.className);
    li.textContent = 'Hello';
})

console.log(lis)



// document.querySelectorAll

const newItems = document.querySelectorAll('ul.collection li.collection-item')
console.log(newItems)

newItems.forEach(function(item,index){
    item.textContent = `${index} : Hello`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li,index){
    li.style.background = '#ccc' //styles every odd listItem 
})

for(let i=0; i< liEven.length;i++){
    liEven[i].style.background = `#f4f4f4`
}