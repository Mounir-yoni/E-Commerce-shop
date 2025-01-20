import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import imagesell from '../../image/item.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.div`.card {

  transition: 0.5s;
  cursor: pointer;
  width: 18rem;
  height: 25rem;
}

.card:hover {
  transform: translateY(-20px);
}
}`;

export default function Productsstep() {
  const tab = [
    { id: 1, title: 'Product 1', price: 20, image: null },
    { id: 2, title: 'Product 2', price: 30, image: null },
    { id: 1, title: 'Product 1', price: 20, image: null },
    { id: 2, title: 'Product 2', price: 30, image: null },
    { id: 1, title: 'Product 1', price: 20, image: null },
    { id: 2, title: 'Product 2', price: 30, image: null },
    { id: 1, title: 'Product 1', price: 20, image: null },
    { id: 2, title: 'Product 2', price: 30, image: null },
    { id: 1, title: 'Product 1', price: 20, image: null },
    { id: 2, title: 'Product 2', price: 30, image: null },
    { id: 1, title: 'Product 1', price: 20, image: null },
    { id: 2, title: 'Product 2', price: 30, image: null },
    // Add more mock items or fetch data dynamically
  ];

  const dataflow = tab.map((item, index) => {
    return (
      <Col key={item.id || index} className="mb-4  d-flex justify-content-center" >
        <StyledWrapper>
          <div className="card">
            <span />
            <div className="content">
              <Link
                to={`/product/${item.id}`}
                style={{ display: 'inline-block', textDecoration: 'none' }}
              >
                <Card
                  style={{
                    width: '300px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image || imagesell}
                    alt={item.title || 'Product Image'}
                    className="product-img"
                  />
                  <Card.Body className="body-card">
                    <Card.Text
                      style={{
                        fontFamily: 'IBM Plex Sans Arabic',
                        fontSize: '18px',
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
                        }}
                      >
                        {item.price ? `$${item.price}` : 'Price Not Available'}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
          </div>
        </StyledWrapper>
      </Col>
    );
  });

  return (
    <Container fluid="xl mt-4" style={{ maxWidth: '100%' }}>
      <Row className="d-flex flex-wrap justify-content-between g-3">{dataflow}</Row>
    </Container>
  );
}
