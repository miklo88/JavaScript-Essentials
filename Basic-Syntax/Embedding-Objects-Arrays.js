function embeddingOBArrs() {
  const Embed = "//14// Embedding objects and arrays";
  return Embed;
}
console.log(embeddingOBArrs());

//objects containing other objects
//arrays containing objects
//just like a car engine, piece by piece by piece all layered to work in unison to make it go.
// just rememeber objects contain objects.

const BMW = {
  make: "BMW",
  speed: 180,
  engine: {
    size: 2.0,
    make: "BMW",
    fuel: "petrol",
    pistons: [
      { maker: "BMW" },
      { maker: "BMW" },
      { maker: "BMW" },
      { maker: "BMW" },
      { maker: "BMW" },
      { maker: "BMW" },
      { maker: "BMW" },
      { maker: "BMW" },
    ],
  },
  drive: function () {
    return "drive method";
  },
};
console.log(BMW);

const embeddedArray = [
  "string",
  100,
  ["embed", 200],
  { color: "blue" },
  function () {
    return "embeded function";
  },
];
// type embeddedArray in browswer console to grab array.
//objects containing objects and containing arrays and continue to embed and embed and embed.

//////////Member Access to Objects//////////
function memberFunction() {
  const objectAccess = {
    text: "//15// Member Access to objects",
  };
  return objectAccess;
}
console.log(memberFunction());
// member access to an object or array.
// constitutes of "" . "" the dot.
// ex. from bmw above. BMW.make
console.log(BMW.make);
console.log(BMW.drive());
console.log(BMW.engine.pistons);
//////////Computed Member Access //////////
function computedAccess() {
  const compAccess = {
    text: "//16// Computed Member Access",
  };
  return compAccess;
}
console.log(computedAccess());
//picking up where we left off with the BMW object
// computed access allows you to access a deeply nested member
// two choices with the . syntax, or the computed [] syntax
console.log(BMW.engine.pistons[0]); // {maker: "BMW"}
//now lets do it with the embeddedArray array
console.log(embeddedArray[4]()); //selected the 4th item in that array starting with 0 and invoking the function.
//now we can take our BMW object and start going into the nested object 'engine'
// and nested array 'pistons' and selecting the second, aka [1] piston and select its maker.
//computed access helps you being able to really get into the depths of objects.
console.log(BMW["engine"]["pistons"][1]["maker"]);
// now we can create a variable and give it a value and compare it to our object
//ex in console
// const pointer = "make"; //undefined
// pass it to BMW[ pointer ] //BMW
const pointer = "make";
console.log(pointer);
console.log(BMW[pointer]); // same output. "BMW"
const fast = "speed";
console.log(fast);
console.log(BMW[fast]); // same output "180"
console.log(BMW["en" + "gine"]); // concatinating BMW en gine to return our engine object in the BMW object.
////// Member creation, assignment and deletion. //////
const arrayFunction = () => {
  const arrayCreation = [
    { text_one: "//17//" },
    { text_two: "Creation" },
    { text_three: "Assignment" },
    { text_four: "Deletion" },
  ];
  return arrayCreation;
};
console.log(arrayFunction());
//assigning new values to an object. so assigning anew object {} or string to it
//or changing a new value to the object.
// for example changing the make of the car BMW to ford
// BMW.make = "Ford";
// console.log(BMW); // output for make property has changed to ford.
// ||
BMW.make += 200;
console.log(BMW); //make BMW200

BMW["speed"] *= 2;
console.log(BMW); //speed 360

BMW["engine"] = { newegine: "new" };
console.log(BMW); // engine {newengine: "new"}
// reassigning methods
// BMW.drive = "drive";
// console.log(BMW); //drive is now a string
//creating a new keyname model 3Series to the BMW
BMW.model = "3Series";
console.log(BMW);
//creating a color for the car.
BMW.color = "Matte Black";
console.log(BMW);
//if you want to create something you'll have to define it.
// lets create a new method!
BMW.stop = function () {
  return "stop";
};
console.log(BMW);
//adding new methods to the engine object in the car
BMW.engine.startEngine = function () {
  return "start engine";
};
BMW.engine.poweroffEngine = function () {
  return "shut down engine";
};
BMW.engine.horsepower = "500hp";
//deleting members works like a boolean true/false statement.
delete BMW.engine.newegine;
console.log(BMW.engine); //delete newengine is gone :)
///////Array modification is a lot different than what we were doing with an object

const arrayModification = () => {
  const def = "//18// Array Modification";
  return def;
};
console.log(arrayModification());
//groceries list array to work with
const groceries = [
  "apples",
  "oranges",
  "bananas",
  "green peppers",
  "onion",
  "red onion",
  "potatoes",
  "tomatoes",
  "orzo pasta",
  "chicken",
  "romaine lettuce",
  "salt",
  "pepper",
  "hot sauce",
  "bacon",
  "eggs",
];
