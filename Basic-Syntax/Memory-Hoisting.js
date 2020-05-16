function myMemory() {
  const hoisting = "Memory Hoisting in JavaScript";
  function concat(myMemory) {
    return "//20// " + myMemory;
  }
  return concat(hoisting);
}
console.log(myMemory());

//Memory Hoisting is a feature of JS
//MEMORY - Names that are referred to values that are stored in memory.
//HOISTING - to lift up.

function printName() {
  console.log(a);
  var a = 200;
  return "John Doe";
}
printName(); // returns undefined
//why?
// because when our git compiler gathers its ingredients like a chef before cooking it looks at the syntax on the file.
// the order of the syntax the order in which the ingredients go into the cooking process.
// example. if you need tomatoes for your sauce and in your list you have onions, garlic, rosemary then tomatoes and he is going down the list
// he'll say i dont have tomatoes for this sauce because they're undefined. so you must start with tomatoes. Then towards the other
//ingredients.
// Memory - all the ingredients needed for a recipie.
// Hoisting - the order in which you add your ingredients.
