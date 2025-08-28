import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/css/NavBarRB.css';
import CartWidget from './CartWidget';

function NavBarRB() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img  className= 'logo'src="/logo.png" alt="logo" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOMBRE</Nav.Link>
            <Nav.Link href="#features">MUJER</Nav.Link>
            <Nav.Link href="#pricing">ACCESORIOS</Nav.Link>
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarRB;