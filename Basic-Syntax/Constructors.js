function bigConstructor() {
  const one = "//24// Constructor";
  function lilConstructor() {
    return one + " Function";
  }
  return lilConstructor(one);
}
console.log(bigConstructor());

// Contructor Functions
// Basically a blueprint for a house
// Creates a function that it can call upon many many times.
// Say you have a player in a game. He goes through the game and runs into apples
// So to create multiple apples in the game you write a constructor function for it.

// Always declare with uppercase for constructor function
// passing parameters to the function
function Apple(x, y, color, type, score) {
  //declare this as an object that you can pass properties values etc into
  // basically passing your params into it. then invoking it whenever you need these params!
  this.x = x;
  this.y = y;
  this.color = color;
  this.type = type;
  this.score = score;
}
let appleOne = new Apple(10, 20, "Red Yellow", "Honeycrisp", 200);
// with constructor functions you decolare with new
console.log(appleOne);
//returns our new apple // but how does it reference this apple? so you
//assign it a symbol name appleOne
// now we can make multiple apples! As many as you could ever want!
let appleTwo = new Apple(12, 20, "Red", "Gala", 200);
let appleThree = new Apple(5, 20, "Yellow", "Golden Delicious", 200);
let appleFour = new Apple(8, 20, "Light Red", "McIntosh", 200);
console.log(appleOne, appleTwo, appleThree, appleFour);
