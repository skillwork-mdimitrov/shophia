import Nav from 'react-bootstrap/Nav';

const QuickLinks = ({ links }) => {

  const navLinks = links.map(link => {
    // hacky fix extract unique key name from an icon
    const key = () => {
       if(typeof link === 'string') {
        return link;
      } else if(Boolean(link.props.icon.iconName)) {
        return link.props.icon.iconName;
      } else {
        return 'redundantKey';
      }
    }
    
    return (
      <Nav.Item key={key()}>
        <Nav.Link eventKey={key()}>{link}</Nav.Link>
      </Nav.Item>
    )
  })


  return (
    <Nav>
      {navLinks}
    </Nav>
  )
}


export { QuickLinks }
