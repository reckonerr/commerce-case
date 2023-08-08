import React from 'react';

const Cart = ({ cartItems, discountApplied, applyDiscount, checkout }) => {
  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return discountApplied ? totalPrice * 0.8 : totalPrice;
  };

  return (
    <div className="cart">
      <h2>Sepetim</h2>
      {cartItems.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        ))
      )}
      <p>Toplam Fiyat: ${getTotalPrice()}</p>
      <button onClick={applyDiscount}>İndirim Uygula</button>
      <button onClick={checkout}>Alışşverişi Tamamla</button>
    </div>
  );
};

export default Cart;
