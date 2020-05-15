function myMemory() {
  const hoisting = "Memory Hoisting in JavaScript";
  function concat(myMemory) {
    return "//20// " + myMemory;
  }
  return concat(hoisting);
}
console.log(myMemory());
