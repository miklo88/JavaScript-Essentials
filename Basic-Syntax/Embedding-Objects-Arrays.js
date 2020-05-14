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
