import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Navbarcomponent from '../../Commponet/Utility/Navbar'
import Categoryheader from '../../Commponet/Category/Categoryheader'
import { Col, Row } from 'react-bootstrap'
import Slideimagecommponet from '../../Commponet/product-info-Commponet/Slideimagecommponet'
import Infoproduct from '../../Commponet/product-info-Commponet/Infoproduct'
import Commentproduct from '../../Commponet/product-info-Commponet/Commentproduct'
import Cardproudect from '../../Commponet/Home-Commponet/Cardproudect'
import Footer from '../../Commponet/Utility/Footer'
export default function Prodectdet() {
  return (
    <div>
  <Navbarcomponent />
  <Container
    style={{ maxWidth: '90%', backgroundColor: '#eae8e829' }}
    className="p-3"
  >
    <Categoryheader />
    <Container
      fluid
      className="mt-4 d-flex justify-content-center flex-wrap"
    >
      <Row className="g-4">
        <Col xs={12} md={5}>
          <Slideimagecommponet />
        </Col>
        <Col xs={12} md={7}>
          <Infoproduct />
        </Col>
      </Row>
    </Container>
    <Container className="mt-4">
      <Commentproduct />
    </Container>
  </Container>
  <Container fluid className="mt-4">
    <Cardproudect nameofhead="Products you may like" />
  </Container>
  <Footer />
</div>
  )
}
