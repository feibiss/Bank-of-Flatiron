import React, { useState } from 'react';

function AddData({ addTransaction }) {
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    details: '',
    category: '',
    amount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(newTransaction);
    setNewTransaction({
      date: '',
      details: '',
      category: '',
      amount: 0,
    });
  };

  return (
    <div className="add-data">
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" value={newTransaction.date} onChange={handleChange} placeholder="Date" />
        <input type="text" name="details" value={newTransaction.details} onChange={handleChange} placeholder="Details" />
        <input type="text" name="category" value={newTransaction.category} onChange={handleChange} placeholder="Category" />
        <input type="number" name="amount" value={newTransaction.amount === 0 ? '' : newTransaction.amount} onChange={handleChange} placeholder="Amount" />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
}

export default AddData;
