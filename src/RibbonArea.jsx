import { checkIcon, clockIcon, planeIcon } from './AwesomeIcons';
import { colours } from './styles/commonColours';
import styled from 'styled-components';

const StyledRibbonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledArrow = styled.div`
  display: inline-block;
  height: 60px;
  color: #FFFFFF;
  font-size: 22px;
  line-height: 38px;
  margin: 19px;
  position: relative;
  width: 200px;
  background-color: ${colours.straw};

  &::after {
    border-color: transparent ${colours.straw};
    border-style: solid;
    border-width: ${props => props.pointingLeft ? "31px 25px 29px 0" : "31px 0px 29px 25px"};
    content: "";
    height: 0;
    left: ${props => props.pointingLeft ? "-25px" : "auto"};
    position: absolute;
    right: ${props => props.pointingRight ? "-25px" : "auto"};
    width: 0;
  }
`;

const RibbonArea = () =>
  <StyledRibbonContainer>
    <StyledArrow pointingRight>
      {planeIcon} FREE SHIPPING
    </StyledArrow>

    <a href="#" className="aLink">
      <span className="myButton ribbon">
        {clockIcon}
        30-DAYS RETURNS
      </span>
    </a>

    <StyledArrow pointingLeft>
      {checkIcon} 24/7 SUPPORT
    </StyledArrow>
  </StyledRibbonContainer>

export { RibbonArea }