function scopeClosure() {
  const anothaVar = "Scopes and Closure.";
  function callback(scopeClosure) {
    return "//21// " + scopeClosure;
  }
  return callback(anothaVar);
}
console.log(scopeClosure());

//Scope = access
// You cannot just open up a hood and take a piston out of an engine
// you have to remove piece by piece.
// same thing applies for standard or callable objects.
// some easy some are a pain in the booty.

const motor = {
  maker: "chevrolet",
  headgaskets: {
    headgasket_left: ["piston1", "piston2", "piston3", "piston4"],
    headgasket_right: ["piston5", "piston6", "piston7", "piston8"],
  },
};

console.log(motor.headgaskets.headgasket_right[3]);
console.log(motor.headgaskets.headgasket_left[3]);
console.log(motor["headgaskets"]["headgasket_left"][0]);

function runExpression() {
  var B = 17;

  function add() {
    return B + 90;
  }
  return add();
}
//Execution Stack
// runExpression();
// add();
//
