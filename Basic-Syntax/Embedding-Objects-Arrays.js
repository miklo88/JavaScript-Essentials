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

const embeddedArray = ["string", 100, ["embed", 200], { color: "blue" }];
// type embeddedArray in browswer console to grab array.

//objects containing objects and containing arrays and continue to embed and embed and embed.

//////////Member Access to Objects
function memberFunction() {
  const objectAccess = {
    text: "//15// Member Access to objects",
  };
  return objectAccess;
}
console.log(memberFunction());
