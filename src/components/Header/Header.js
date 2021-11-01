import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Travel Agency</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/services">services</Nav.Link>
                            <Nav.Link as={Link} to="/galary">Galary</Nav.Link>
                            <Nav.Link as={Link} to="/world-tours">World Tour</Nav.Link>
                            <Nav.Link as={Link} to="/addService">Add Services</Nav.Link>
                            <Nav.Link as={Link} to="/manageServices">Manage Services</Nav.Link>
                            <Nav.Link as={Link} to="/about">about</Nav.Link>

                        </Nav>
                        <Nav className="d-flex align-items-center">
                            {user?.email && <Navbar.Text>
                                <img className="profile-image" src={user?.photoURL} alt="" /><span className="me-3">{user?.displayName}</span>
                            </Navbar.Text>}

                            {user?.email ?
                                <Button onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;