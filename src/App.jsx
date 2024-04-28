// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddData from './components/AddData';
import Table from './components/Table';

function App() {
  const [transactions, setTransactions] = useState([
    { date: '2024-04-28', details: 'Groceries', category: 'Food', amount: 50 },
    { date: '2024-04-27', details: 'Internet Bill', category: 'Utilities', amount: 80 },
    { date: '2024-04-26', details: 'Dinner', category: 'Food', amount: 30 },
    { date: '2024-04-25', details: 'Phone Bill', category: 'Utilities', amount: 60 },
  ]);

  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...filteredTransactions, newTransaction]);
  };

  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.details.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <AddData addTransaction={addTransaction} />
      <Table transactions={filteredTransactions} />
    </div>
  );
}

export default App;
