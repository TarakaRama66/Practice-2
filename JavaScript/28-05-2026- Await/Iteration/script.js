// FOR LOOP
console.log("FOR LOOP");

const marks = [80, 75, 90, 60];
let totalMarks = 0;

for (let i = 0; i < marks.length; i++) {
  totalMarks += marks[i];
  console.log("Mark:", marks[i]);
}

console.log("Total Marks:", totalMarks);


// FOR...OF
console.log("FOR...OF");

const fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}


// FOR...IN
console.log("FOR...IN");

const user = {
  name: "Gupta",
  age: 22,
  city: "Hyderabad"
};

for (let key in user) {
  console.log(key, ":", user[key]);
}


// FOREACH
console.log("FOREACH");

const cart = ["Shoes", "Watch", "Shirt"];

cart.forEach((item, index) => {
  console.log(index + 1, item);
});


// MAP
console.log("MAP");

const prices = [100, 200, 300];

const updatedPrices = prices.map(price => {
  return price + 50;
});

console.log(updatedPrices);


// FILTER
console.log("FILTER");

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => {
  return num % 2 === 0;
});

console.log(evenNumbers);

// REDUCE
console.log("REDUCE");

const cartPrices = [500, 1000, 1500];

const total = cartPrices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log("Total Price:", total);


// FIND
console.log("FIND");

const nums = [3, 5, 7, 8, 10];

const firstEven = nums.find(num => {
  return num % 4 === 0;
})
console.log(firstEven);
