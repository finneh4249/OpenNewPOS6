// src/components/Menu.jsx
import PropTypes from 'prop-types';

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  addCurrentOrder: PropTypes.func.isRequired,
};

function Menu({ items, addCurrentOrder }) {
  return (
    <div id="menuButtonsRow" className="grid-item">
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          className={item.className}
          id={item.id}
          onClick={() => addCurrentOrder(item)}
        >
          {item.link ? <a href={item.link}>{item.name}</a> : item.name}
        </button>
      ))}
    </div>
  );
}

export default Menu;
