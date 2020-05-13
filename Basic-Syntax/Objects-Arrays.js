const objectArray = {
  language: "JavaScript",
  date: (time = Date()),
  course: "JavaScript Essentials",
  greeting: (myNewGreeting = () => {
    return "//Objects and Arrays in JavaScript";
  }),
};
console.log(objectArray);

// Objects - objects are obvious for what they are. A car, a phone etc. Defined by {} brackets
// const car =
//   // our car object
//   {
//     // properties of our object.
//     color: "red",
//     speed: 165,
//     maker: "Volvo",
//     //actions on the object aka METHODS. a subroutine function inside of an object
//     drive: function () {},
//     stop: function () {},
//   };
// Arrays - a list of items. A teachers list of student names, inventory sheets for a car dealership. Defined by [] brackets
// An array is an object but a special type of object. You must be able to decifer when to use an obvious object or a special array object.
// const shoppingList =
// [
//     //being able to pick and identify an element in an arary.
//     0 : "Apple",
//     1 : "Orange",
//     3 : "Pear"
// ]
// Methods - A subroutine, function inside of a method. aka Driving the car.

//another car object
const car = {
  color: "red",
  speed: 200,
  maker: "BMW",
  drive: function () {
    return "drive";
  },
};
console.log(car);

// another array
const shoppingList = ["Apple", "Orange", "Lime", "Pear", "Philo Dough", "Eggs"];
console.log(shoppingList);
