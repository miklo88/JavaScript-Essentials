function greetingFunction() {
  let greeting;
  const time = new Date().getHours();

  if (time < 10) {
    greeting = "Good Morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("time-demo").innerHTML = greeting;
}

const functionSubroutine = () => {
  const def = "// Debugging and working with larger JS files in your editor.";
  return def;
};
console.log(functionSubroutine());
