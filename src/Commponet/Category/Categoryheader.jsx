import React from 'react'
import './Category-style.css'
export default function Categoryheader() {
  return (
    <div style={{maxWidth:'45%'}} className='d-flex justify-content-between flex-wrap'>
        <div className="cat-text-header">All</div>
        <div className="cat-text-header">Electronics</div>
        <div className="cat-text-header">Clothing</div>
        <div className="cat-text-header">Electrical</div>
        <div className="cat-text-header">Sales</div>
        <div className="cat-text-header">Sales</div>
        <div className="cat-text-header">Sales</div>
        <div className="cat-text-header">Sales</div>
        <div className="cat-text-header">More</div>
    </div>
  )
}
