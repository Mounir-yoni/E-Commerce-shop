import React from 'react';
import './proudect-style.css'; // Create this CSS file for styles

export default function Infoproduct() {
  return (
    <div className="info-product animated-slide-up">
      <h4 className="text-font" style={{ fontSize: '20px', fontWeight: '600', margin: '5px 0 10px', color: 'black' }}>
        Electronics
      </h4>
      <p className="text-font" style={{ fontSize: '22px', fontWeight: '600', margin: '5px 0 2px', color: 'black' }}>
        iPhone XR 64GB Supports 4G technology with FaceTime application, red
      </p>
      <p style={{ fontSize: '20px', fontWeight: '700', margin: '1px 3px', color: 'orange' }}>
        4.5{' '}
        <svg
          style={{ width: '20px', height: '20px', marginBottom: '4px' }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </p>
      <h3 className="text-font" style={{ fontSize: '25px', fontWeight: '600', margin: '5px 0 2px', color: 'black' }}>
        Brand: <span>Apple</span>
      </h3>
      <div className="d-flex justify-content-between" style={{ width: '140px', margin: '15px 5px' }}>
        <div
          style={{
            height: '40px',
            width: '40px',
            backgroundColor: 'red',
            borderRadius: '50%',
            border: '1px solid white',
            cursor: 'pointer',
          }}
        ></div>
        <div
          style={{
            height: '40px',
            width: '40px',
            backgroundColor: 'black',
            borderRadius: '50%',
            border: '1px solid white',
            cursor: 'pointer',
          }}
        ></div>
        <div
          style={{
            height: '40px',
            width: '40px',
            backgroundColor: 'gray',
            borderRadius: '50%',
            border: '1px solid white',
            cursor: 'pointer',
          }}
        ></div>
      </div>
      <h2 className="text-font">Specifications:</h2>
      <p className="text-muted">
        Supports the operation of two SIM cards, the second, third and fourth generation, the first SIM is Nano and the
        second is e-Sim. Weight 194 grams with a glass design on the back and glass on the front with a 2.5D layer on
        the screen, and a thickness of 8.3 mm. 6.1-inch IPS LCD screen with a notch or cut in the screen with dimensions
        of 19.5: 9, and the screen has HD + resolution and a pixel density of 326 pixels per inch, and the screen
        occupies 79% of the phone's body. iPhone XR's operating system is iOS 12 The mobile processor is the A12 Bionic
        hexa-core, which is the most powerful processor from Apple so far and comes with a 7-nanometer manufacturing
        process, making it the best in performance and energy consumption
      </p>
    </div>
  );
}
