// IMPORT OBJECT & FUNCTION

import {

  user,
  greet

} from "./user.js";


// DISPLAY DATA

document.getElementById("demo").innerHTML =

  "Name: " + user.name +
  "<br>Age: " + user.age +
  "<br>Role: " + user.role +
  "<br><br>" +
  greet();