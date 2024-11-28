// src/components/MenuButtonsRow.jsx
import React, { useState } from 'react';
import MenuSelector from './MenuSelector';
import Menu from './Menu';
import menus from '../data/menus';

function MenuButtonsRow({ addCurrentOrder }) {
  const [selectedMenu, setSelectedMenu] = useState(menus[0]);

  return (
    <>
      <MenuSelector
        menus={menus}
        selectedMenu={selectedMenu}
        onSelect={setSelectedMenu}
      />
      <Menu items={selectedMenu.items.row1.items} addCurrentOrder={addCurrentOrder} />
      <Menu items={selectedMenu.items.row2.items} addCurrentOrder={addCurrentOrder} />
      <Menu items={selectedMenu.items.row3.items} addCurrentOrder={addCurrentOrder} />
    </>
  );
}

export default MenuButtonsRow;