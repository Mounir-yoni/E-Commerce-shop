import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgmobile from '../../image/mobile.png';
import imgmobile1 from '../../image/mobile1.png';
import imgmobile2 from '../../image/mobile2.png';
import './proudect-style.css';

export default function Slideimagecommponet() {
  return (
    <div>
      <Carousel 
        style={{ backgroundColor: '#eae8e847', borderRadius: '20px' }}
        interval={3000} // Adjust the duration of each slide (in milliseconds)
        fade // Enable cross-fade transitions
        controls={true} // Show next/prev controls
        indicators={true} // Show slide indicators
      >
        <Carousel.Item>
          <img className="img-mobile" src={imgmobile} alt="Mobile 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-mobile" src={imgmobile1} alt="Mobile 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-mobile" src={imgmobile2} alt="Mobile 3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
