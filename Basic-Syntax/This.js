// This
function This() {
  const that = "This Context in JavaScript";
  function scopeThis(This) {
    return "//23// " + This;
  }
  return scopeThis(that);
}
console.log(This());

//This - context based word. It has context or a reference.
// This points to the window object. And it can change

// console.log(this);
//callable objects allow us to change the this context
//object
const thing = {
  prop: this,
  method: function () {
    return this;
  },
};
// console.log(object.method);
//array
const anArray = [
  this,
  function () {
    return this;
  },
];
// console.log(anArray[1]());
//subroutine
function global() {
  return this;
}
// console.log(global());
//so what is going on here is calling the global function by adding global.call()
// then passing the global function as an argument and reassigning the this value to it.
console.log(global.call(thing));
// so instead of returning this, we get prop: Window // ex {prop: Window, method: ƒ}
//think of the window context as a function wrapping your other context like window {other objects in here.}

// we also have the new keyword. a completely new context or blank object.
console.log(new global()); //global {} in browser
//another example
//if you are calling a method it is the object it is invoked from.
// const thingTwo = {
//   prop: this,
//   embed: {
//     method: function () {
//       return this;
//     },
//   },
// };
// // console.log(thingTwo.embed.method); //returns f () { return this; }
// //now lets pass anArray through the method
// console.log(thingTwo.embed.method.call(anArray)); //returns [Window, f] in the array
// console.log(new thingTwo.embed.method()); // new keyword points the new keyword to a new context {}
