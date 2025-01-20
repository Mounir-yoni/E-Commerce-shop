import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import brandimg1 from '../../image/brand1.png';
import brandimg2 from '../../image/brand2.png';
import brandimg3 from '../../image/brand3.png';
import './Home-style.css'; // Import the CSS file

export default function Mostbrand() {
  const brandimg = [brandimg1, brandimg2, brandimg3, brandimg1, brandimg2, brandimg3];
  const dataflow = brandimg.map((item, index) => {
    return (
      <Card
        key={index}
        style={{ width: '12rem', border: 'none' }}
        className="d-flex justify-content-center align-items-center brand-card"
      >
        <div>
          <Image className="brand-img" src={item} />
        </div>
      </Card>
    );
  });

  return (
    <Container
      fluid="xl mt-4"
      style={{ maxWidth: '80%' }}
      className="fade-in" // Add the animation class
    >
      <nav className="navbar d-flex">
        <h2
          style={{
            fontFamily: 'IBM Plex Sans Arabic',
            fontSize: '30px',
            margin: '0',
          }}
        >
          Brand
        </h2>
        <Button
          variant="outline-dark"
          style={{ fontSize: '20px', padding: '5px 20px', margin: '0' }}
        >
          More
        </Button>
      </nav>

      <Container fluid="xl mt-4" style={{ maxWidth: '95%' }}>
        <Row className="d-flex justify-content-between">{dataflow}</Row>
      </Container>
    </Container>
  );
}
