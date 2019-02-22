// WINDOW METHODS / OBJECTS / PROPERTIES

// console.log(123)

//ALERT
window.alert('Hello Everyone!')
//or
alert('Hello Everyone')

//PROMPT
const input = prompt()
alert(input)
//insert a line of text into the alert function using the prompt function to display an alert of the input value

//CONFIRM
if(confirm('Are you sure?')){
    console.log('Yes')
} else {
    console.log('No')
}


let val;

//Outer height and width
val = window.outerHeight;
val = window.outerWidth;


//Inner height and width
val = window.innerHeight;
val = window.innerWidth;

//Scroll Points
//used for loading animations/ads/pictures at scroll points on a page. Need to have a div with a scrollable screen to make use of scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
window.location.href = 'http://google.com' //assigns a new location using a url

//Reload
window.location.reload() //reloads the page

//History Object
window.history.go(-1); //go backs one page
val = window.history.length; //the number of pages cached in your current tabs history

//Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);