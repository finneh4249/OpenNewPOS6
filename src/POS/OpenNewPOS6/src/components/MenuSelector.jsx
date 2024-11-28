import React from 'react';

function MenuSelector({ menus, selectedMenu, onSelect }) {
  return (
    <div id="menuButtonsRow" className="grid-item">
        <div className='span-2 menuTitle'><span>{selectedMenu.title}</span><span>({selectedMenu.time})</span></div>
      {menus.map((menu) => (

        <button
          key={menu.id}
          type="button"
          className={`menuButton`}
          onClick={() => onSelect(menu)}
        >
          {menu.title}
        </button>
        
      ))}
      <button type="button" className="purple" id='voidLine'>Void Line</button>
    </div>
  );
}

export default MenuSelector;