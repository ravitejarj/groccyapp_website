// File: src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="text-section">
      <div className="badge">🚚 Same-Day Indian Grocery Delivery</div>
      <h1 className="title hover-bounce small-title">Fresh Groceries at Your Doorstep</h1>
      <p className="subtitle hover-fade small-subtitle">No lines. No bags. Just fresh groceries.</p>
    </div>
  );
}

export default HeroSection;