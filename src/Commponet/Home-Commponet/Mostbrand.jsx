import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import brandimg1 from '../../image/brand1.png';
import brandimg2 from '../../image/brand2.png';
import brandimg3 from '../../image/brand3.png';

export default function Mostbrand() {
  return (
    <Container fluid="xl  mt-4" style={{ maxWidth: '80%'}}>
      <nav className="navbar d-flex  ">
        <h2 style={{fontFamily:'IBM Plex Sans Arabic', fontSize:'30px',margin:'0'}}>Catgory</h2>
        <Button variant="outline-dark" style={{fontSize:'20px', padding:'5px 20px',margin:'0'}}>More</Button>
      </nav>



      <Container fluid="xl  mt-4"  style={{ maxWidth: '95%'}}>

        <Row className='d-flex justify-content-between'>


            <Card style={{ width: '12rem',border:"none"}} className='d-flex justify-content-center align-items-center'>
                <div >
                <Image className='brand-img' src={brandimg1}   />
                </div>
            </Card>


            <Card style={{ width: '12rem',border:"none"}} className='d-flex justify-content-center align-items-center'>
                <div >
                <Image className='brand-img' src={brandimg2}   />
                </div>
            </Card>


            <Card style={{ width: '12rem',border:"none"}} className='d-flex justify-content-center align-items-center'>
                <div >
                <Image className='brand-img' src={brandimg3}   />
                </div>
            </Card>


            <Card style={{ width: '12rem',border:"none"}} className='d-flex justify-content-center align-items-center'>
                <div >
                <Image className='brand-img' src={brandimg1}   />
                </div>
            </Card>


            <Card style={{ width: '12rem',border:"none"}} className='d-flex justify-content-center align-items-center'>
                <div >
                <Image className='brand-img' src={brandimg2}   />
                </div>
            </Card>

            <Card style={{ width: '12rem',border:"none"}} className='d-flex justify-content-center align-items-center'>
                <div >
                <Image className='brand-img' src={brandimg3}   />
                </div>
            </Card>


            
        </Row>
      </Container>
    </Container>
  )
}
