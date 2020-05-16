//28// Conditions - defining the instructions of what you want to run.
const renderToDOM = 28,
  render = "yes";
//if renderToDOM is not equal to 28(anything besides 28) render ok
if (renderToDOM != 28) {
  console.log("ok");
  // else if renderToDOM is 28 AND render is "yes" run the console.log
} else if (renderToDOM === 28 && render === "yes") {
  console.log("//28// Conditions!");
  //if all of this doesnt match then we have a problemo.
} else {
  console.log("uh oh");
}

const carsLeft = 1,
  carsRight = 0,
  greenMan = "no";

if (greenMan === "yes") {
  console.log("cross the road");
} else if ((greenMan === "yes" && carsLeft === 0) || carsRight === 0) {
  console.log("All clear hustle your ass across the road!");
} else {
  console.log("dont cross ya yahoo");
}
