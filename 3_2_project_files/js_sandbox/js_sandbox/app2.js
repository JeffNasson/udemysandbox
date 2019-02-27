// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title')

// Change styling
    document.getElementById('task-title').style.background='#333'
    //or
    taskTitle.style.background='#333'

    document.getElementById('task-title').style.color='#fff'
    //or
    taskTitle.style.color='#fff'

    document.getElementById('task-title').style.padding='5px'
    //or
    taskTitle.style.padding='5px'
    // document.getElementById('task-title').style.display='none'


// Change content
    document.getElementById('task-title').textContent='Task List';
    //or
    taskTitle.textContent = 'Task List'

    document.getElementById('task-title').innerText='My Tasks';
    //or
    taskTitle.innerText='My Tasks'

    document.getElementById('task-title').innerHTML='<span style="color:red">Tasks</span>';
    //or
    taskTitle.innerHtml='<span style="color:red">Tasks</span>';


//document.querySelector()
console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5')) 

document.querySelector('li').style.color='red'; //only picks the first selector
document.querySelector('ul li').style.color='blue'; 

document.querySelector('li:last-child').style.color='red'; //styles the last li 
document.querySelector('li:nth-child(3)').style.color='yellow'; //styles the third li
document.querySelector('li:nth-child(4)').textContent='No You'; // changes the text of the 4th child
document.querySelector('li:nth-child(odd)').style.background='#ccc'; // changes the background color of the first odd li tag to #ccc