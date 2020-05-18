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
function targetDOM() {
  const target = "//32// Targeting Document Object Model elements";
  return target;
}
console.log(targetDOM());
//32// Targeting Document Object Model elements
//document. is our key to grabbing html elements  off of the DOM
// getElementById, querySelectorAll, etc
// you can elaborate by giving elements classnames, ids etc.

//33// Changing Elements Content
function changingDOM() {
  const changing = "//33//";
  function elementDOM(changingDOM) {
    return changingDOM + " Changing Elements Content";
  }
  return elementDOM(changing);
}
console.log(changingDOM());

console.log(document.querySelector("h1"));
//dir gives you a whole lot more to work and see than .log
//it renders for the object it really is.
console.dir(document.querySelector("h1"));

let leDom = document.getElementById("silly");
console.log(document.getElementById("silly"));
console.dir(document.getElementById("silly"));
leDom.innerText += " in the ";
leDom.innerText += " Document Object Model";

// let firstItem = document.getElementsByClassName("item-one");
// console.log(document.getElementsByClassName("item-one"));
// firstItem.innerText += " new one ";
// firstItem.innerText += " now";

//34// Changing Element Styles
const elementStyles = () => {
  const styles = "//34// Changing Element Styles";
  return styles;
};
console.log(elementStyles());
//writing html elements to the browser
const styles = "//34// Changing Element Styles";
const p = document.createElement("p");
p.innerHTML = styles;
document.body.appendChild(p);
// element styles - being able to style a ul and li elements!
const el = document.getElementById("list");
// el.style.color = "white";
// el.style.backgroundColor = "gray";
// el.style.width = "100px";
//what did it actually do? modifying the style modified the elements render.
//faster way, smarter
el.style.cssText = "background:blue; color:white; width:100px";
// if you already have css styles
el.style.cssText += " height: 100px;";
// concat the style with the origional.
// to override default styles you can list an element styles as !important
// this will make the element that default element.
