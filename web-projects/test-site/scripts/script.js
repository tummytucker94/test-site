
//changes images
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ars-rhetorica-logo.png') {
      myImage.setAttribute('src','images/ars-rhetorica-logo.png');
    } else {
      myImage.setAttribute('src','images/Cheers.png');
    }
}

//adds a personalized welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'The Trivium is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'The Trivium is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

