//inside an object
const employee = {
    name: "Gupta",
    role: "Web Developer",

    showDetails() {
        console.log("Employee Name:", this.name);
        console.log("Role:", this.role);
    }
};

employee.showDetails();

//inside a constructor
function Student(name, course) {
    this.name = name;
    this.course = course;
    this.showStudent = function () {
        console.log(
            `Student: ${this.name}, Course: ${this.course}`
        );
    };
}
const student1 = new Student(
    "Rahul",
    "JavaScript"
);

student1.showStudent();

//inside a class
class BankAccount {
    constructor(holder, balance) {
        this.holder = holder;
        this.balance = balance;
    }

    checkBalance() {
        console.log(
            `${this.holder}'s Balance: ₹${this.balance}`
        );
    }
}
const account1 = new BankAccount(
    "Gupta",
    50000
);

account1.checkBalance();

//inside event handling
const button = document.createElement("button");
button.innerText = "Click Me";
document.body.appendChild(button);
button.addEventListener("click", function () {
    console.log(
        "Clicked Button:",
        this.innerText
    );

});

//Arrow Function
const person = {
    name: "Gupta",
    normalFunction() {
        console.log(
            "Normal Function:",
            this.name
        );
    },
    arrowFunction: () => {
        console.log(
            "Arrow Function:",
            this.name
        );
    }
};

person.normalFunction();
person.arrowFunction();


//E-Commerce Example

const cart = {

    product: "Laptop",
    price: 60000,

    showProduct() {

        console.log(
            `Product: ${this.product}`
        );

        console.log(
            `Price: ₹${this.price}`
        );
    }
};

cart.showProduct();