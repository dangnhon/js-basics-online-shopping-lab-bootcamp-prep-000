var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var boughtItem = { itemName: `${item}`, itemPrice: Math.floor(Math.random()*100) };
  
  cart.push(boughtItem);
  
  return(boughtItem['itemName'] + " has been added to your cart.");            
}

function viewCart() {
  
  
  for (let i = 0; i < cart.length; i++) {
    
    cart
    
  }
  
  
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
