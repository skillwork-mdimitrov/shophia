import styled from 'styled-components';
import { colours } from './commonColours';

const StyledDiamond = styled.div`
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-bottom-color: ${colours.straw};
  position: relative;
  top: -50px;

  &::after {
    content: '';
    position: absolute;
    left: -50px;
    top: 50px;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-top-color: ${colours.straw};
  }
`;

export { StyledDiamond }