// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
let userInput = document.querySelector('#userInput1');
// fetch JavaScript objects representing specific elements in the DOM
<<<<<<< HEAD
let userInput = document.querySelector('#userInput1');
let copy = document.querySelector('#copy');
let output = document.querySelector('section:first-of-type .output');
=======
let copy = document.querySelector('#copy');
let output = document.querySelector('#output');
>>>>>>> b830e1d4b75b2e92c7685b304452798555733558
// add an event listener on the target element
copy.addEventListener('click', handleClick);
// callback function to handle event
function handleClick(event) {
<<<<<<< HEAD
  console.log('click event', event);
  output.textContent = userInput.value;
}
// Exercise #2:
// when the user enters input text, copy the user input to the output area
=======
    console.log('click event', event);
    output.textContent = userInput.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area
let userInput2 = document.querySelector('#userInput2');
>>>>>>> b830e1d4b75b2e92c7685b304452798555733558
// fetch JavaScript objects representing specific elements in the DOM
let userInput2 = document.querySelector('#userInput2');
let element = document.createElement('div');
element.setAttribute('class', 'output');
document.querySelector('#inputEventExample').appendChild(element);
userInput2.addEventListener('input', handleInput);

// add an event listener on the target element
userInput2.addEventListener('input', handleInput);

let element = document.createElement('div');
element.setAttribute('class', 'output');
document.querySelector('#inputEventExample').append(element);

// callback function to handle event
function handleInput(event) {
<<<<<<< HEAD
  console.log('input event', event);
  element.textContent = userInput2.value;
=======
    console.log('click event', event);
    element.textContent = userInput2.value;
>>>>>>> b830e1d4b75b2e92c7685b304452798555733558
}
