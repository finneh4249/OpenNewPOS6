import React from 'react';

function TopButtonsRowOne() {
  return (
    <div id="topButtonsRowOne" className="grid-item">
      <div className="row-span-2">User Logged</div>
      <div className="div"><span></span></div>
      <div className="rowOne">
        <div className="block" id="numberButtonDisplay"></div>
        <div className="block"></div>
        <div className="block username">Ethan Cornwill</div>
        <div className="block date-time">01/01/2020 12:00:48</div>
      </div>
      <div className="rowTwo">
        <div className="block"></div>
        <div className="block posID">POS001</div>
        <div className="block posType">FC</div>
        <div className="block"></div>
        <div className="block"></div>
      </div>
      <div className="block row-span-2 lastItem"></div>
    </div>
  );
}

export default TopButtonsRowOne;