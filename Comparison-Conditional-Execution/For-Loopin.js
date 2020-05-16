//29// For-Loops
const loopin = ["//29//", "//For//", "//Loops//"];
for (var i = 0; i < loopin.length; i++) {
  console.log(loopin[i]);
}
//basically looping through an array of data and being able to select specific items. You can add, delete data as well.

// if(){} - is a singular conditon. Good for executing just once.
//for(){} -is a plural, running your context multiple times.

const classRegister = ["John", "Erykah", "Samuel", "Carlos", "Amelia", "Celia"];

//statement 1//index counter - var i = 0;
//statement 2// condition if i is less than classRegister - 0 < classRegister.length;
//statement 3//incrementing value - i++
//incrementation of elements in the array
for (var i = 0; i < classRegister.length; i++) {
  console.log(classRegister[i]);
}
//de-incrementation of elements in the array
for (var i = classRegister.length - 1; i >= 0; i--) {
  console.log(classRegister[i]);
}

var text = "";
var i;
for (var i = 0; i < 5; i++) {
  console.log((text = "Number " + [i]));
}

//For In Loop - For Loops DRY brother.
for (var index = 0 in classRegister) {
  console.log(classRegister[index]);
}
