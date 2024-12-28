import React from 'react'
import Registerpanel from '../../Commponet/Login-Regiseter/Registerpanel'
import { Container } from 'react-bootstrap'
import Navbarcomponent from '../../Commponet/Utility/Navbar'

export default function Register() {
  return (
    <div>
        <Navbarcomponent/>
        <Container className='d-flex justify-content-center ' style={{height:'100vh'}} >
      <Registerpanel/>
        </Container>
    </div>
  )
}
