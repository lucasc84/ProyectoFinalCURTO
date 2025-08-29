import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/css/NavBarRB.css';
import CartWidget from './CartWidget';

function NavBarRB() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" aria-label="Navegación principal">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center w-100 justify-content-between">
            <Navbar.Brand href="#home">
              <img className="logo" src="/logo.png" alt="logo" />
            </Navbar.Brand>
            <Nav className="d-flex align-items-center">
              <Nav.Link href="#hombre">HOMBRE</Nav.Link>
              <Nav.Link href="#mujer">MUJER</Nav.Link>
              <Nav.Link href="#accesorios">ACCESORIOS</Nav.Link>
              <CartWidget />
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarRB;