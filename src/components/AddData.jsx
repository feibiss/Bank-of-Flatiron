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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" value={newTransaction.date} onChange={handleChange} />
        <input type="text" name="details" value={newTransaction.details} onChange={handleChange} />
        <input type="text" name="category" value={newTransaction.category} onChange={handleChange} />
        <input type="number" name="amount" value={newTransaction.amount} onChange={handleChange} />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
}

export default AddData;
