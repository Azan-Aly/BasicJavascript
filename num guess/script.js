const para = document.getElementById("mypara");
let mynum = Math.floor(Math.random() * 100) + 1;
console.log(mynum);
let attempts = 0; // Add a counter for attempts

function checkGuess() {
  attempts++; // Increment attempts counter each time function is called
  
  let num = prompt("Guess a number between 1 and 100");
  num = parseInt(num);
  
  let text = "Your guess is greater than the number";
  let text2 = "Your guess is smaller than the number";
  let text3 = "Enter valid input";
  
  if (isNaN(num)) {
    alert(text3);
    attempts--; // Don't count invalid inputs as attempts
  } else if (num === mynum) {
    alert(`Yeah! Correct. You guessed it in ${attempts} attempts!`);
  } else if (num > mynum) {
    alert(text);
    checkGuess(); // Continue game
  } else if (num < mynum) {
    alert(text2);
    checkGuess(); // Continue game
  }
}

// Start the game
checkGuess();