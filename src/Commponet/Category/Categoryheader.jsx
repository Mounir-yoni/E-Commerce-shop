import React from 'react';
import './Category-style.css';

export default function Categoryheader() {
  return (
    <div className="d-flex flex-wrap category-header-container">
      <div className="cat-text-header animated-slide">All</div>
      <div className="cat-text-header animated-slide">Electronics</div>
      <div className="cat-text-header animated-slide">Clothing</div>
      <div className="cat-text-header animated-slide">Electrical</div>
      <div className="cat-text-header animated-slide">Sales</div>
      <div className="cat-text-header animated-slide">Sales</div>
      <div className="cat-text-header animated-slide">Sales</div>
      <div className="cat-text-header animated-slide">Sales</div>
      <div className="cat-text-header animated-slide">More</div>
    </div>
  );
}

