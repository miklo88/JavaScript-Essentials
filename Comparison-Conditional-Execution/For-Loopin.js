//29// For-Loops

//basically looping through an array of data and being able to select specific items. You can add, delete data as well.

// if(){} - is a singular conditon. Good for executing just once.
//for(){} -is a plural, running your context multiple times.

const classRegister = ["John", "Erykah", "Samuel", "Carlos", "Amelia", "Celia"];

//index counter - var i = 0;
// condition if i is less than classRegister - 0 < classRegister.length;
//incrementing value - i++
for (var i = 0; i < classRegister.length; i++) {
  console.log(classRegister[i]);
}

var text = "";
var i;
for (var i = 0; i < 20; i++) {
  console.log((text = "Number " + [i]));
}
