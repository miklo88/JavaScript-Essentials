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

//////prototype///////////////////////
function myPrototype() {
  const char = "//25// Prototypes and why JavaScript loves them";
  function newPrototype(myPrototype) {
    return myPrototype + " //26// Applying prototype methods";
  }
  return newPrototype(char);
}
console.log(myPrototype());
// shared objects that have properties or methods and be accessed by other means
// a shared object for shared members
// Apple.prototype = {
//   eat() {
//     return this;
//   },
//   throw() {
//     return this;
//   },
// };
Apple.prototype.eat = function () {
  return this;
};
Apple.prototype.throw = function () {
  return this;
};
//what about THIS???
// you incorperate this to the prototype object so when invoked it knows
// what context or exact object it is referring to
console.log(appleTwo);
// the best part about the THIS context in the protoype function method on our
//apple object is that it works up and down the same chain.
// so if invoked from appleOne and you work down the chain, you can work back up the
//same path to go back up the chain.
