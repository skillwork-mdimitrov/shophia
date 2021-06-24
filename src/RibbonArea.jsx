import styled from 'styled-components';

import { checkIcon, clockIcon, planeIcon } from './components/Icon/AwesomeIcons';
import { colours } from './styles/commonColours';

const StyledRibbonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledArrow = styled.div`
  background-color: ${colours.straw};
  color: #FFFFFF;  
  display: flex;
  font-size: 22px;
  height: 90px;
  line-height: 58px;
  margin: 28px;
  position: relative;
  width: 550px;
  align-items: center;
  
  &::after {
    border-color: transparent ${colours.straw};
    border-style: solid;
    border-width: ${props => props.pointingLeft ? "45px 40px 45px 0" : "45px 0px 45px 40px"};
    content: "";
    height: 0;
    left: ${props => props.pointingLeft ? "-40px" : "auto"};
    position: absolute;
    right: ${props => props.pointingRight ? "-40px" : "auto"};
    width: 0;

    @media (min-width: 1200px) and (max-width: 1600px) { 
      height: 70px;
      border-width: ${props => props.pointingLeft ? "36px 40px 36px 0" : "36px 0px 36px 40px"};
    }

    @media (max-width: 1199px) { 
      display: none
    }
  }

  @media (min-width: 1200px) and (max-width: 1600px) { 
    height: 70px;
  }

  @media (max-width: 1199px) { 
    display: none
  }
`;

const StyledIconContainer = styled.div`
  align-items: center;
  display: flex;
  margin-left: 1.2em;
  margin-right: .6em;
  ${props => props.rotate && 'transform: rotate(-45deg);'}
`; 

const RibbonArea = () =>
  <StyledRibbonContainer className="text-uppercase">
    <StyledArrow pointingRight>
      <StyledIconContainer rotate={'true'}>
        {planeIcon}
      </StyledIconContainer>
      <span title="In Order Min $200">Free shipping</span>
    </StyledArrow>

    <span href="#placeholder" className="ribbonContainer">
      <span className="myButton ribbon">
        {clockIcon}
        <span title="Money Back Guarantee">30-days returns</span>
      </span>
    </span>

    <StyledArrow pointingLeft>
      <StyledIconContainer>
        {checkIcon}
      </StyledIconContainer>
      <span title="Lifetime support">24/7 support</span>
    </StyledArrow>
  </StyledRibbonContainer>

export { RibbonArea }