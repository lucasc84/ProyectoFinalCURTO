//NavBarRB es el componente de navegación principal
//Se utiliza NavLink para resaltar la pestaña activa


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/css/NavBarRB.css';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBarRB() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" aria-label="Navegación principal">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center w-100 justify-content-between">
            <Navbar.Brand as={NavLink} to='/'>
              <img className="logo" src="/logo.png" alt="logo" />
            </Navbar.Brand>
            <Nav className="d-flex align-items-center navbar-font">
              <Nav.Link as={NavLink} to='/category/hombre' className="nav-spacing">HOMBRE</Nav.Link>
              <Nav.Link as={NavLink} to='/category/mujer' className="nav-spacing">MUJER</Nav.Link>
              <Nav.Link as={NavLink} to='/category/accesorios' className="nav-spacing">ACCESORIOS</Nav.Link>
              <CartWidget />
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarRB;