import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddData from './components/AddData';
import Table from './components/Table';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <Header />
      <SearchBar transactions={transactions} />
      <AddData addTransaction={addTransaction} />
      <Table transactions={transactions} />
    </div>
  );
}

export default App;
