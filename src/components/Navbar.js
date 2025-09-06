// import React ,{useState}from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import '../app.css'

function Navbar(){
return(
  <div className="navbar">
    <div className="logo">
      <div className="KickStarter">KickStarter</div>
    </div>
    <div className="webpages">
  <Button className="links">Home </Button>
  <Button className="links">Project</Button>
  <Button className="links">Professional</Button>
  <Button className="links">Companies</Button>
    </div>
    <div className="searchfield">
  <svg
        width="20"
        height="20"
        fill="#888ca0"
        style={{ flexShrink: 0, marginRight: '8px' }}
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" stroke="#888ca0" strokeWidth="2" fill="none"/>
        <line x1="21" y1="21" x2="16.6" y2="16.6" stroke="#888ca0" strokeWidth="2"/>
      </svg>
      <input type="search" placeholder="search"></input>
      </div>
    <div className="loginbuttons">
     <Button className='login'>Login</Button>
   <Button className='register'>Register</Button>
    </div>
  </div>
)

}

export default Navbar