import './../../styles/snaks.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Cookies() {
  const [cookieCount, setCookieCount] = useState(0);
  const [baking, setBaking] = useState(false);

  const grabCookie = () => {
    setCookieCount(cookieCount - 1);
  };

  const bakeCookies = () => {
    setBaking(true);
    setTimeout(() => {
      setCookieCount(cookieCount + 5);
      setBaking(false);
    }, 2000); // Simulates baking time
  };
  const navigate = useNavigate();
  return (
    <div className="cookies-container">
      <h1>Dough-Main 🍪</h1>
      <p className="cookies-description">
        Grab some cookies or bake a fresh batch! The tastiest cookies await you.
      </p>
      <div className="actions">
        <button onClick={grabCookie} className="cookie-btn">
          Grab a Cookie
        </button>
        <button
          onClick={bakeCookies}
          className="cookie-btn bake-btn"
          disabled={baking}>
          {baking ? 'Baking...' : 'Bake Cookies'}
        </button>
      </div>
      <div className="cookie-count">
        <h2>🍪 Cookies Collected: {cookieCount}</h2>
      </div>
      <div className="go-back">
        <button onClick={() => navigate('/')} className="go-back-btn">
          Go Back to Home
        </button>
      </div>
    </div>
  );
}

export default Cookies;
