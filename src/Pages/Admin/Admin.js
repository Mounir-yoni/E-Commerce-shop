import React from 'react'
import Navbarcomponent from '../../Commponet/Utility/Navbar'
import { Col, Container } from 'react-bootstrap'
import CategoryAdmin from '../../Commponet/Admin-Commponet/CategoryAdmin'
import Order from '../../Commponet/Admin-Commponet/Order'
import Productsadmin from '../../Commponet/Admin-Commponet/Productsadmin'
import Addnewbrand from '../../Commponet/Admin-Commponet/Addnewbrand'
import Addnewproduct from '../../Commponet/Admin-Commponet/Addnewproduct'

export default function Admin() {
  return (
    <div>
        <Navbarcomponent/>
        <Container>
            <CategoryAdmin ></CategoryAdmin>
            <Addnewproduct/>
        </Container>
    </div>
  )
}
