import styled from 'styled-components';

import { checkIcon, clockIcon, planeIcon } from '../Icon/AwesomeIcons';
import { colours } from '../../styles/commonColours';

const StyledRibbonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) { 
    display: none;
  }
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

const StyledMidRibbonContainer = styled.span`
  color: white;
  overflow: hidden;
  display:  block;
  margin: 0.75em;
`;

const StyledMidRibbonWrapper = styled.span`
  letter-spacing: .1em;
  text-decoration: center;
  padding: 0.75em 1.25em 0.75em 1.75em;
  border-color: white;
  border-width: 2px;
  border-style: solid;
  white-space: nowrap;
  -webkit-transition: border-color 500ms ease, color 250ms ease;
  -moz-transition: border-color 500ms ease, color 250ms ease;
  -ms-transition: border-color 500ms ease, color 250ms ease;
  -o-transition: border-color 500ms ease, color 250ms ease;
  transition: border-color 500ms ease, color 250ms ease;

  background-color: black;
  font-size: 1.9em;
  border-width: 2px 0;
  position: relative;
  display: inline-block;
  width: 600px;
  padding: 0.75em 0 0.75em 3.5em;

  @media (min-width: 1200px) and (max-width: 1600px) { 
    font-size: 1.5em;
  } 

  &::before {
    background-color: white;

    content: '';
    display:inline-block;
    border-bottom-width:2px;
    border-left-width:2px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
    -webkit-transform-origin: 0% 100%;
    -moz-transform-origin: 0% 100%;
    -ms-transform-origin: 0% 100%;
    -o-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    position:absolute;
    top:-50%;
    bottom:50%;
    left:1.6em;
    right:0;
  }

  &::after {
    background-color: white;

    content: "";
    display: inline-block;
    border-bottom-width: 2px;
    border-right-width: 2px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
    position: absolute;
    top: -50%;
    bottom: 50%;
    left: 0;
    right: 1.6em;

    @media (min-width: 1200px) and (max-width: 1600px) { 
      right: 8.5em;
    }
  } 
`;

const RibbonArea = () =>
  <StyledRibbonContainer className="text-uppercase">
    <StyledArrow pointingRight>
      <StyledIconContainer rotate={'true'}>
        {planeIcon}
      </StyledIconContainer>
      <span title="In Order Min $200">Free shipping</span>
    </StyledArrow>

    <StyledMidRibbonContainer>
      <StyledMidRibbonWrapper>
        <span className="pr-3">{clockIcon}</span>
        <span title="Money Back Guarantee">30-days returns</span>
      </StyledMidRibbonWrapper>
    </StyledMidRibbonContainer>

    <StyledArrow pointingLeft>
      <StyledIconContainer>
        {checkIcon}
      </StyledIconContainer>
      <span title="Lifetime support">24/7 support</span>
    </StyledArrow>
  </StyledRibbonContainer>

export { RibbonArea }