import React from 'react'
import { Container } from 'react-bootstrap'
import Exportfile from './Exportfile'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export default function Addnewbrand() {
    const StyledWrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    gap: 7px;
    position: relative;
    color: #212529;
  }

  .container .label {
    font-size: 15px;
    padding-left: 10px;
    position: absolute;
    top: 13px;
    transition: 0.3s;
    pointer-events: none;
  }

  .input {
    width: 500px;
    height: 45px;
    border: none;
    outline: none;
    padding: 0px 7px;
    border-radius: 6px;
    color: #212529;
    font-size: 15px;
    background-color: transparent;
    box-shadow: 3px 3px 10px #212529,
    -1px -1px 6px #212529;
  }

  .input:focus {
    border: 2px solid transparent;
    color: #212529;
    box-shadow: 3px 3px 10px #212529,
    -1px -1px 6px rgba(255, 255, 255, 0.4),
    inset 3px 3px 10px #212529,
    inset -1px -1px 6px rgba(255, 255, 255, 0.4);
  }

  .container .input:valid ~ .label,
  .container .input:focus ~ .label {
    transition: 0.3s;
    padding-left: 2px;
    transform: translateY(-35px);
  }

  .container .input:valid,
  .container .input:focus {
    box-shadow: 3px 3px 10px #212529,
    -1px -1px 6px rgba(255, 255, 255, 0.4),
    inset 3px 3px 10px #212529,
    inset -1px -1px 6px rgba(255, 255, 255, 0.4);
  }`;

  return (
    <div>
      <Container className='d-flex align-items-center flex-column ' style={{height:'90.5vh'}}>
        <h2 style={{margin:'20px 0 50px'}}>Add New Brand</h2>
        <Exportfile/>

        <StyledWrapper className='mt-5'>
      <div className="container">
        <input required type="text" name="text" className="input" />
        <label className="label">Name of brand</label>
      </div>
    </StyledWrapper>
    <Button style={{margin:'20px 0' ,width:'500px',height:'45px'}} variant="outline-success">Add new brand</Button>
    </Container>
    </div>
  )
}
