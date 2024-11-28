import React, { useState } from 'react';
import './assets/css/main.css';
import TopButtonsRowOne from './components/TopButtonsRowOne';
import TopButtonsRowTwo from './components/TopButtonsRowTwo';
import NumberButtonRow from './components/NumberButtonRow';
import MenuButtonsRow from './components/MenuButtonsRow';
import Orders from './components/Orders';

function App() {
  const [currentOrders, setCurrentOrders] = useState([]);
  const [previousOrders, setPreviousOrders] = useState([]);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null);

  const addCurrentOrder = (item) => {
    const existingOrderIndex = currentOrders.findIndex(order => order.name === item.name);
    if (existingOrderIndex >= 0) {
      // Increment quantity if item already exists
      const updatedOrders = [...currentOrders];
      updatedOrders[existingOrderIndex].quantity += 1;
      setCurrentOrders(updatedOrders);
    } else {
      // Add new item with quantity 1
      setCurrentOrders([...currentOrders, { ...item, quantity: 1 }]);
    }
  };

  const moveToPrevious = (index) => {
    const order = currentOrders[index];
    setPreviousOrders([...previousOrders, order]);
    const updatedCurrent = currentOrders.filter((_, i) => i !== index);
    setCurrentOrders(updatedCurrent);
    // Reset selected order if it's the one moved
    if (selectedOrderIndex === index) {
      setSelectedOrderIndex(null);
    }
  };

  const handleNumberClick = (number) => {
    if (selectedOrderIndex === null) {
      console.log('No order selected.');
      return;
    }
    const updatedOrders = [...currentOrders];
    updatedOrders[selectedOrderIndex].quantity = number;
    setCurrentOrders(updatedOrders);
  };

  const handleSelectOrder = (index) => {
    setSelectedOrderIndex(index);
  };

  return (
    <div id="mainScreen" className="grid-container">
      <div id="orderTakingScreen" className="grid-item">
        <TopButtonsRowOne />
        <TopButtonsRowTwo />
        <NumberButtonRow onNumberClick={handleNumberClick} />
        <MenuButtonsRow addCurrentOrder={addCurrentOrder} />
      </div>
      <Orders 
        currentOrders={currentOrders} 
        previousOrders={previousOrders} 
        moveToPrevious={moveToPrevious}
        onSelectOrder={handleSelectOrder}
      />
    </div>
  );
}

export default App;