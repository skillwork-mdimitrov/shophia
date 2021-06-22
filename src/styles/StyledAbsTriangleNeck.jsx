import styled from "styled-components";

import { StyledAbsXCenteredDiv } from './StyledAbsCenteredDiv';

const StyledAbsTriangleNeck = styled(StyledAbsXCenteredDiv)`
  width: 0;
  height: 0;
  border-left: ${({ borderLeft = 200}) => borderLeft}px solid transparent;
  border-right: ${({borderRight = 200}) => borderRight}px solid transparent;
  border-top: ${({ borderTop = 30}) => borderTop}px solid white;
  z-index: 1;
`;

export { StyledAbsTriangleNeck }