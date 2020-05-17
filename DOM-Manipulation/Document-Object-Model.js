const DOM = "//31// Document Object Model";
const subDOM = 10;

if (subDOM != 10) {
  console.log("Hey now");
} else if (DOM === "//31// Document Object Model" && subDOM === 10) {
  console.log(DOM);
} else {
  console.log("uh oh, we have a bigger problem on our hands");
}
// Understanding the DOM
// This is the lawyer that represents JavaScript. An advocate for the language to communicate with the browser

//32// Targeting Document Object Model elements
//document. is our key to grabbing html elements  off of the DOM
// getElementById, querySelectorAll, etc

//33// Changing Elements Content
console.log(document.querySelector("h1"));
//dir gives you a whole lot more to work and see than .log
//it renders for the object it really is.
console.dir(document.querySelector("h1"));
