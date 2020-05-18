const newVariable = "ES6";
const syntax = "string";
if (newVariable != "ES6") {
  console.log("brain gains");
} else if (newVariable === "ES6" && syntax === "string") {
  console.log("//30//ES6-y");
} else {
  console.log("uh oh spaghetti-o's");
}
//short for ecma script six
//why do we need let? let has more respect for scope
// const, var, let
// const setName = "cannot change"; //setName variable is now a string "cannot change"
// //in the console if you try to re-assign a new string or value to the setName variable you cannot.
// // because it is constant.
// // lets try it with numeral values
// // const newName = 10;
// // console.log(newName);
// // const newName = 10 + 2;
// // console.log(newName); //errors out because "Identifier 'newName' has already been declared."
// var anothaName = 22;
// console.log(anothaName);
// var anothaName = 22 + 1;
// console.log(anothaName); // var will let you re-assign a new value to the variable anothaName
// var anothaName = 23 + " with a string";
// console.log(anothaName);

var symbolName = "value reference in memory";
console.log(symbolName);
let letSymbol = "scoped value";
console.log(letSymbol);
const symName = "constant value in memory";
console.log(symName);

//in browswer type letSymbol = "new value" //returns a new value of "new value"
//in broswer type symName = "new value" //returns error because its a constant
//in browser type symbolName = "new value" //returns a new value of "new value"
