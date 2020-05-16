function arOperators() {
  const operator = "//3// Back to basics with BODMAS and JS Operators.";

  return operator;
}
console.log(arOperators());
// what are operators?
// a predefined function that runs through the JIT compiler and READS your code.
// Operators are essentially functions. There are many of them.
// They have an order of precedence.

//Just like in basic arithmetic
// B - Brackets ()
// O - pOwers aka a function call
// D - Division - same precedence
// M - Multiplication - same precedence
// A - Addition - same precedence
// S - Subtraction - same precedence
// ex. = {
// 5 + 2 * 3
//11
// }

// Put in your browswer Math.pow(2, 4) / 2 + 1 - 5 + 2 * 12;
const BODMAS = Math.pow(2, 4) / 2 + 1 - 5 + 2 * 12;
console.log(BODMAS);
// 28

// Two types of division
// one is the forward slash /. the other is % modulous division. The remainder of division.
// Modulous division is great for odd and even numbers
const remainder = 9 % 5;
console.log(remainder);

// That wraps this part up. Basically back to basics with our best friend from high school Math :)
