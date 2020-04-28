function varConst() {
  const definition =
    "//2// A way to store values and being able to pull them up later for use.";

  return definition;
}
console.log(varConst());

////Variables - a way to name a variable. think of your house having an address.
//  Your address is a way for someone to deliver your mail to your home. a way to target your house.
// Lawrence is a value that is assigned to the name variable.
var name = "Lawrence";
// assigning the variable name a new value "Turton"
name = "Turton";
// Creating a blank variable, you should see undefined or null in your console.
var blank;
// assigning blank variable a new value.
blank = "new value";

// Javascript is a loosely typed language. Means you can assign many different type of data types to a variable.
// the declaration of our variables can change that. let const etc
const lastname = "redding";
// const means that the variable is going to be constant
// trying to assign lastname a new value you wont be able to because const is declared.

// type 'window' in the console in your browser and see how it is a huge object with many many symbols.
// you look deep into this window, think of it as a gigantic wharehouse of Storage. you look you'll be able to find "name" and
// "lastname" if you havent refreshed your browser.
