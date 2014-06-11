
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! Enter a number from 1-6:");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid number!");
    } else {
      guesses = guesses + 1;
    }
  if (guess == location1 || guess== location2 || guess == location3) {
    alert("You've got a hit!");
    hits = hits + 1;
    if (hits == 3) {
      isSunk = true;
      alert("You sunk my battleship");
    }
  }  else {
    alert("Sorry, you haven't hit anything");
  }

}
var stats = "you took " + guesses + " guesses to sink the battleship, which means your shooting accuracy was " + (3/guesses);
alert(stats);

