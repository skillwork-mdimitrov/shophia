import styled from 'styled-components'

const StyledBrandName = styled.span`
  font-family: Krinkes Decor PERSONAL USE, sans-serif;
  font-size: 4em;

  @media (max-width: 576px) { 
    font-size: 2em;
  }
`;

const StyledLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { StyledBrandName, StyledLinksContainer }
