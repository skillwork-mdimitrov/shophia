import styled from 'styled-components';

const StyledAbsCenteredYDiv = styled.div`
  position: absolute;  
  left: 50%;
  transform: translate(-50%);
`;

const StyledAbsCenteredXYDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export { StyledAbsCenteredXYDiv, StyledAbsCenteredYDiv }

