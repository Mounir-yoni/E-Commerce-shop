import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../image/mobile.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function PrucheseCommponet() {
  return (
    <div >
      <h2>Shopping cart</h2>
      <Container style={{ maxWidth: '100%'}}>

      <div style={{ width: '100%',textAlign:'left',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',borderRadius:'10px',margin:'15px 0' }} className=' d-flex '>
      <Card.Img variant="top" src={img} style={{width:'250px',height:'250px',border:'1px solid #9c9c9c75',margin:'10px',borderRadius:'10px'}}/>
      <Card.Body style={{width:'100%'}} className=''>

        <Card.Title style={{textAlign:'left' ,fontSize:'25px',fontFamily:'IBM Plex Sans Arabic',margin:"10px 0"}}>Electronic</Card.Title>
        <Card.Text style={{textAlign:'left',fontSize:'20px',fontFamily:'IBM Plex Sans Arabic',margin:"10px 0"}}>
            <p>Iphone XR 64GB Supports 4G technology with FaceTime application, red</p>
            <h4>Brand: Apple</h4>
            <div style={{height:'40px',width:'40px',backgroundColor:'red',borderRadius:'50%',border:'1px solid white',cursor:'pointer'}}></div>
            <div className='d-flex'>
                <h6 style={{margin:'10px 0',fontSize:'20px',fontFamily:'IBM Plex Sans Arabic'}}>Quantity</h6>
                <input type="number" style={{margin:'auto 5px',height:'25px' ,width:'60px',border:'1px solid gray', textAlign:'center'}} value={1} />
            </div>
        </Card.Text>
        </Card.Body>

        </div>
      </Container>
    </div>
  )
}
