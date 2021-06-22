import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { phoneIcon } from './AwesomeIcons';

const TopNavBar = () => {
  const phoneNum = "+001 555 801";
  const userName = "JOHN";

  return (
    <Navbar bg="light" expand="lg">
      <div>
        {phoneIcon}
        <Navbar.Brand href="#home">Call {phoneNum}</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Navbar.Text className="text-uppercase">
          Welcome {userName}!
        </Navbar.Text>
        <Nav className="text-uppercase">
          <Nav.Link href="#account">My account</Nav.Link>
          <Nav.Link href="#wishlist">My wishlist</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export { TopNavBar };
