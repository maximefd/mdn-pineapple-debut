var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ananas.png') {
      myImage.setAttribute ('src','images/unicycle.png');
    } else {
      myImage.setAttribute ('src','images/ananas.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to the perfect pineapple project, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to the perfect pineapple project, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
