import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../../styles/snaks.css';
const Sodas = () => {
  const navigate = useNavigate();

  return (
    <div className="sodas">
      <div className="sodas-container">
        <h1>Soda-licious</h1>
        <p className="sodas-description">
          Quench your thirst with the fizz and fun of Soda-Land! 🍹✨
        </p>
        <div className="go-back">
          <button onClick={() => navigate('/')} className="go-back-btn">
            Go Back to Home
          </button>
        </div>
        <div className="sodas-gifs">
          <img
            src="https://media.giphy.com/media/py1QeWtxdRzxK/giphy.gif?cid=ecf05e47ssjvr5urgrsp4olm6j0uc5qt240wy2uvv6cxfa9y&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="Soda fizzing"
          />
          <img
            src="https://media.giphy.com/media/bBkFVAzaASE1i/giphy.gif?cid=790b7611uogky9bh6npa3tp3kdakyjjpvcf03fmpuqird1lw&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="Pouring soda"
          />
          <img
            src="https://media.giphy.com/media/kMp79cKLYyLZK/giphy.gif?cid=ecf05e47ssjvr5urgrsp4olm6j0uc5qt240wy2uvv6cxfa9y&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="Cheers with soda"
          />
        </div>
      </div>
      ;
    </div>
  );
};
export default Sodas;
