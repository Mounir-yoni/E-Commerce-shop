import React from 'react'
import { Container } from 'react-bootstrap'
import Loginpanel from '../../Commponet/Login-Regiseter/Loginpanel'
import Navbarcomponent from '../../Commponet/Utility/Navbar'
export default function Login() {
  return (
    <div>
        <Navbarcomponent/>
        <Container className='d-flex justify-content-center ' style={{height:'100vh'}} >
            <Loginpanel/>
        </Container>
    </div>
  )
}
