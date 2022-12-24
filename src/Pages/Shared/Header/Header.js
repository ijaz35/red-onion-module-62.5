import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../src/images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import auth from '../../../firebaseinit';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const [signOut] = useSignOut(auth);
    return (
        <Navbar className='py-4' collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand as={Link} className='header-logo' to="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto ">
                        <Nav.Link as={Link} to={'/checkout'} className='text-dark'>
                            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        </Nav.Link>
                        {!user ? <div className='d-flex'>
                            <Nav.Link as={Link} to='/login' className='text-dark mx-3 fw-bold'>Login</Nav.Link>
                            <Nav.Link as={Link} to='/signup' className='nav-btn text-white mx-auto'>SignUp</Nav.Link>
                        </div>
                            :
                            <div>
                                <span className='mx-2 text-capitalize d-inline-block'>{user?.displayName}</span>
                                <button className='nav-btn' onClick={() => signOut()}>Signout</button>
                            </div>

                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;



