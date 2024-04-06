import React, { useContext } from 'react';
import { Container, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './Footer.css'


const Header = () => {




  return (
    <Navbar collapseOnSelect bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="/">SERO Chapra</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='link' to="/">Home</Link>
            <Link className='link' to={"/about"}>About</Link>
            <NavDropdown className='link' title='Apply'>
                  <Link className='link nav' to='/toolkit'>ToolKit</Link>
                  <Link className='link nav' >Study Kit</Link>
                  <Link className='link nav' >Logout</Link>
                </NavDropdown>
            <Link className='link' to="/contact">Contact</Link>
          </Nav>
          {/* <Nav>
            {
              localStorage.getItem('login-info') ?
                <NavDropdown title={loginData?.name}>
                  <NavDropdown.Item href={`/profile/${loginData?.userId}`}>Profile</NavDropdown.Item>
                  <NavDropdown.Item href={`/changePassword/${loginData?.userId}`}>Change Password</NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>

                :
                <>
                  <Nav.Link href='/login' className="link" >Login</Nav.Link>
                  <Nav.Link href='/signup' className="link">Signup</Nav.Link>
                </>
            }
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;