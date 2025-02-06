
import React, { useState } from "react";
import Navbar from "./Navbar";
import Products from "./Product";
import Cart from "./Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingProduct = prevCartItems.find(item => item.id === product.id);
  
      if (existingProduct) {
        // If the product exists, increase its quantity
        return prevCartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Increase quantity
            : item
        );
      } else {
        // If the product doesn't exist, add it with quantity 1
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };
  

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => {
      const existingProduct = prevCartItems.find(item => item.id === id);
  
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          // If the product exists and its quantity is more than 1, decrease the quantity
          return prevCartItems.map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          // If the quantity is 1, remove the item from the cart
          return prevCartItems.filter(item => item.id !== id);
        }
      } else {
        return prevCartItems; // If the product is not found, return the same cart
      }
    });
  };
  

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-6 p-6 top-7 mt-7">
        <Products addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
