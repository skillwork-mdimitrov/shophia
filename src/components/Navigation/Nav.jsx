import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledNav = styled(Nav)`
  font-family: 'Playfair Display', serif;
  margin-right: 20px;
`;

const StyledNavLink = styled(Nav.Link)`
  color: inherit;
`;

const QuickLinks = ({ links }) => {

  const navLinks = links.map(link => {
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

QuickLinks.propTypes = {
  links: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object),
  ])
}

export { QuickLinks }
