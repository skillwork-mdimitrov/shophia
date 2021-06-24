import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { phoneIcon } from '../Icon/AwesomeIcons';

const StyledNavBarText = styled(Navbar.Text)`
  &::after {
    content: '';
    border-left: 1px solid black;
    margin-left: 1em;
    margin-right: .5em;
  }
`;

const StyledNavLink = styled(Nav.Link)`
  &::after {
    content: '';
    border-left: 1px solid black;
    margin-left: 1em;
  }
`;

const TopNavBar = () => {
  const phoneNum = "+001 555 801";
  const userName = "JOHN";

  return (
    <Navbar bg="light" expand="lg">
      <div className="ml-4">
        {phoneIcon}
        <Navbar.Brand className="ml-4" href="#call-skype">Call {phoneNum}</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end mr-4" id="basic-navbar-nav">
        <StyledNavBarText className="text-uppercase">
          Welcome {userName}!
        </StyledNavBarText>
        <Nav className="text-uppercase">
          <StyledNavLink href="#account">My account</StyledNavLink>
          <StyledNavLink href="#wishlist">My wishlist</StyledNavLink>
          <StyledNavLink href="#login">Login</StyledNavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export { TopNavBar };
