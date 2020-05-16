function bigConstructor() {
  const one = "//24// Constructor";
  function lilConstructor() {
    return one + " Function";
  }
  return lilConstructor(one);
}
console.log(bigConstructor());

// Contructor Functions
// Basically a blueprint for a house
// Creates a function that it can call upon many many times.
