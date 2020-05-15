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
//Execution Stack in order of what is invoked first
// runExpression();
// add();
//--then a symbols table is created in store of what is in order.
// so with runExpression creates var B = 17
// then add asks if it can access a previous symbol. CLOSURE to encapsulate or enclose other symbols in a execution stack.
// then add creates var B + 90

//so understand that the first block of code to be executed with be runExpression()  and it will
//create a symbols table symbol var B = 17;
// then add will be run in the stack and its symbol B + 90 will be compared if it will replace,
// stack under, or add to the current value in the call stack.

function inferredGlobal() {
  const scope = "//22//";
  function inferredScope(inferredGlobal) {
    return inferredGlobal + " Inferred Globals and Scope";
  }
  return inferredScope(scope);
}
console.log(inferredGlobal());

//the window object is the highest level of scope. just open it up in your browswer.
// if your expression cannot be found within its scope. it automatically defaults it to the browser window.
//cobbering the global scope.

/// assigning variables nested withing your functionalities scope. ex below
// becareful because with nested variables can re-assign items on the global scope and dirupt functionality unless that is what youre aiming for.

const globalObject = {
  one: "one",
  two: "two",
  three: "three",
  four: "four",
};
console.log(globalObject);

function scopeExpression() {
  const a = 10;
  function nestedScope() {
    test1 = "test-string";
    test2 = "test-string";
    test3 = "test-string";
    test4 = "test-string";
  }
  return nestedScope();
}
//invoking scope expression will return undefined.
// then the browser runs throught the stack and cannot find engine in the stack but comes across the
//assignment operator = "test-string". This is where we said to be careful because now
// when you type window.test1 in the browser console you get "test-string".
// basically inferred globals is like a librarian who looks for variables and object on the browser.
