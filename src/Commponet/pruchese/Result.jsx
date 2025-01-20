import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export default function Result() {
  return (
    <div className=' mt-5 p-3' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',borderRadius:'10px'}} >
        <InputGroup className="mb-3  ">
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          
        />
        <Button variant="secondary"   style={{order:'1'}}>
        apply
        </Button>
      </InputGroup>
      <h2 style={{fontFamily:'IBM Plex Sans Arabic', fontSize:'20px',margin:'5px 0 0 0',border:'1px solid #9c9c9c75',padding:'12px 5px',borderRadius:'5px'}} className='d-flex justify-content-center'>
        2400$
      </h2>
      <Button className='mt-3 w-100 p-2' variant="success">Complete the purchase</Button>

    </div>
  )
}
