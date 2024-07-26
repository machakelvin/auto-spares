import React, { createContext, useState, useEffect } from 'react';

const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    // Fetch stock data from your backend or local storage
    // Example: fetchStockData().then(data => setStock(data));
  }, []);

  const addStock = (newRecord) => {
    setStock(prevStock => [...prevStock, newRecord]);
  };

  const deductStock = (name, quantity) => {
    setStock(prevStock =>
      prevStock.map(item =>
        item.name === name ? { ...item, quantity: item.quantity - quantity } : item
      )
    );
  };

  const getStock = () => {
    return stock;
  };

  return (
    <StockContext.Provider value={{ stock, addStock, deductStock, getStock }}>
      {children}
    </StockContext.Provider>
  );
};

export default StockContext;
