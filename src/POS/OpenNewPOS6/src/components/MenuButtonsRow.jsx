// src/components/MenuButtonsRow.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import MenuSelector from './MenuSelector';
import Menu from './Menu';
import menus from '../data/menus';

function MenuButtonsRow({ addCurrentOrder }) {
    const [selectedMenu, setSelectedMenu] = useState(menus[0]);
  if (!addCurrentOrder) {
    console.error("addCurrentOrder prop is missing in MenuButtonsRow component.");
    return null; // or a fallback UI
  }

  
 
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

MenuButtonsRow.propTypes = {
  addCurrentOrder: PropTypes.func.isRequired,
};


export default MenuButtonsRow;
