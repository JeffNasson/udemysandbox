const name='Bob';
const age=30;
const job='Web Developer';
const city='Provo';
let html;

//Without template strings(es5)
// html='<ul><li>Name: '+name+' </li><li>Age: '+age+' </li><li>Job: '+job+'</li><li>City: '+city +' </li></ul>';

function hello(){
    return 'hello';
}

//With template strings/template literals(es6)
let html=
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30':'Under 30'}</li>
</ul>;

document.body.innerHTML=html;
