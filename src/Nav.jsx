import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const StyledNav = styled(Nav)`
  font-family: Playfair Display, serif;
  margin-right: 20px;
`;

const StyledNavLink = styled(Nav.Link)`
  color: inherit;
`;

const QuickLinks = ({ links }) => {

  const navLinks = links.map(link => {
    // currently supports only font-awesome icons as links and pure strings (eg. Home, Gallery)
    const key = link?.props?.icon?.iconName ? link.props.icon.iconName : link;
    
    return (
      <Nav.Item key={key}>
        <StyledNavLink eventKey={key}>{link}</StyledNavLink>
      </Nav.Item>
    )
  })

  return (
    <StyledNav>
      {navLinks}
    </StyledNav>
  )
}

export { QuickLinks }
