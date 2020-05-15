const callable = () => {
  const funkyFunction = "//19// Callable-Objects";
  return funkyFunction;
};
console.log(callable());

// //a callable object in javascript
// // the object is defined in between our {} braces. which contains a list of instructions. aka object literal
function name() {
  const fullname = "Carl Redding";
  //a SUBROUTINE is a function nested in a function.
  // concat is a symbol routine and name is an argument
  //so name is defined as Carl Redding and now we're passing it as
  //an argument to concat Senior onto name.
  function concat(name) {
    return "Senior " + name;
  }
  return concat(fullname);
}
// name() invokes the object literal
console.log(name());
// Senior Carl Redding

//embedded obj in a obj. an obj literal. you can do that with functions or "subroutines"
//methods are subroutines or callable objects nested inside objects
const obj = {
  method: function () {
    return "subroutine";
  },
};
console.log(obj.method());
// arrays can have methods as well. just not a name its an element
//inside of the array
const anothaArray = [function () {}];
console.log(anothaArray);

// // going back to where we started with function name
// function name(fullname) {
//   //accessing the object fullname and pulling out firstname and concating lastname
//   return fullname.firstname + fullname.lastname;
// }
// //invoking object by parenthesis and calling it by its symbol name.
// console.log(name({ firstname: "Carl", lastname: "Redding" }));

function anothaName(fullestname) {
  //adding parenthesis invokes the fullestname
  return fullestname();
}
console.log(
  anothaName(function () {
    return "embed";
  })
);
