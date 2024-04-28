import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddData from './components/AddData';
import Table from './components/Table';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([
    { date: '2024-04-28', details: 'Netflix', category: 'Entertainment', amount: 2450 },
    { date: '2024-04-27', details: 'House mortgage', category: 'Loan', amount: 1200000 },
    { date: '2024-04-26', details: 'New phone', category: 'Personal', amount: 94559 },
    { date: '2024-04-25', details: 'Uber', category: 'Utilities', amount: 450 },
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
  <div className="container">
    <Header className="header" />
    <SearchBar className="search" handleSearch={handleSearch} />
    <AddData className="add" addTransaction={addTransaction} />
    <Table className="table" transactions={filteredTransactions} />
  </div>
  );
}

export default App;
