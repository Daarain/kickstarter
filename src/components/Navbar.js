import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import '../app.css'

function Landingpagenavbar(){
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="justify-content-end" >
          <Navbar.Brand href="#home">KickStarter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Discover </Nav.Link>
            <Nav.Link href="#pricing">Start a project </Nav.Link>


          </Nav>
          <Nav className="ms-auto">
   <Button variant="outline-light" href="#login" className="me-2">
              Login
            </Button>
            <Button variant="light" href="#signup" className="sign-upbutton">
              Signup
            </Button>
            </Nav>
        </Container>
      </Navbar>
    </>
  );

}

export default Landingpagenavbar