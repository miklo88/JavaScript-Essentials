// UDEMYS JAVASCRIPT-ESSENTIALS ///////////////////////////////////////////////////////////
// to see this arrow function being invoked to the dom console. Open your browser
// and right click and inspect element. You'll see many tabs like Element
const Welcome = () => {
  return "Hola!! Let's work those brains!";
};
console.log(Welcome());
//// This is another function example
// function myWelcome() {
//   return "Hola! Let's work those brains!";
// }
// console.log(myWelcome());

//// This is a way to create elements and give them text value and to render them to our browser.
//// take a peek this should be rendering on your live server page :)
const p = document.createElement("p");
p.innerHTML = "Hola! Let's work those brains";
document.body.appendChild(p);
// to see this arrow function being invoked to the dom console. Open your browser
// and right click and inspect element. You'll see many tabs like Element
