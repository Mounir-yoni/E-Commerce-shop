import React from 'react';
import Navbarcomponent from '../../Commponet/Utility/Navbar';
import PrucheseCommponet from '../../Commponet/pruchese/Pruchese-Commponet';
import { Col, Container } from 'react-bootstrap';
import Result from '../../Commponet/pruchese/Result';
import './cacher.css'; // Import the CSS file for animations

export default function Purchese() {
  return (
    <div>
      <Navbarcomponent />
      <Container 
        className="d-flex flex-wrap justify-content-center animated-fade-in" 
      >
        <Col xs={12} md={9} className="mb-4 animated-slide-left">
          <PrucheseCommponet />
        </Col>
        <Col xs={12} md={3} className="animated-slide-right">
          <Result />
        </Col>
      </Container>
    </div>
  );
}
