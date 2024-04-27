import React, { useState } from 'react';

function Table() {
  const [showTable, setShowTable] = useState(true); // Initial state: show table

  const toggleTable = () => setShowTable(!showTable); // Function to toggle visibility

  const tableData = [
    { id: 1, name: 'Apple', price: 1.99 },
    { id: 2, name: 'Banana', price: 0.79 },
    { id: 3, name: 'Orange', price: 1.25 },
  ];

  return (
    <div>
      <button onClick={toggleTable}>
        {showTable ? 'Hide Table' : 'Show Table'}
      </button>
      {showTable && ( // Conditionally render the table
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
