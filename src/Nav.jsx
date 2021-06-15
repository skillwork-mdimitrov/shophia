import Nav from 'react-bootstrap/Nav';

const MyNav = () =>
  <Nav>
    <Nav.Item>
      <Nav.Link eventKey="home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="gallery">Gallery</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="categories">Categories</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="pages">Pages</Nav.Link>
    </Nav.Item>
  </Nav>

export { MyNav }
