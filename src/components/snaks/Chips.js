import './../../styles/snaks.css';
import React, { useState } from 'react';

function Chips() {
  const [chipCount, setChipCount] = useState(0);
  const [bagOpen, setBagOpen] = useState(false);

  const crunchChip = () => {
    setChipCount(chipCount - 1);
  };

  const openBag = () => {
    setBagOpen(true);
    setTimeout(() => {
      setChipCount(chipCount + 10);
      setBagOpen(false);
    }, 2000); // Simulates the time to open a bag
  };

  return (
    <div className="chips-container">
      <h1>Potato-licious 🥔</h1>
      <p className="chips-description">
        Get your crunch on with the crispiest chips in town!
      </p>
      <div className="actions">
        <button
          onClick={openBag}
          className="chip-btn open-bag-btn"
          disabled={bagOpen}>
          {bagOpen ? 'Opening...' : 'Open a Bag of Chips'}
        </button>
        <button onClick={crunchChip} className="chip-btn">
          Crunch a Chip
        </button>
      </div>
      <div className="chip-count">
        <h2>🥔 Chips Crunched: {chipCount}</h2>
      </div>
      <div className="go-back">
        <button
          onClick={() => (window.location.href = '/')}
          className="go-back-btn">
          Go Back to Home
        </button>
      </div>
    </div>
  );
}

export default Chips;
