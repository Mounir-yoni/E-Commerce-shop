import React from 'react'
import Exportfile from './Exportfile'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function Addnewproduct() {
  return (
    <div className='d-flex flex-column align-items-center'>
        <Exportfile/>
        
        <InputGroup className="mt-3" style={{width:'50%'}}>
        <InputGroup.Text id="basic-addon1" style={{backgroundColor:'#212529',color:'white'}}>Product Name</InputGroup.Text>
        <Form.Control
          placeholder="Product Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>


      <InputGroup className="mt-3" style={{width:'50%'}}>
        <Form.Control as="textarea" aria-label="With textarea" placeholder='Description' />
        
      </InputGroup>


      <InputGroup className="mb-3 mt-3" style={{width:'50%'}}>
        <InputGroup.Text style={{backgroundColor:'#212529',color:'white'}}>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" type='number'/>
      </InputGroup>

      <InputGroup className="mb-3" style={{width:'50%'}}>
        <InputGroup.Text style={{backgroundColor:'#212529',color:'white'}}>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" type='number'/>
      </InputGroup>


      <InputGroup className="mb-3" style={{width:'50%'}}>
        <InputGroup.Text id="basic-addon1" style={{backgroundColor:'#212529',color:'white'}}>Brand</InputGroup.Text>
        <Form.Control
          placeholder="Like Apple, Samsung, ...etc"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <h4 style={{fontFamily:'IBM Plex Sans Arabic',margin:'10px 0 0 0'}}>Color :</h4>
      <div className='d-flex justify-content-between' style={{width:'140px',margin:'15px 5px'}}>
      <div style={{height:'40px',width:'40px',backgroundColor:'red',borderRadius:'50%',border:'1px solid white',cursor:'pointer'}}></div>
      <div style={{height:'40px',width:'40px',backgroundColor:'black',borderRadius:'50%',border:'1px solid white',cursor:'pointer'}}></div>
      <div style={{height:'40px',width:'40px',backgroundColor:'gray',borderRadius:'50%',border:'1px solid white',cursor:'pointer'}}></div>
      </div>

      <Button variant="outline-dark" style={{width:'50%' ,fontFamily:'IBM Plex Sans Arabic',fontSize:'20px',fontWeight:'bold'}}>Add this product</Button>

    </div>
  )
}
