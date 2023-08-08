import React, { useState } from 'react';
import Products from './Components/Product';
import Cart from './Components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [discountApplied, setDiscountApplied] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const applyDiscount = () => {
    setDiscountApplied(true);
  };

  const checkout = () => {
   
    setCartItems([]);
    setDiscountApplied(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Alışveriş Uygulaması</h1>
      </header>
      <Products addToCart={addToCart} />
      <Cart
        cartItems={cartItems}
        discountApplied={discountApplied}
        applyDiscount={applyDiscount}
        checkout={checkout}
      />
    </div>
  );
}

export default App;
