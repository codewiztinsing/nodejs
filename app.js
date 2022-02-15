const myDate = new Date();
var moviesName = require("./movies")

moviesName.avatar()

let object = myDate;


do {
  object = Object.getPrototypeOf(object);
  console.log(object)


} while (object);