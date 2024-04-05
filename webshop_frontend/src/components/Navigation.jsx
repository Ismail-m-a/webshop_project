// Importerar nödvändiga beroenden och stilark.
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart'; // Import useCart
import { useAuth } from './AuthContext'; // Import useAuth hook
import '../css/Navigation.css';

const Navigation = () => {
  const { totalItems } = useCart(); // Hämtar totala antalet unika artiklar från kundvagnen.
  const { isLoggedIn, logout } = useAuth(); // Hämtar isLoggedIn och logout-funktionen från autentiseringskontexten.
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // utför logout 
    navigate('/'); // Omdirigerar till startsidan efter logout
  };

  return (

    // Renderar navigeringsmenyn med React Bootstrap-komponenter.
    <>
      <Navbar className="header fixed-top" expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <h2>
              <span><Link to="/" className="highlight-logo">Nordic Classy</Link></span>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products">
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              {/* Villkorlig rendering för att visa "Logga ut" */}
              {isLoggedIn ? (
                <Nav.Item>
                  <Nav.Link as="button" onClick={handleLogout}>Logout</Nav.Link> 
                </Nav.Item>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link> 
                </LinkContainer>
              )}
              <LinkContainer to="/addtocart"> 
                <Nav.Link>   
                  🛒{totalItems > 0 ? `(${totalItems})` : ''}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
