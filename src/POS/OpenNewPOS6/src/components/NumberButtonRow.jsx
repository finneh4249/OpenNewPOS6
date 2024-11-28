// src/components/NumberButtonRow.jsx
import React from 'react';

function NumberButtonRow({ onNumberClick }) {
  const numbers = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div id="numberButtonRow" className="grid-item">
      {numbers.map((num) => (
        <button
          key={num}
          type="button"
          className="numberButton"
          onClick={() => onNumberClick(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default NumberButtonRow;