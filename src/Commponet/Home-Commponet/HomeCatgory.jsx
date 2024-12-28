import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import catimg1 from '../../image/clothe.png';
import catimg2 from '../../image/cat2.png';
import catimg3 from '../../image/labtop.png';
import catimg4 from '../../image/sale.png';
import catimg5 from '../../image/pic.png';
export default function HomeCatgory() {
  return (
    <Container fluid="xl  mt-4" style={{ maxWidth: '80%'}}>
      <nav className="navbar d-flex  ">
        <h2 style={{fontFamily:'IBM Plex Sans Arabic', fontSize:'30px',margin:'0'}}>Catgory</h2>
        <Button variant="outline-dark" style={{fontSize:'20px', padding:'5px 20px',margin:'0'}}>More</Button>
      </nav>



      <Container fluid="xl  mt-4"  style={{ maxWidth: '95%'}}>

        <Row className='d-flex justify-content-between'>


            <Card style={{ width: '12rem',border:"none"}} className='d-flex justify-content-center align-items-center'>
                <div style={{ backgroundColor:'#ffd39a89',borderRadius:'50%'}}>
                <Image className='catimg' src={catimg1}   />
                </div>
                <p style={{fontFamily:'IBM Plex Sans Arabic', fontSize:'25px',fontWeight:'700',margin:'5px 0 0 0'}}>Discounts</p>
            </Card>


            <Card style={{ width: '12rem',border:"none"}} className='d-flex justify-content-center align-items-center'>
                <div style={{ backgroundColor:'#e8bcb962',borderRadius:'50%'}}>
                <Image className='catimg' src={catimg2}   />
                </div>
                <p style={{fontFamily:'IBM Plex Sans Arabic', fontSize:'25px',fontWeight:'700',margin:'5px 0 0 0'}}>Discounts</p>
            </Card>


            <Card style={{ width: '12rem',border:"none"}} className='d-flex justify-content-center align-items-center'>
                <div style={{ backgroundColor:'#f8d3bda1',borderRadius:'50%'}}>
                <Image className='catimg' src={catimg3}   />
                </div>
                <p style={{fontFamily:'IBM Plex Sans Arabic', fontSize:'25px',fontWeight:'700',margin:'5px 0 0 0'}}>Discounts</p>
            </Card>


            <Card style={{ width: '12rem',border:"none"}} className='d-flex justify-content-center align-items-center'>
                <div style={{ backgroundColor:'#fff2c2cb',borderRadius:'50%'}}>
                <Image className='catimg' src={catimg4}   />
                </div>
                <p style={{fontFamily:'IBM Plex Sans Arabic', fontSize:'25px',fontWeight:'700',margin:'5px 0 0 0'}}>Discounts</p>
            </Card>


            <Card style={{ width: '12rem',border:"none"}} className='d-flex justify-content-center align-items-center'>
                <div style={{ backgroundColor:'#f9c0aba2',borderRadius:'50%'}}>
                <Image className='catimg' src={catimg5}   />
                </div>
                <p style={{fontFamily:'IBM Plex Sans Arabic', fontSize:'25px',fontWeight:'700',margin:'5px 0 0 0'}}>Discounts</p>
            </Card>


            <Card style={{ width: '12rem',border:"none"}} className='d-flex justify-content-center align-items-center'>
                <div style={{ backgroundColor:'#a1eebda5',borderRadius:'50%'}}>
                <Image className='catimg' src={catimg1}   />
                </div>
                <p style={{fontFamily:'IBM Plex Sans Arabic', fontSize:'25px',fontWeight:'700',margin:'5px 0 0 0'}}>Discounts</p>
            </Card>
        </Row>
      </Container>
    </Container>
  )
}
