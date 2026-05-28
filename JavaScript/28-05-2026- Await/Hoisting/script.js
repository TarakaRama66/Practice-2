// var
console.log(userName);
var userName = "Tarak";

// let Hoisting
try {
    console.log(age);
    let age = 22;
}
catch(error) {
    console.log(error);
}
// Const Hoisting
try {
    console.log(city);
    const city = "Hyderabad";
}
catch(error) {
    console.log(error);
}
// Function Hoisting
greet();
function greet() {
    console.log("Hello User");
}
try {
    sayHi();
    var sayHi = function () {
        console.log("Hi");
    };
}
catch(error) {
    console.log(error);
}
// Arrow function
try {
    welcome();
    var welcome = () => {
        console.log("Welcome");
    };
}
catch(error) {
    console.log(error);
}
var course = "JavaScript";
console.log(course);


