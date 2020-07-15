// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/*****************************
 * Section 1 - Personal Info *
 *****************************
 *
 * Description:
 *   Change the code below to display some (static) information
 *   when a user clicks the "Show Info" button.
 *
 * Resources:
 *   (See below for drill-specific resources)
 */

function addName() {
  console.log('addName() ran');

  // See:
  // - https://www.digitalocean.com/community/tutorials/js-innertext-and-innerhtml
  // - https://www.w3schools.com/jsref/prop_node_innertext.asp

  let nameElement = document.querySelector('#name');
  nameElement.innerText = 'Peyton!';
}

function addFavoriteThings() {
  console.log('Called addFavoriteThings()');

  // 1. Get a reference to <ul id="favthings">
  // 2. Create a few list items representing your favorite things
  // 3. Add them to append them to favthings
  let favslist = document.querySelector('#favthings')
  favslist.innerHTML ='<ul> <li>beach</li> <li><ice cream></li> <li><sports></li> </ul>';
  //document.body.appendChild(favthings);

  // See:
  //   - https://htmldog.com/guides/javascript/advanced/creatingelements/
  //   - https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
  //   - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
}

function replaceImage() {
  console.log('Called replaceImage()');

  // Change the puppy picture to a picture of your choosing
let newImage = document.querySelector('#picture');
newImage.src = "https://i.pinimg.com/originals/7b/24/ba/7b24ba27b5aac57fff211e04c42d4e15.jpg";
  // See:
  // - https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-get-set-attributes.php
  // - https://www.w3schools.com/jsref/met_element_setattribute.asp
}

function changeCodeStatus() {
  console.log('Called changeCodeStatus()');

  // 1. Get a reference to <div id="codestatus">
  // 2. Create image element containing a sweet ol' meme
  // 3. Replace text in codestatus w/ image
  let nameElement = document.querySelector('#codestatus');
  nameElement.style.color = 'blue';
  nameElement.innerHTML = '<img src="https://external-preview.redd.it/N_bB0Oszfuks9wLTax6viC4Hh9FzHgpMcpYiuUHoQQU.jpg?auto=webp&s=22d6a707521ffee7ea809ec405a10477ee7bd2b8">';

}


 
// Get a reference to the button w/ id="show-info-button"
let showInfoButton = document.querySelector('#show-info-button');

// Do something when showInfoButton is clicke
showInfoButton.addEventListener('click', function() {
  console.log('Clicked "Show Info" button');

  // Implement addName, addFavoriteThings, replaceImage, changeCodeStatus above

  addName();
  addFavoriteThings();
  replaceImage();
  changeCodeStatus();
});

/**********************************
 * Section 2 - Reading From Forms *
 **********************************
 *
 * Description:
 *   Change the code below to populate the section on the right-hand
 *   side of the page with the data entered into the form.
 *
 */

// Get a reference to form w/ id="information-form"
//let informationForm = document.querySelector('#information-form');

// Do something when form is submitted

document.getElementById('information-form')informationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // You will want this here. Remove it and see what changes.
  console.log('Form submitted');
  document.querySelector(#"firstname").innerHTML  = document.querySelector("#fname").value;
  document.querySelector(#"lastname").innerHTML  = document.querySelector("#lname").value;
  document.querySelector(#"chosencar").innerHTML  = document.querySelector("#cars").value;
  console.log(document.querySelector(#"cars").value)

  

  // Your job:
  //   1. Get information typed into the form
  //   2. Display that info in "Display that info here" section

  // Google things like:
  //   javascript form element get values
});

/*************************************
 * Section 3 - Clicks and Keypresses *
 *************************************
 *
 * Description:
 *   Make the buttons in section 3 of index.html behave as described below.
 *
 */

// When a user clicks "Click me to log something to the console"
// then log something to the console

// Fill in ________ to get a reference to the correct button on the page
let consoleLogButton = document.querySelector('#console-log-button');

// Log something when that button is clicked
consoleLogButton.addEventListener('click', function() {
  console.log('Change this text if you want!');
});

let makeBlueButton = document.querySelector('#make-blue-button');
makeBlueButton.addEventListener('click', function() {
  // Your job:
  //  1. When a user clicks "Change the text to the right blue"
  var new_element = document.getElementById('colorText');
  new_element.classList.add('blue');
  //  2. Change the text in <div id="colorText">...</div> to blue
   document.getElementById('colorText').style.color = "blue";
 
});

// Adding an event listener to document means the "keydown" event
// can happen anywhere on the page and we'll respond.
  document.addEventListener('keydown', function(e){
  // This is called whenever a user pressed any key.
  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  if (e.which === 82){
  document.getElementById('colorText').style.color = "red";
  }
  //  2. Add your own keybind somewhere
  //If you press "esc"
  if (e.which === 27){
    document.body.style.backgroundColor = "green";
  }

  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events
});

/*************************************
 * Section 4 - TODO List             *
 *************************************
 *
 * Description:
 *   Build a simple TODO list.
 *
 *   For this you will need to have a listener on the submit form and add
 *   anything entered into the text box to the to do list on the right side.
 *
 * Bonus:
 *   Add a delete button next to each item and allow it to delete the item
 *   it is next to.
 */

// Your code goes here
document.getElementById("tdList").addEventListener('submit', function(task){
  

});

/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************
 *
 * Description:
 *   Use the setInterval function to create a counter that counts every
 *   second on the page (Should look kind of like a stopwatch counting up).
 *   Display this in the span with the id of 'seconds'.
 *
 *   Then use the SetTimeout function to display something (your choice) to the
 *   div with the id 'delayedDisplay' after 5 seconds have passed.
 *
 * Resources:
 *   - https://javascript.info/settimeout-setinterval
 *
 */

// Your code goes here

/****************************************
 * Section 6 - Your own section!        *
 ****************************************
 *
 * Description:
 *   Add your own section to this page with its own event listeners.
 *   Use a JavaScript event listener that is new to you.
 *   Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 *   Click on each event listener to see an example of how it is used
 *
 */

// Your code goes here

// let document = document.querySelector ('#helpme');

// function peyton () {

//   document.getElementById('clickthis').innerHTML = 'JavaScript is hard';
//   peyton ('JavaScript is really hard')
// }

// document.addEventListener ('click', peyton(){
//   console.log('Called makeyourown()');

//   peyton()

// });


