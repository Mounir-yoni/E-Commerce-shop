import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Navbarcomponent from '../../Commponet/Utility/Navbar'
import Categoryheader from '../../Commponet/Category/Categoryheader'
import { Col, Row } from 'react-bootstrap'
import Slideimagecommponet from '../../Commponet/products-Commponet/Slideimagecommponet'
import Infoproduct from '../../Commponet/products-Commponet/Infoproduct'
import Commentproduct from '../../Commponet/products-Commponet/Commentproduct'
import Cardproudect from '../../Commponet/Home-Commponet/Cardproudect'
import Footer from '../../Commponet/Utility/Footer'
export default function Prodectdet() {
  return (
    <div>
        <Navbarcomponent/>
        <Container style={ {maxWidth:'75%',backgroundColor:'#eae8e829'}} className=''>
        <Categoryheader/>
        <Container style={{maxWidth:'100%'}} className='mt-4 d-flex justify-content-between flex-wrap'>
            <Row>
                <Col xs={5} >
                <Slideimagecommponet/>
                </Col>
                <Col xs={7} >
                <Infoproduct/>
                </Col>
            </Row>
        </Container>
        <Container  className='mt-4'>
            <Commentproduct/>
        </Container>
        </Container>
        <Cardproudect nameofhead={"Products you may like"}/>
        <Footer></Footer>
    </div>
  )
}
