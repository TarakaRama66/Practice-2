const user = {

  name: "Gupta",
  age: 22,
  skills: ["HTML", "CSS", "JS", "REACT"],

  greet: function(){

    console.log("Welcome " + this.name);

  }

};


// ACCESS
console.log(user.name);
console.log(user["age"]);


// ADD
user.city = "Hyderabad";


// UPDATE
user.age = 25;


// DELETE
delete user.city;


// LOOP
for(let key in user){

  console.log(key, user[key]);

}


// OBJECT METHODS
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


// DESTRUCTURING
const {name, age} = user;

console.log(name, age);