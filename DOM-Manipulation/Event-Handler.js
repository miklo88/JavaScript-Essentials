function CreateElement() {
  const bob = "//35// Event Handlers";
  const h1 = document.createElement("h1");
  h1.innerHTML = bob;
  document.body.appendChild(h1);
  return bob;
}
console.log(CreateElement());
//35// Event Handlers
//Events are simply when something happens in our application and something happens
// on mouse click, button click etc. it triggers functions subroutines etc
const select = document.getElementsByName("cars")[0];
//establishing a subroutine on this element. can have mas
// a callback function is associated with event handlers
//and example of an inline event.
select.onclick = function (event) {
  console.log(event);
};
//ex callback function
// select.addEventListener("click", function (event) {
//   console.log("clicked by add event listener");
// });
// select.addEventListener("click", function (event) {
//   console.log("clicked by add event listener 2");
// });

////// Removing an event listener. Defining the callback with ClickCallback
// then add it, then take it away.
function ClickCallback(event) {
  console.log("clicked by add event listener");
}
select.addEventListener("click", ClickCallback); //adds it
//to remove an eventListener
select.removeEventListener("click", ClickCallback);
//by the time you look in the console its already too late! its gone!

////////////36 Appendchild and create elements
const divyDiv = document.createElement("div");
divyDiv.innerHTML = "//36// Create and appendChild and insertBefore methods.";
divyDiv.onclick = function () {
  alert("secret click");
};
document.body.appendChild(divyDiv);

const element = document.createElement("div");
element.innerHTML = "Click me, i'm a needy button";
element.style.cssText = "width:200px; height:50px; background:red;";
element.onclick = function () {
  alert("Hi");
};
document.body.appendChild(element);
