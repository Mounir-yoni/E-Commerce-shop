import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import catimg1 from '../../image/clothe.png';
import catimg2 from '../../image/cat2.png';
import catimg3 from '../../image/labtop.png';
import catimg4 from '../../image/sale.png';
import catimg5 from '../../image/pic.png';
import './Home-style.css';
export default function HomeCategory() {
  const catimg = [catimg1, catimg2, catimg3, catimg4, catimg5, catimg1];

  const dataflow = catimg.map((item, index) => (
    <Col

      key={index}
      className="d-flex justify-content-center fade-in"
    >
      <Link to={'/Allcategory'} state={{ display: 'inline-block' }} style={{ textDecoration: 'none' }}>
        <Card
          style={{
            border: 'none',
            margin: '10px 0',
            backgroundColor: 'transparent',
          }}
          className="d-flex justify-content-center align-items-center card"
        >
          <div
            style={{
              backgroundColor: '#ffd39a89',
              borderRadius: '50%',
              padding: '15px',
            }}
          >
            <Image className="catimg" src={item}  />
          </div>
          <p
            style={{
              fontFamily: 'IBM Plex Sans Arabic',
              fontSize: '20px',
              fontWeight: '700',
              margin: '10px 0 0 0',
              textAlign: 'center',
              color: 'black',
            }}
          >
            Discounts
          </p>
        </Card>
      </Link>
    </Col>
  ));

  return (
    <Container fluid="xl mt-4" style={{ maxWidth: '80%' }}>
      <nav className="navbar d-flex justify-content-between align-items-center">
        <h2 style={{ fontFamily: 'IBM Plex Sans Arabic', fontSize: '30px', margin: '0' }}>Category</h2>
        <Link to={'/Allcategory'}>
          <Button variant="outline-dark" style={{ fontSize: '20px', padding: '5px 20px', margin: '0' }}>
            More
          </Button>
        </Link>
      </nav>

      <Container fluid="xl mt-4" style={{ maxWidth: '95%' }}>
        <Row className="d-flex justify-content-center">{dataflow}</Row>
      </Container>
    </Container>
  );
}
