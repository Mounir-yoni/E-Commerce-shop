import Carousel from 'react-bootstrap/Carousel';
import brandlogo from '../../image/slider4.png';
import brandlogo2 from '../../image/prod3.png';
import brandlogo3 from '../../image/prod4.png';
import brandlogo4 from '../../image/slider1.png';
import './Home-style.css';


function UncontrolledExample() {

  const ads = [brandlogo, brandlogo2, brandlogo3, brandlogo4];

  const dataflow = ads.map((item, index) => {
    return (
      <Carousel.Item className='fade-in' key={index} style={{ backgroundColor: "#FFE2E2", height: "44vh" }}>
        <div className="d-flex flex-wrap justify-content-center align-items-center h-100" style={{ margin: "0 auto", padding: "2%" }}>
          <div className="text-container text-center text-md-start" style={{ marginRight: "3%", flex: "1", minWidth: "250px" }}>
            <h2 className="slider-text" style={{ fontSize: "1.2rem", marginBottom: "10px" }}>There is a big discount</h2>
            <h1 className="slider-text" style={{ fontSize: "2rem" }}>Up to 50% off</h1>
          </div>
          <div style={{ flex: "1", textAlign: "center", minWidth: "250px" }}>
            <img src={item} className="slider-img img-fluid" alt="" style={{ maxWidth: "100%", height: "40vh", objectFit: "contain" }} />
          </div>
        </div>
      </Carousel.Item>
    );
  });

  return (
      <Carousel style={{ backgroundColor: "black", height: "auto" }}>
        {/* First Slide */}


        {dataflow}
      </Carousel>
  );
}

export default UncontrolledExample;