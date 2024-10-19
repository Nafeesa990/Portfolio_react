import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/header.css';

function Header() {
  return (
    <>
      <Navbar  data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#" className='head'>Portfolio</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/" className='item1'>Home</Nav.Link>
            <Nav.Link href="/About" className='item1'>About</Nav.Link>
            <Nav.Link href="/Contact" className='item1'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
