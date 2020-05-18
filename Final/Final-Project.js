//code before cleanup DRY 2020

// function set() {
//   let elements = document.getElementsByName("cssProperty");
//   //   console.log(elements);
//   for (let index = 0; index < elements.length; index++) {
//     let cssProperty = elements[index].getAttribute("id");
//     let cssValue = elements[index].value;
//     console.log(cssProperty, cssValue);

//     let div = document.getElementById("modify");
//     div.style[cssProperty] = cssValue;
//   }
// }
// document.getElementById("set").addEventListener("click", set);

//After DRY 2020
let elements = document.getElementsByName("cssProperty");

let div = document.getElementById("modify");

function set() {
  for (let index = 0; index < elements.length; index++) {
    let cssProperty = elements[index].getAttribute("id");

    let cssValue = elements[index].value;
    div.style[cssProperty] = cssValue;
  }
}
document.getElementById("set").addEventListener("click", set);
