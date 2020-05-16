//28// Conditions - defining the instructions of what you want to run.

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
