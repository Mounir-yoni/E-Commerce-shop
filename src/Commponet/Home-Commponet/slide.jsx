import Carousel from 'react-bootstrap/Carousel';
import brandlogo from '../../image/slider4.png';
import brandlogo2 from '../../image/prod3.png';
import brandlogo3 from '../../image/prod4.png';
import brandlogo4 from '../../image/slider1.png';
import './Home-style.css';
function UncontrolledExample() {
  return (
    <Carousel style={{backgroundColor:'black',height:'100%'}}>




      <Carousel.Item style={{backgroundColor:'#FFE2E2'}}>
        <div className='d-flex justify-content-center' style={{marginRight:'15%'}}>
            <div style={{marginRight:'3%',marginTop:'8%'}}>
        <h2 className='slider-text'>There is a big discount</h2>
        <h1 className='slider-text'>Up to 50% off</h1>
            </div>
        <img src={brandlogo} className='slider-img' alt="" />
        </div>
        
      </Carousel.Item>
      



      <Carousel.Item style={{backgroundColor:'#B1F0F7'}}>
        <div className='d-flex justify-content-center' style={{marginRight:'15%'}}>
            <div style={{marginRight:'3%',marginTop:'8%'}}>
        <h2 className='slider-text'>There is a big discount</h2>
        <h1 className='slider-text'>Up to 50% off</h1>
            </div>
        <img src={brandlogo3} className='slider-img' alt="" />
        </div>
        
      </Carousel.Item>



      <Carousel.Item style={{backgroundColor:'#4DA1A9'}}>
        <div className='d-flex justify-content-center' style={{marginRight:'15%'}}>
            <div style={{marginRight:'3%',marginTop:'8%'}}>
        <h2 className='slider-text'>There is a big discount</h2>
        <h1 className='slider-text'>Up to 50% off</h1>
            </div>
        <img src={brandlogo4} className='slider-img' alt="" />
        </div>
        
      </Carousel.Item>
      




    </Carousel>
  );
}

export default UncontrolledExample;