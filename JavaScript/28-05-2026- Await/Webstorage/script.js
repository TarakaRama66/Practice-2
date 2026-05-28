// Web storage
// localStorage – set & get
localStorage.setItem("name", "Gupta");
const value = localStorage.getItem("name");
console.log(value);

// sessionStorage – set & ge
sessionStorage.setItem("token", "Whatsapp!");
const token = sessionStorage.getItem("token");
console.log(token);

// Remove & clear
localStorage.removeItem("name");
localStorage.clear();

// Store Objects(Json)
const user = { age: 23 };
localStorage.setItem("user", JSON.stringify(user));
const data = JSON.parse(localStorage.getItem("user"));
console.log(user);

// Read object(Json)
const profile = JSON.parse(localStorage.getItem("profile"));
console.log(profile);

// Example
const user1 = { name: "Tarak", age: 24 };
localStorage.setItem("user1", JSON.stringify(user1));
const data1 = JSON.parse(localStorage.getItem("user1"));
console.log(data1.name);
console.log(data1.age);