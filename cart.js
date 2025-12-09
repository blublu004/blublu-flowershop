// cart.js

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a product to the cart
function addToCart(name, price) {
    const item = { name, price: parseFloat(price) };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} has been added to your cart!`);
}

// Function to display cart in console (for testing)
function showCart() {
    console.log(cart);
}
