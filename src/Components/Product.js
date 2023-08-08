import React, { useEffect, useState } from 'react';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 5)));
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} className='procut-img' alt={product.title} />
          <p>Fiyat: ${product.price}</p>
          <p>Stok: {product.inStock ? 'Stokta Var' : 'Stokta Yok'}</p>
          <button onClick={() => addToCart(product)}>Sepete Ekle</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
