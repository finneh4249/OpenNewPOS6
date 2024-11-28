// src/components/Orders.jsx
import React from 'react';

function Orders({ currentOrders, previousOrders, moveToPrevious }) {
  return (
    <div id="orders" className="grid-item">
      <div id="currentOrder" className="grid-item">
        <select className="currentOrder" size="10">
          {currentOrders.map((order, index) => (
            <option key={index} onDoubleClick={() => moveToPrevious(index)}>
              {order.quantity} {order.name}
            </option>
          ))}
        </select>
      </div>
      <div id="previousOrders" className="grid-item">
        <select className="previousOrders" size="10">
          {previousOrders.map((order, index) => (
            <option key={index}>
              {order.name} - Quantity: {order.quantity}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Orders;