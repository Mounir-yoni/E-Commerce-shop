import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import laptops from '../../image/laptops.png'
import './Home-style.css'
const DiscountSection = () => {
    return (
        <Container style={{maxWidth:"77%"}}>
            <Row className="discount-backcolor my-3  d-flex text-center align-items-center">
                <Col sm="6">
                    <div className="discount-title">
                    Up to 30% off on laptops
                    </div>
                </Col>
                <Col sm="6">
                    <img className="dicount-img" src={laptops} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default DiscountSection