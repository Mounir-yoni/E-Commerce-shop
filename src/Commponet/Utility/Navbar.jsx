/* eslint-disable no-unused-vars */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Utility.css';
import logoSrc from '../../image/logo.png';
import { Link } from 'react-router-dom';
export default function Navbarcomponent() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
    <Container fluid>
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <img src={logoSrc} alt="Logo" className="navbar-logo me-2" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex mx-auto my-2 my-lg-0" style={{ flex: 1 }}>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Search"
            className="me-2"
          />
        </Form>
        <Nav className="ms-auto d-flex align-items-center">
          <Link to="/login" className="text-decoration-none">
            <Button className="login-btn me-2 mt-1" variant="outline-success">
              Login
              <svg
                style={{ width: "20px", height: "20px", marginLeft: "5px" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </Button>
          </Link>
          <Link to="/purchase/2" className="text-decoration-none">
            <Button className="car-btn mt-1" variant="outline-light">
              Purchases
              <svg
                style={{ width: "20px", height: "20px", marginLeft: "5px" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-basket2-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
              </svg>
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
