import React, { useState, useEffect } from 'react';
import './../../styles/snaks.css';
import { useNavigate } from 'react-router-dom';
const Bars = () => {
  const [num, setNum] = useState(0);
  function increment() {
    setNum((n) => n + 1);
  }
  const navigate = useNavigate();
  return (
    <div className="bars-container">
      <button className="bars-btn" onClick={increment}>
        Get more Bars.
      </button>
      <p>Counter: {num}</p>

      <div className="go-back">
        <button onClick={() => navigate('/')} className="go-back-btn">
          Go Back to Home
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        {Array.from({ length: num }).map((_, index) => (
          <img
            style={{ width: '100px', margin: '5px' }}
            key={index}
            src="https://media.istockphoto.com/id/1061286532/photo/chocolate-bar-with-nuts-coated-on-crispy-wafer.jpg?s=1024x1024&w=is&k=20&c=Wg7XTx51_q2zVy6XFWh2FHAHJtKKnETd-7Uwp-8jTNE=" // Replace with your desired image URL
            alt="Generated"
          />
        ))}
      </div>
    </div>
  );
};
export default Bars;
