const assignOps = () => {
  const assignment = "//4// Assignment-Operators in JavaScript";
  return assignment;
};
console.log(assignOps());

// Operators that we can use in JavaScript
// MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators

let number = 20;
console.log(number);
// lets take a look at the different types of assignment operators
number += 30;
console.log(number);
// now we're using += which adds to the existing value. basically combining the values together and re-assigning it back to the variable numbers
// now dividing
number /= 4;
console.log(number);
// modulous dividing
number %= 4;
console.log(number);
// multiplying itself 4 times
number **= 4;
console.log(number);
//As you can see we're able to re-assign a new value to number by passing more values to numbers.
//+= doesn't deal with numbers, it actually deals with strings as well. A lil somethin called concatination
const myName = "Carlitos" + " Redding";
// two separate srtings
console.log(myName);
//CarlitosRedding is the output and they are concatinated with each other. Notice the space before the R in Redding. You need that so you have some space between strings.
const stringNum = "Carlitos" + 22;
console.log(stringNum); //Carlitos22
// the other way around // THIS IS polymorphism = changes and adapts to the env around it.
const numString = 7 + "Carlitos";
console.log(numString);

let pet = "Cat";
console.log(pet);
pet += " Dog";
console.log(pet);
/// just think of polymorphism as play dough. you can keep sculpting, pushing and molding it into specific molds or shapes.
