// AddData.jsx
import React, { useState } from 'react';

function AddData({ addTransaction }) {
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    details: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTransaction.date || !newTransaction.details || !newTransaction.category || !newTransaction.amount) {
      alert('Please fill in all fields');
      return;
    }
    addTransaction(newTransaction);
    setNewTransaction({
      date: '',
      details: '',
      category: '',
      amount: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" value={newTransaction.date} onChange={handleChange} required />
        <input type="text" name="details" value={newTransaction.details} onChange={handleChange} placeholder="Details" required />
        <input type="text" name="category" value={newTransaction.category} onChange={handleChange} placeholder="Category" required />
        <input type="number" name="amount" value={newTransaction.amount} onChange={handleChange} placeholder="Amount" required />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
}

export default AddData;
