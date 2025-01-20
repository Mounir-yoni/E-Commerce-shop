/* eslint-disable no-unused-vars */
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imagesell from '../../image/item.png'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default function Cardproudect({nameofhead}) {

  const StyledWrapper = styled.div`
  .card {
    transition: 0.5s;
    cursor: pointer;
    width: 18rem;
    height: 25rem;
  }

  .card:hover {
    transform: translateY(-10px); /* Slightly reduced hover effect */
  }
`;

const tab = [1, 2, 3, 4];

const dataflow = tab.map((item, index) => (
  <Col xs={12} sm={6} md={4} lg={3} key={index} style={{ marginBottom: '20px' }}>
    <StyledWrapper>
      <div className="card">
        <Link
          to={`/product/${item.id}`}
          style={{ display: 'inline-block', textDecoration: 'none' }}
          key={item.id || index}
        >
          <Card
            style={{
              width: '100%',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Card.Img
              variant="top"
              src={item.image || imagesell}
              alt={item.title || 'Product Image'}
              className="product-img"
              style={{ height: '100%', objectFit: 'cover' }}
            />
            <Card.Body className="body-card">
              <Card.Text
                style={{
                  fontFamily: 'IBM Plex Sans Arabic',
                  fontSize: '16px',
                  margin: '0 0 10px 0',
                }}
              >
                {item.title || 'Default Product Title'}
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <p
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    margin: '0',
                  }}
                >
                  {item.price ? `$${item.price}` : 'Price Not Available'}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-suit-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                </svg>
              </div>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </StyledWrapper>
  </Col>
));

return (
  <Container fluid="xl mt-4" style={{ maxWidth: '75%' }} className='fade-in'>
    {/* Header Section */}
    <nav className="navbar d-flex justify-content-ce align-items-center mb-4">
      <h2
        style={{
          fontFamily: 'IBM Plex Sans Arabic',
          fontSize: '24px',
          margin: '0',
        }}
      >
        {nameofhead}
      </h2>
      <Link to="/products">
        <Button variant="outline-dark" style={{ fontSize: '16px', padding: '5px 20px', margin: '0' }}>
          More
        </Button>
      </Link>
    </nav>

    {/* Product Cards */}
    <Row className="d-flex flex-wrap justify-content-center g-3">{dataflow}</Row>
  </Container>
);
}
