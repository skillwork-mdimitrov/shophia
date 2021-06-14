import './App.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const phoneNum = "+001 555 801";

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Call {phoneNum}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Navbar.Text>
          WELCOME MSG!
        </Navbar.Text>
        <Nav> 
          <Nav.Link href="#account">MY ACCOUNT</Nav.Link>
          <Nav.Link href="#wishlist">MY WISHLIST</Nav.Link>
          <Nav.Link href="#login">LOGIN</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;
