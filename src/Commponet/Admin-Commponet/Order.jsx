import React from 'react'
import { Card } from 'react-bootstrap'
import img from '../../image/mobile.png'
import Button from 'react-bootstrap/Button';
export default function Order() {
  return (
    <div className='mt-4'>
    <h1>Order management</h1>
    <div>

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
                <h4 style={{margin:'5px 8px',border:'1px solid gray' ,padding:'1px 15px'}}> 5</h4>
            </div>
            <h3>Price: 1000$</h3>
        </Card.Text>
        </Card.Body>
    

        <div className='d-flex flex-column align-items-between justify-content-between ' style={{height:'250px',margin:'10px'}}>
        <Button variant="outline-success" style={{height:'48%',width:'100%'}}>Accept</Button>
        <Button variant="outline-danger" style={{height:'48%',width:'100%'}}>Refuse</Button>
        </div>
        </div>
    </div>


    </div>
  )
}
