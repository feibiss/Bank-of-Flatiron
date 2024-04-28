import React, { useState } from 'react';
import Table from './Table';

function SearchBar({ transactions }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by category"
        value={searchTerm}
        onChange={handleChange}
      />
      <Table transactions={filteredTransactions} />
    </div>
  );
}

export default SearchBar;
