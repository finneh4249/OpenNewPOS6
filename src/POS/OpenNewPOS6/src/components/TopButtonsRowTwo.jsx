import React from 'react';

function TopButtonsRowTwo() {
  return (
    <div id="topButtonsRowTwo" className="grid-item">
      <button type="button" className="recallMobile round">Recall Mobile Order</button>
      <button type="button" className="recallNumber round">Recall By Number</button>
      <button type="button" className="managerButton round">Manager</button>
    </div>
  );
}

export default TopButtonsRowTwo;