import React, { useState, useContext } from 'react';
import './StockManagement.css';
import StockContext from '../StockContext';

function StockManagement() {
  const { stock, addStock, deductStock } = useContext(StockContext);
  const [newRecord, setNewRecord] = useState({
    name: '',
    quantity: 0,
    actualPrice: 0,
    sellingPrice: 0,
    type: 'outgoing', // Default value set to 'outgoing'
    image: null, // Updated field for file input
  });
  const [showForm, setShowForm] = useState(false);

  const handleAddRecord = () => {
    if (newRecord.type === 'incoming') {
      addStock({
        ...newRecord,
        imageUrl: newRecord.image ? URL.createObjectURL(newRecord.image) : null // Create URL for image blob if image is present
      });
    } else {
      deductStock(newRecord.name, newRecord.quantity);
    }
    setNewRecord({ name: '', quantity: 0, actualPrice: 0, sellingPrice: 0, type: 'outgoing', image: null }); // Reset form
    setShowForm(false); // Hide form after adding record
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      if (file) {
        // Check file type
        const fileType = file.type.split('/')[1].toLowerCase();
        if (['jpeg', 'jpg', 'png'].includes(fileType)) {
          setNewRecord(prevState => ({
            ...prevState,
            [name]: file
          }));
        } else {
          alert('Please upload an image file (JPEG, JPG, or PNG).');
        }
      }
    } else {
      setNewRecord(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleDeduct = (name) => {
    deductStock(name, 1);
  };

  // Calculate total earnings and sales
  const totalEarnings = stock.reduce((total, item) => {
    // Earnings are calculated by subtracting actualPrice from sellingPrice for each product sold
    if (item.quantity > 0) {
      const earnings = (item.sellingPrice - item.actualPrice) * (item.quantity > 0 ? 1 : 0);
      return total + earnings;
    }
    return total;
  }, 0);

  // Filter available products
  const availableProducts = stock.filter(item => item.quantity > 0);

  return (
    <div className="stock-management">
      {showForm && (
        <div className="add-record">
          <h2>Record Stock</h2>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newRecord.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={newRecord.quantity}
            onChange={handleChange}
          />
          <input
            type="number"
            name="actualPrice"
            placeholder="Actual Price"
            value={newRecord.actualPrice}
            onChange={handleChange}
          />
          <input
            type="number"
            name="sellingPrice"
            placeholder="Selling Price"
            value={newRecord.sellingPrice}
            onChange={handleChange}
          />
          {newRecord.type === 'incoming' && (
            <input
              type="file"
              name="image"
              accept="image/jpeg, image/jpg, image/png"
              onChange={handleChange}
            />
          )}
          <select
            name="type"
            value={newRecord.type}
            onChange={handleChange}
          >
            <option value="incoming">Incoming</option>
            <option value="outgoing">Outgoing</option>
          </select>
          <button onClick={handleAddRecord}>Add Record</button>
        </div>
      )}

      {!showForm && (
        <div className="stock-list">
          <h2>Available Products</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Actual Price</th>
                <th>Selling Price</th>
                <th>Deduct</th>
              </tr>
            </thead>
            <tbody>
              {availableProducts.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>TZS {item.actualPrice.toFixed(2)}</td>
                  <td>TZS {item.sellingPrice.toFixed(2)}</td>
                  <td>
                    <button className="deduct-btn" onClick={() => handleDeduct(item.name)}>Deduct</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-earnings">
            <h2>Total Earnings: TZS {totalEarnings.toFixed(2)}</h2>
          </div>
        </div>
      )}

      <button className="add-btn" onClick={() => setShowForm(!showForm)}>{showForm ? '-' : '+'}</button>
    </div>
  );
}

export default StockManagement;
