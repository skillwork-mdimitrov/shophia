import styled from 'styled-components';
import { colours } from './commonColours';

const diamondSize = "10px";

const StyledDiamond = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border: ${diamondSize} solid transparent;
  border-bottom-color: ${colours.straw};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: -${diamondSize};
    top: ${diamondSize};
    width: 0;
    height: 0;
    border: ${diamondSize} solid transparent;
    border-top-color: ${colours.straw};
  }
`;

export { StyledDiamond }