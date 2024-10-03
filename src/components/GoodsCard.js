import React from 'react';
import '../App.css';

function GoodsCard({ image, name, cost }) {
  return (
    <div className="goods-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Cost: {cost} grn</p>
    </div>
  );
}

export default GoodsCard;
