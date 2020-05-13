function greetingFunction() {
  let greeting;
  const time = new Date().getHours();

  if (time < 10) {
    greeting = "Good Morning / Buenos Dias";
  } else if (time < 20) {
    greeting = "Good day / Buenas Tardes";
  } else {
    greeting = "Good evening / Buenas Noches";
  }
  document.getElementById("time-demo").innerHTML = greeting;
}
// this greeting function is a great example of why we keep js files separate and in an editor. the conditional operator here is just factoring the time of the day along with the greeting.

const functionSubroutine = () => {
  const def = "// Functions and Subroutines";
  return def;
};
console.log(functionSubroutine());

// This is to elaborate on why you work in your editor and not in the browswer console.
// in the browser console you cannot save our code and or really work in depth with logic.
// So you'll see we've been working in an html page and a javascript page and keeping them separate!
// with code you want to keep separate instances of logic or code separated from each other. We could write all of this in the HTML file but that gets messy.
// Its best practice to keep things separate.

console.log("Hi, i'm a lil string.");
console.log(
  "Usually I take form of text. An example would be filling out your name"
);
const num = 22;
console.log(num);
//also numbers. but now take a look in your browser console and you can see the output of this code!
