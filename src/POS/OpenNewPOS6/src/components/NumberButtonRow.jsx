// src/components/NumberButtonRow.jsx
import PropTypes from 'prop-types';


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

NumberButtonRow.propTypes = {
  onNumberClick: PropTypes.func.isRequired,
};

export default NumberButtonRow;
