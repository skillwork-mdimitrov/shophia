import Nav from 'react-bootstrap/Nav';

const QuickLinks = ({ links }) => {
  const navLinks = links.map(link =>
    <Nav.Item key={link}>
      <Nav.Link eventKey={link}>{link}</Nav.Link>
    </Nav.Item>);

  return (
    <Nav>
      {navLinks}
    </Nav>
  )
}


export { QuickLinks }
