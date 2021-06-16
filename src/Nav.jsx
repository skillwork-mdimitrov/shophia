import Nav from 'react-bootstrap/Nav';

const QuickLinks = ({ links }) => {

  const navLinks = links.map(link => {
    // currently supports only font-awesome icons as links and strings (eg. Home, Gallery)
    const key = link?.props?.icon?.iconName ? link.props.icon.iconName : link;
    
    return (
      <Nav.Item key={key}>
        <Nav.Link eventKey={key}>{link}</Nav.Link>
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
