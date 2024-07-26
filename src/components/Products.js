import React, { useState, useEffect, useContext } from 'react';
import StockContext from '../StockContext';
import './Products.css';

function Products() {
  const { stock, deductStock } = useContext(StockContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(stock.filter(item => item.quantity > 0));
  }, [stock]);

  const handleSell = (name) => {
    deductStock(name, 1);
  };

  return (
    <div className="products">
      <h1>Products</h1>
      <div className="product-cards">
        {products.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.imageUrl} alt={item.name} className="product-image" />
            <div className="product-info">
              <h2>{item.name}</h2>
              <p>Price: TZS {item.sellingPrice.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <button className="sell-btn" onClick={() => handleSell(item.name)}>Sell</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
