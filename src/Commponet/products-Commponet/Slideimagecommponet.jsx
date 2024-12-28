import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgmobile from '../../image/mobile.png';
import imgmobile1 from '../../image/mobile1.png';
import imgmobile2 from '../../image/mobile2.png';
import './proudect-style.css';
export default function Slideimagecommponet() {
  return (
    <div>
    <Carousel style={{backgroundColor:'#eae8e847',borderRadius:'20px'}}>
    <Carousel.Item >
        <img className='img-mobile' src={imgmobile} alt="" />
   </Carousel.Item>
   <Carousel.Item >
      <img className='img-mobile' src={imgmobile1} alt="" />

   </Carousel.Item>
   <Carousel.Item >
     <img className='img-mobile' src={imgmobile2} alt="" />

   </Carousel.Item>
 </Carousel>
 </div>
  )
}
