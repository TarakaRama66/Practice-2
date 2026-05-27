// Products
let products = [
{
    id: 1,
    name: "Laptop",
    price: 50000
},
{
    id: 2,
    name: "Mobile",
    price: 20000
},
{
    id: 3,
    name: "Headphones",
    price: 3000
},
{
    id: 4,
    name: "Keyboard",
    price: 1500
},
{
    id: 5,
    name: "Mouse",
    price: 800
}
];
// Local storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
// display products
function displayProducts(data){
let productList =
document.getElementById("productList");

productList.innerHTML = "";
data.map((product)=>{
    productList.innerHTML += `
    <div class="card">
    <h3>${product.name}</h3>
    <p>Price: ₹${product.price}</p>
    <button onclick="addToCart(${product.id})">
        Add To Cart
    </button>
    </div>
    `;
});
}

// Add to cart
function addToCart(id){
let item = products.find((product)=>{
    return product.id === id;
});

let existing =
cart.find((product)=>{
    return product.id === id;
});
if(existing){
    existing.quantity += 1;
} else {
    cart.push({
    ...item,
    quantity: 1
});
}
saveCart();
displayCart();
}

// display cart
function displayCart(){
let cartItems =
document.getElementById("cartItems");
cartItems.innerHTML = "";
cart.map((item)=>{
    cartItems.innerHTML += `
    <div class="card">
    <h3>${item.name}</h3>
    <p>Price: ₹${item.price}</p>
    <p>Quantity: ${item.quantity}</p>
    <button onclick="increaseQty(${item.id})">
        +
    </button>
    <button onclick="decreaseQty(${item.id})">
        -
    </button>
    <button onclick="removeItem(${item.id})">
        Remove
    </button>
    </div>
    `;
});
calculateTotal();
}
// quantity increase
function increaseQty(id){
cart.map((item)=>{
    if(item.id === id){
    item.quantity += 1;
}
});
saveCart();
displayCart();
}
// quantity decrease
function decreaseQty(id){
cart.map((item)=>{
    if(item.id === id){
        item.quantity -= 1;

    }
});
cart = cart.filter((item)=>{
    return item.quantity > 0;
});
saveCart();
displayCart();
}
// remove items
function removeItem(id){
cart = cart.filter((item)=>{
    return item.id !== id;
});
saveCart();
displayCart();
}
// total price
function calculateTotal(){
let total = cart.reduce((acc, item)=>{
    return acc + item.price * item.quantity;
},0);
document.getElementById("totalPrice")
.innerHTML = "Total: ₹" + total;
}
// Search products
function searchProducts(){
let value = document.getElementById("search").value.toLowerCase();
let filtered = products.filter((product)=>{
    return product.name
    .toLowerCase()
    .includes(value);
});
displayProducts(filtered);
}
// Save cart
function saveCart(){
localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);
}
// Initial load
displayProducts(products);
displayCart();
